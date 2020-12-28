const github = require('octonode');
const marked = require('marked');
const dompurify = require('dompurify');

const ghClient = github.client();
const blogRepo = ghClient.repo('srobertson421/seangoescoding');

blogRepo.contents('');