# NC-news's Front-end

The NC-news website is live and hosted on Netlify:
[lmm-portfolio.netlify.app](https://lmm-portfolio.netlify.app)

This repo contains a personal portfolio website where I can show off my projects and introduce myself. 

## Local hosting

- Firstly, fork or clone this directory

- Then, install dependencies with:

```
npm i
```

To run a version of this website on your machine use:

```
npm start
```

In your browser, navigate to: [http://localhost:8000](http://localhost:8000) and you should see a version of the website hosted locally. The page will update every time you save a change whist hosting.

This project uses contentful, and the API key I use is in a .env which is gitignored. 
To add content from your Contentful project, add you own contentful API key in the following way: 

- create a `.env.development` file in the root folder

In the `.env.development` folder add the following:

```
CONTENTFUL_API_KEY=<YOUR API KEY>
```
Replacing <YOUR API KEY> with the API key provided by contenful. 
  
The GraphQL queries will also need to be modified to relect the names of the fields in your Contentful project model.

