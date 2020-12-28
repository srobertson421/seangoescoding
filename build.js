const github = require('octonode');
const marked = require('marked');
const DOMPurify = require('isomorphic-dompurify');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

const REPO_PATH = 'srobertson421/seangoescoding';

const ghClient = github.client();
const blogRepo = ghClient.repo(REPO_PATH);

async function fetchMDPosts() {
  try {
    const posts = await new Promise((resolve, reject) => {
      blogRepo.contents('md-posts', (err, data) => {
        if(err) {
          reject(err);
        }
  
        resolve(data);
      });
    });

    return posts;
  } catch(err) {
    console.log(err);
  }
}

async function fetchMDContent(filePath) {
  try {
    const content = await new Promise((resolve, reject) => {
      blogRepo.contents(filePath, (err, data) => {
        if(err) {
          reject(err);
        }

        resolve(data);
      });
    });

    return content;
  } catch(err) {
    console.log(err);
  }
}

async function generateHTMLPostsData() {
  const posts = await fetchMDPosts();
  const htmlPostsData = posts.map(async function(post) {
    const postData = await fetchMDContent(post.path);
    const content = Buffer.from(postData.content, 'base64').toString();
    const title = content.split('\n')[0].split('# ')[1];
    const slug = postData.name.split('.')[0];
    const rawHTML = marked(content);
    const cleanHTML = DOMPurify.sanitize(rawHTML);

    const htmlData = {
      title,
      slug,
      html: cleanHTML
    }

    return htmlData;
  });

  return Promise.all(htmlPostsData);
}

async function createHTMLFiles() {
  const htmlPosts = await generateHTMLPostsData();
  
  // delete build directory
  // console.log('Removing build folder');
  // fs.rmdirSync(path.join(__dirname, 'build'), { recursive: true });

  // // create new build directory
  // console.log('Creating new build folder');
  // fs.mkdirSync(path.join(__dirname, 'build'));

  // delete posts directory
  console.log('Removing posts folder');
  fs.rmdirSync(path.join(__dirname, 'public/posts'), { recursive: true });

  // create new posts directory
  console.log('Creating public/posts folder');
  fs.mkdirSync(path.join(__dirname, 'public/posts'));

  // read post template html
  console.log('Reading template html');
  const templateHTML = fs.readFileSync(path.join(__dirname, 'post_template.html')).toString();

  // read main page html
  console.log('Reading main html');
  const mainHTML = fs.readFileSync(path.join(__dirname, 'main.html')).toString();
  const mainPage = cheerio.load(mainHTML);

  console.log('Generating HTML post files');
  htmlPosts.forEach(postData => {
    const $ = cheerio.load(templateHTML);
    $('title').text(postData.title);
    $('body').append(postData.html);
    console.log(`Writing ${postData.slug}.html`);
    fs.writeFileSync(path.join(__dirname, `public/posts/${postData.slug}.html`), $.html());
    mainPage('#posts').append(`<a href="/posts/${postData.slug}.html">${postData.title}</a>`);
  });
  console.log('Finished creating posts');

  console.log('Writing index.html to public folder');
  fs.writeFileSync(path.join(__dirname, 'public/index.html'), mainPage.html());
}

async function main() {
  await createHTMLFiles();
}

main();