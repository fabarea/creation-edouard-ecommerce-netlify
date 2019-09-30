# 🛍 Ecommerce Store with Netlify Functions and Stripe

> A serverless function to process stripe payments with Nuxt, Netlify, and Lambda

Demo site is here: [E-Commerce Store](https://ecommerce-netlify.netlify.com/)

![screenshot of site](https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/ecommerce-screenshot.jpg "E-Commerce Netlify Site")

There are two articles explaining how this site is set up:
* Explanation of Netlify Functions and Stripe: [Let's Build a JAMstack E-Commerce Store with Netlify Functions](https://css-tricks.com/lets-build-a-jamstack-e-commerce-store-with-netlify-functions/)
* Explanation of dynamic routing in Nuxt for the individual product pages: [Creating Dynamic Routes in Nuxt Application](https://css-tricks.com/creating-dynamic-routes-in-a-nuxt-application/)

## Build Setup

``` bash
# install dependencies
$ yarn install or npm install

# serve with hot reload at localhost:3000
$ yarn dev or npm dev

# build for production and launch server
$ yarn build or npm build
$ yarn start or npm start

# generate static project
$ yarn generate or npm generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

Hosting
-------

Site is hosted on Netlify - https://www.netlify.com

Copyright
---------

Fabien Udriot
[Twitter](https://twitter.com/fudriot)
[Github](https://github.com/fabarea)

Based on the work of Sarah Drasner 
[Twitter](https://twitter.com/sarah_edo)
[Github](https://github.com/sdras)
        
TODO
----

* Send email of the basket
* Write the order into a database? Where? Mangodb? Firebase? Google Stylesheets?
    how can it be secure??
* Add size of the product (M, S, ...)
* Add Edouard images

Nice to have
------------

Make the data comes from a third-party database ? Google Stylesheets
