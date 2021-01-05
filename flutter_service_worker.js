'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a9b3fe9d841f168384058f23839f03f5",
".git/config": "bf78d3f4e052683964b604b7697b7e84",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "c7ded44f5bc37607d1ef3bd298bb4bb9",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1e426ed14258127562d857c5c33f3e80",
".git/logs/refs/heads/master": "1e426ed14258127562d857c5c33f3e80",
".git/logs/refs/remotes/origin/master": "9af979094f60b1d0eaf2f8c28840c978",
".git/objects/02/20533beccfb93832bca3c5c8ead108e92ecf7d": "eff640f1e50ca83b9e11084c54d5b770",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/05/c3fe48f6b84f36419bdcc8bf40a9a36aed9d7d": "639dcfd6238d8f6e892b41549d79e679",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/2f/4ae35a742e46ca0e8f84c222d57e173d22544b": "ca08836601ecf3b19b1c398d1ef16378",
".git/objects/39/b5d218d71357f595df742fefae311b9e303d4a": "2a04b4fade5379481f791b1ff7daa2b9",
".git/objects/39/deb977f25c82d372e5be6fd8b3ac83febc45d1": "f0d3e757cfb05f0001523fc1c5c693a9",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/e298220f19e7b3b3a16813d2ae63f15a37dd39": "37edadb6e5123c24264f5d7fefadd6b0",
".git/objects/58/3215734eb5d24a94a56ca2c14b7193333bbc8e": "cefa8ed9b71abd23cd01078098ba2cf8",
".git/objects/60/d46764760c46841732be1097ce6deeb093c65e": "818ebb5b99a2ddc33926b3c516f604f8",
".git/objects/61/0853f355153fdf90cb78b07b8c7718c07e502f": "b3d73369f58bfd66f0f0d9978e331aa4",
".git/objects/67/f9852bc6508b2bf0b6d47ef85ca7be8d247a82": "05b41bd9d8708aaba43f22a7e7fe73cd",
".git/objects/69/2b574763a028ef548fe42908eefeb9de97f80d": "cd0307535dee04265c464c2778c40ffd",
".git/objects/6b/346a8245431ccb343608dafbda302f6f295219": "7a71cb4f819a58a2d850c82187b961fe",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/f7c9c977b8b125e02b7f778374c395d99b56ba": "838ad5b9d299f6764b9ed11f675ddb5e",
".git/objects/83/e5d8c4454934f9c229469a86d82f589a1847d6": "5a362bc3031aef5bcfc8ac2f3d4dd225",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/bcc410b59acbab6a0e560b1a890db4655495d2": "bf80f3317c2e502d8ca96f656a7ad5b7",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a8/c67e4ecef367c037dbdfd36d750318c2a9bf48": "2ada4ffe4ee540a778065e9e5240fe05",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b3/af4b5f6d6e1c7e4e3ef25728ca56ad82728626": "b48035920dcc88cee2faee9244dfe07b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/ad53aafb37eaad88a7eff5abeab474fff097c6": "6921d0bff41ff4eb72d945c0d815049c",
".git/objects/bc/d24f4d003719dfe8015e18a658581dd42a3185": "b1e3240e5f863680788f1f8b13dbf4f6",
".git/objects/be/961c95ea7003851ded39b7bf12d31aa6e3959f": "f0f2dcb1c55f0624fa3baa5d888afa8a",
".git/objects/c0/8e991ad49f02aac4fc98b32838e032f254e147": "db20fc509ca5b4b80d6770669ccf300b",
".git/objects/ce/7604fa43565b8af466428a310c057d7c3bc05e": "a001a3eb58080194316c37290d6e322b",
".git/objects/d3/f522b68a9f4de50280b21a081d08112cdfb47a": "30eabb2b429292bc4c60c7b13a398adb",
".git/objects/e2/ed4a711f3935fc5d53456034d2656dfcd7a1fa": "39b89732fc6729d94defad8743fe44f2",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/4fc66469c62f480867383002d6dfe631d2294d": "ee380495e79d77cb0b6b6cda3dc9788a",
".git/objects/e7/88051261d6aec7607295366f3776d190b35af0": "d5705fdde428ec0f7728678a125a99a0",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f4/9447081eb805ac3e9bb0b56fbe45130a1b243e": "02735d5650a976056f5dd34ddf8fdac2",
".git/objects/f6/4cfcd8170eb3431e12c313d548e4b82faf2f59": "934c4e667daf8ffb68f1c1af6b3957d8",
".git/objects/fd/c384f6a84bdb87b8afa90c767142b980c35e16": "18c56d8c7531fcf47e10397745b2be47",
".git/refs/heads/master": "64611a8936be932aa688f70e449c37c7",
".git/refs/remotes/origin/master": "64611a8936be932aa688f70e449c37c7",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "286df8bbafa25f43d9f1ea1f994a8f1f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "1b386885f9bb5133c18d5ce244aab38c",
"/": "1b386885f9bb5133c18d5ce244aab38c",
"main.dart.js": "551c6bcda544cece745bf2460230fd1e",
"manifest.json": "180b27026949d8b8311998c6590a4604",
"version.json": "0cc89aeb0ea55669a2f8a9a7898b6539"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
