"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/weekend-doem/index.html","658cf5c2beac04efab49e8bc871fa7f4"],["/weekend-doem/static/css/main.4c7226f2.css","cc974dd5b77b4049837a955c55785f77"],["/weekend-doem/static/js/main.58c1b577.js","c58751c09d3f5cf627c17c65e2b39932"],["/weekend-doem/static/media/1.e314c9a1.jpg","e314c9a12d254555a0657f4ef3cfe306"],["/weekend-doem/static/media/1.ecff32eb.jpg","ecff32eb413ddfe9915978babc6d6d64"],["/weekend-doem/static/media/2.efc7d8c1.jpg","efc7d8c1f9e1226fbf877bbe891149e5"],["/weekend-doem/static/media/2.ff6eb0df.jpg","ff6eb0dff700ab65a1dd6135a2cd02ed"],["/weekend-doem/static/media/3.a706cb2b.jpg","a706cb2b71b67cfd2850a16e60c30179"],["/weekend-doem/static/media/3.ba261f5b.jpg","ba261f5b591bb693c748dd0a21fc1de5"],["/weekend-doem/static/media/4.c02dc295.jpg","c02dc295addfb27c8bf6f09ecca85a05"],["/weekend-doem/static/media/5.1db47e7e.jpg","1db47e7ee612ed0930a18e05899950ae"],["/weekend-doem/static/media/next.ffeea475.svg","ffeea47549bbacbbf7259d47f2bed760"],["/weekend-doem/static/media/prev.2af3c830.svg","2af3c83061811efda38160b09795e98c"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var a=new Request(n,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),a="index.html";(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),t=urlsToCacheKeys.has(n));var r="/weekend-doem/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(n=new URL(r,self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});