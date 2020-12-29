# Make Your Own CDN with Netlify

These days when you need to build a complex web application you typically will be reaching for NPM to install packages locally and then bundle them with a bundling tool like [webpack](https://webpack.js.org/) or (my favorite) [snowpack](https://www.snowpack.dev/). A newer option one has, however, is to utilize [skypack](https://www.skypack.dev/) to import directly from a URL into your ES Module code.

```javascript
import confetti from 'https://cdn.skypack.dev/canvas-confetti';
```

Skypack is a cdn that allows you to incorporate just about any NPM module without having to install locally, which I think is pretty awesome. Some bundlers will even bundle up that imported code if you need it to be transpiled for older browsers!

So Skypack hits the mark for NPM modules, but what about your own custom code? I don't know about you but I have written quite a few small functions and libraries over the years that I wish I had readily accessible to use in subsequent projects. Sure I could put them in a notes storage app, or Github gists, but those don't provide me a way to pull them directly into my project code at a later date. I could also turn them into NPM packages but the work entailed there is a bit much for a simple, one-off piece of code.

In order to solve this issue, I decided to utilize Netlify, which is a CDN itself for static assets, and host my own JS and CSS code. This would allow me to import my own code similar to how Skypack works and Netlify's CDN structure gives me the scalability I need should more projects start hitting the code I have stored on their servers.

So without further ado, lets jump to the code!

### Requirements
- Netlify account ( or any static hosting, Cloudflare, S3, etc. I use Netlify because of their awesome dev experience and Domain handling )
- Github account

### Step 1 - Setup Github repo and clone it
First thing we need to do is create our Github repo that will eventually connect to Netlify.

[Todo: image here]

### Step 2 - Add code to our repo

### Step 3 - Add netlify.toml file to control CORS

### Step 4 - Deploy and Profit!
