importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/05fed69131b2119ce5c0.js",
    "revision": "037293d0ae3a256c5fd553caf64bdab6"
  },
  {
    "url": "/_nuxt/1efc37e7096a9d1c26c4.js",
    "revision": "bcad2a60cb423f2a6742fa3157cbee1f"
  },
  {
    "url": "/_nuxt/411821fecb4d980f44c0.js",
    "revision": "88f0b5a7d61c6a278944297808b13a57"
  },
  {
    "url": "/_nuxt/68ee6a548217c62188d8.js",
    "revision": "25f5e3b77cf2426d2ffb4fbe83e2d7ec"
  },
  {
    "url": "/_nuxt/80f6a8da594cf9ce3f69.js",
    "revision": "34deecbc3657739391351160f02462c5"
  },
  {
    "url": "/_nuxt/825d7fa1806d79f1deb8.js",
    "revision": "16cc679d096082be2de27478d54f22b2"
  },
  {
    "url": "/_nuxt/8ca306adf401ddba9d3f.js",
    "revision": "3949b060ed5d4cbd0885a3c416a44862"
  },
  {
    "url": "/_nuxt/934516786bf7a68ba1c9.js",
    "revision": "4d6eb09339c1d49a43e6c64548bad9ff"
  },
  {
    "url": "/_nuxt/ba6806987126d7f5cccc.js",
    "revision": "4ad7ee96a87907c4cb49a45c04c7559b"
  },
  {
    "url": "/_nuxt/c857bc3bea4213323660.js",
    "revision": "d152993136afb45fcf34170f9c926303"
  },
  {
    "url": "/_nuxt/cfd1eed6c01e08aa0386.js",
    "revision": "11be451a93b457896aef76d5d0ea5f7f"
  },
  {
    "url": "/_nuxt/e0ddb3b5a46feec8120c.js",
    "revision": "a65b1c2fe71f6e1f92b4ed2f9024251d"
  },
  {
    "url": "/_nuxt/e36a1adab99b2d0b1cd8.js",
    "revision": "c725f07e21c9ae86cfe456677787650e"
  },
  {
    "url": "/_nuxt/fdf79bc32afb82c0d48e.js",
    "revision": "e62250a49c117a9b43b0d237e100f2f8"
  }
], {
  "cacheId": "multisender.app",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')
