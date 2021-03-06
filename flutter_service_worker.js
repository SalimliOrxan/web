'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "aaafa928a4f8616604eca12d830fe765",
"index.html": "32e8f7e3666e9845304f2aca5f66ffb0",
"/": "32e8f7e3666e9845304f2aca5f66ffb0",
"main.dart.js": "bff0273790550173cea5b03a5d76783b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "bee17ec0722f0f9e6197c2419a7b3ba5",
".git/ORIG_HEAD": "c68ea22cb44608e37e63895906bee8a8",
".git/config": "dac481cb5f6ec2ec2ab4949ea3065e2b",
".git/objects/0d/f37ee3474a06e4bb9ea6d4eba292fb4fa21bd9": "29aefae475a8361ae48e04c9f8181555",
".git/objects/59/e8a24f29c92ef645a89361d67a0397562ac067": "74f8be11184ee3274938a5f3f021a44d",
".git/objects/3e/029053c8787d5ad0b057e832c3e8fc0e4129b4": "f3302876c43e2b78dcf2746a0ceea74e",
".git/objects/68/61d6acd3cfc30210d6f50ac1811e09dcff9812": "231cd1c982467028b0769d4ea50623fe",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/32/65ee21f83f67fdbb2f5199dde5aaeb09dac490": "ad6d4310007cda95616efabcf7c46600",
".git/objects/56/cb34b7f8bb9dfda46cb113ab3ed7677518d641": "e428c355ab4ee88e955cdd6288a897d4",
".git/objects/56/e8a4d3dba153e8178e311247769b425771202c": "be5ed129a497752c3d6f20c9dbb4e472",
".git/objects/93/fee78927385b7a3a4ca2aab5026cd90d8b33ea": "207cb19ed75ee4a3f39fa443161f2147",
".git/objects/94/a25f7f4cb416c083d265558da75d457237d671": "f4ba8c706b5e4a214d83e95a0099370a",
".git/objects/0e/2e5e682a0bb9d6e9fc8aa95d2e3749db9f29eb": "2fcdd8cfed2b082688a2e6b8dec51914",
".git/objects/60/e343dce23dee173cd5f2abd1b6beff9241c5b5": "c3068dd4b2c5d4d9a5d8d498a0ea6abf",
".git/objects/9d/035ab3c74dca9eecd40bba351bd80a204c3da2": "9b013db3d88b5ed0599f1f2747b6fe0a",
".git/objects/a4/e9d6d394d223f3d5def9b9567386718ceb0969": "d743d946c92f8791da5cd053f89c1dbb",
".git/objects/a3/d0405b0d51a02c8b9862bf78a8b4c4c39de82f": "8e8c825e8a0b5de2205be2d4ecbf3acb",
".git/objects/d9/ee23ad74a7eb9a21271ea7bb7d9c45e464a34e": "5fec43bdf46402bfcbfa8d10196e76f6",
".git/objects/bb/9e25588933614d25f5c24acda2b0ac34fad290": "c543e77314f1738888a9b9101828f9a0",
".git/objects/b3/585cbbb7c42223599a3373ca22665352bfecd8": "7706ebe129a90c6549ed122e1da83677",
".git/objects/b3/ee6a79ddea1c3a14393e31fac58883b84e87dd": "715ac15cb09c11be3cfcca876d680d3b",
".git/objects/da/3aaba876d87cd4fdc12da6752c7f6f076d1b83": "5d66c0fef81d18efa7bb4ee231be9bb6",
".git/objects/bd/dded6bdd180ac26768117fdb3104b3a93a58ea": "056fa5ae7fc884c21cfd6ed496f787e7",
".git/objects/d6/ebd4805981b8400db3e3291c74a743fef9a824": "6c33f0e88a71d9ba8563eab3ee932f04",
".git/objects/bc/15ec7439a9fbfb6bad83fbd19a345e4b831725": "3fa2d85023cb03e6530bc596ce7952e8",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f3/2c365757a98ae624c059526480d416a7ac35dd": "97d99fd274bcc399722f8ef057e53787",
".git/objects/eb/056d9c7078871c0573153e77bf18bf34163aaf": "303b69cef3a8fb997793f22d61dccf0b",
".git/objects/c9/54ee9e910d6df1cf7f2f2fbf7c50d144fb4e26": "7494474e53a456ac0c16f6c64f097b36",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f5/cf371289e3f05d59927c75e136e650890828f7": "c6d42f0bbaf95ded631456d3e2940ec7",
".git/objects/f5/89ca37d210990980a9d9b1a5cb4a29d2db6c70": "8b8d21aac8e6cdbec1fc106163311c31",
".git/objects/f5/f56b3ba898e7fad04e7a690e270eb98933cd46": "b717b89a2f8eaf6b49fbfbecc9a8ffdc",
".git/objects/ca/a623ef01f44e40af99c8aceb52dc277e8a85b9": "e2e3b3f4650c640fc2e6284316dd5bf7",
".git/objects/ed/f9a7496c34aa4350f0209a6f62c5d621cc6ec3": "4d3b65ce5984b438f2ecfdc8e75634d9",
".git/objects/c1/9e46911cf2c01bda53480457c9722117e92fb5": "385bd3270a2287c62b40ed97f8793642",
".git/objects/c6/de94842f95528fecbf45006243d40fb99012d7": "c23773db1beca02c745dea77d23c069c",
".git/objects/4e/99bb444060386b9202e033c2f75f8733999e64": "2929f9ad0921cb2637166e163a8936fe",
".git/objects/20/a24e3a5b448d3f25eea4458bc9b6fd7ef82a1f": "dbf27bd88438cb3d9bb81570a96283ba",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/18/e9450e01947806822b30e8ffbe6a8fe9b1a1cc": "2f8093ab3a448e481f5d0ad0870f3d4d",
".git/objects/11/ccbb9a64ccd33f6a255a062b297c361ac8b0ff": "fcb2eb87b139afe08a44580f5d69a76d",
".git/objects/7d/014312a7c74219645351c1c54397373e7950fb": "c5b35160c0d3fc1b764cfefb8cb84a88",
".git/objects/42/2b4f399b3472bd0ddeada62212f000eb4d8770": "0b7c2e8316b67c6334dd9137163aff9c",
".git/objects/73/8e8d9330717b51b1f524866310204208cffe78": "45236fea38a3504674db19409cfdafb5",
".git/objects/1a/0db1a8fa4f3e93bf7863a262376b2b04322b73": "73ebb331245ed3a9170ff6901d56ed62",
".git/objects/1a/1d2aab4a96dca76fd20bc6192bb89ccbb4d5ba": "8468d0f0c3cb07a8cddc8f92570abbdd",
".git/objects/17/2337b8d4b027a1cc666c61a2acba357d9d5e10": "9d50f1350dca545555c143ca6a764739",
".git/objects/17/63e153b6f24f136d4d5567320e74f68b248b87": "3c120e06a805f50856e2d4abd1fcc145",
".git/objects/7b/01995b91a204d156928324fc8cd977a9e86226": "bef2b9b44cbf9bded38b181ed21da5a0",
".git/objects/8f/021257762fa7a01f148f97ae9abb09c24d0125": "4f19d452068cb6373349bc79545a5496",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/3f46286d6005c831e8bbba5803af4f46d7f490": "82b56f9a267d65fa71321c0cde65990a",
".git/objects/10/62edf33d49f6708010b6572b82b0eec6aa7c7e": "ba420e3ddebff67aa3896b94bf9de6a6",
".git/objects/10/12ebefd46fda03da94f6d080da77d2974dd199": "a407329948f87666f99380a0df90517d",
".git/objects/86/22718b3c4a12d55d0e475f99aaeb38a1de8038": "7ee43ed7c47cf957804da04c70a09f1d",
".git/objects/2f/c410532e46a82c4ef3ed01743802e85e6f352a": "979a56fea970a843d047722ebee57e17",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/0f9c33db2ceaf8bcaa853fcef2e2db9a7e13bf": "a51ea43fbe68b002d38e89d0ec38c166",
".git/objects/36/884b6641242c67c12422474d7d28d1d554e15d": "09c1ea50b7cb4e8af16e0775a639d200",
".git/objects/5c/7ffdea571969102c2439b26deeb563f4d766a2": "6c4ccb52afb7c39261cc524a87c9fee8",
".git/objects/5d/f171dd64f570a4ef8d38e31c759761e281d4b4": "ed5818601d34610111cf5013cc5ffce8",
".git/objects/91/9e6b3d2ea20a4213864a4a7524404887c95fcc": "50ba2c1ca5af1ff4e7afbb8f6d2c60c1",
".git/objects/65/47f730a9cb74523cb1f2eaad16642950c7bccd": "192ed9da75b984ddc69af9ed19e1bc78",
".git/objects/62/818b8cf02c488b0d76b1f7687828b9ab3f7106": "5ec35c2a7f1f2a333da8d10fffc63bdd",
".git/objects/96/7b16209481d248b0ceba62a433cb925dd76dd3": "6684ce2b7021baa010967d31213328ef",
".git/objects/3a/3b7121f0634964b08fe6af301c23674535f180": "5e749614bf8eacb640fd549bd9aecdc3",
".git/objects/30/965a3f59550751d950b11f5fc54facd2d1940c": "7f6b7f9e693f7ae4370b8888db9ac008",
".git/objects/5e/c7642ed92cb6ffd0bef78829b8c2c5c8d9fa0e": "0be876786b3f86bca46e0421bb226023",
".git/objects/08/e979c4d83f2728b5722ef8e0e5b666d5a71fe5": "a868ebdea4d068deab33e780fc765e3d",
".git/objects/99/a2323cee4d07dd44e03c2b23ce38a7cc3dd92a": "11d9adfaa9dae1a7f26c209030f05563",
".git/objects/90/076357ce9e2fd933f681388971c0cd0a2481b9": "7ef64f14d7dad653671a711c86335aff",
".git/objects/d3/f1d67d7a13c121487c63bd42ad059b7abfbe41": "091bb685331aa36531cbbc70b0b74ba7",
".git/objects/ba/5d27216f5bb6f06b04080a6d470206688ca958": "5f16cf718b6773c4e814858b14e87802",
".git/objects/b8/b0607ae34cc0165b16f99863add26b7774b0b2": "fc9fb7deecbea1f01a5add23db595085",
".git/objects/dd/769a6b3a613cc18b3172dd8a3ba6fe7e129be5": "e854979d7b8df1450c1fc3573ac65844",
".git/objects/b6/8ec2bfd026c4093a8ca916897aa998414e8da8": "25c9936e96902ded03ddf8c98ae30dad",
".git/objects/af/6a332ebf81f5ebd2edf2abfe13fc6fdaff92a6": "9a0016f4a3d03fa67135b88190ef71cd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/de/a4ce842be14d8c158857bcd7c15a2c77602a09": "8dea9c2d4fe30f3e520231e36f72945c",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/e1/c1def19be6b5ae69c3b3347ce914e91d779bae": "e0abaca1ab10276a1335e9605c5d5f58",
".git/objects/e1/c93a788125f0f829cad1af7387c49070fade14": "345a353124de7f634a16cb76c486e211",
".git/objects/cc/852ec71a659fc3746a48f8fb1088bb235df0d7": "6c6edb6627d4fa18bc0cf6f7e1cccf73",
".git/objects/e6/1178a767f20851c995e81c0a92f61d174f2f61": "4c56ef51720bba937681bfeda7e57ae9",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/c2/164df9615fba081b588ca08539e0c994779c87": "6b7cbcad78402ebafc21e68150597a08",
".git/objects/cb/dea5923fc11b5ecdd0801d680010c249d92dc1": "1b69c41e64346cf67e0469f170178313",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/7acea53eb091cf5b30518802c3073f544adeed": "937cef16b89c98aeaa2dda4bb9500126",
".git/objects/83/bb0707f0228dc6b4f5d6b7b7155e615bd0ebcc": "fca07f8eecdb40f8c7d042f2c0a4f3f5",
".git/objects/83/9292e7cf4b9ab5107fda6d69a2f6e489509548": "df8abcc87c4910528d8c0fbc03f2ed82",
".git/objects/83/bcac83130a868b5f71d8ddf43ba6e8c0507e1e": "18d7eb72cd5f0a87ea73c65ef130728f",
".git/objects/77/c7a6e84965a94b1973463283ebfaf9dc277f24": "79fd990489ac0728afc9089d657499ef",
".git/objects/4f/7dc0a211df597c2511c93c90508702386ebec4": "a250dcf70824e7adf8d19b9dced689dc",
".git/objects/71/6352426b8f31d65f2580719f74c077083c8623": "7aacef2ac61636e8d8c9aac48a68586c",
".git/objects/1c/342cb63f2bf060465db66f0b519015a01a062d": "e492f0827829571afa480689761d2b8b",
".git/objects/82/7a61c97b158774a9730c325c7f2dc8f9000a1f": "42c548f225922c2227b3b205352a4ef1",
".git/objects/40/df18c24404119cc3d3f570e166f7019f8b8fba": "7516dcfc9d4bff994bf3a78c4f9b14fc",
".git/objects/25/0f042cb99f787dfa3e960123ff5ad286395410": "70935af209bed948f7d9d09ac700f8a7",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "6492a62c333468a1e6e2491b30a71026",
".git/logs/refs/heads/master": "6492a62c333468a1e6e2491b30a71026",
".git/logs/refs/remotes/origin/master": "4fc8fa17b53fa080c4e716305ac50d64",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "826dab4cfd169bb1a24eca807b9582fa",
".git/refs/remotes/origin/master": "826dab4cfd169bb1a24eca807b9582fa",
".git/index": "fa50cf7e80e3f21d41d4c39902233169",
".git/COMMIT_EDITMSG": "8f8c408df43c36b2fc28f05e032c9678",
".git/FETCH_HEAD": "d3c54fcfbfe1a48cdee357eae5c4ad31",
"assets/AssetManifest.json": "a3e43075db8ccac3595573d23342cf99",
"assets/NOTICES": "cc6ebece94e20d52b55b1ca22a97d084",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/recent_work_bg.png": "531a8461fd1ec42f03f4cfb891790635",
"assets/assets/images/ic_kotlin.svg": "199cbbd80271591e524deb17e671d7bd",
"assets/assets/images/ic_linkedin.svg": "4f2bc978122ea69dc7033f2f60cb0fe5",
"assets/assets/images/ic_handshake.svg": "e72b7b6df4601ea0cf72a79f0d6f2c55",
"assets/assets/images/ic_java.svg": "2655c7987e7102b03ce87eab73642b44",
"assets/assets/images/background.png": "0614a717659df3fd409c60ff04fac983",
"assets/assets/images/work_1.png": "ff8242cdad37e4c83136a90a325810a8",
"assets/assets/images/ic_ios.svg": "32784ac87a19b05cd4bd5c42e28d4134",
"assets/assets/images/ic_flutter.svg": "bd9fec894dfe707631e11a1dfedb25b5",
"assets/assets/images/work_3.png": "035401cff7e0fc62875bb280c53523c5",
"assets/assets/images/work_2.png": "e1d3843d3e6d8752cfe40f655caab6d5",
"assets/assets/images/ic_email.svg": "a49ee5f1c26caf5954c296e873c79774",
"assets/assets/images/work_4.png": "74e5fc2d50c04cdd638cfa878bd2ef66",
"assets/assets/images/hover.png": "f0a2318c40269d84384f56f54d25ad69",
"assets/assets/images/ic_send.svg": "aaba05d53d06cad18de493d7048fd10a",
"assets/assets/images/ic_android.svg": "d46f53f21a42468777d212baa7fb187b",
"assets/assets/images/ic_gmail.svg": "27ab7156ba0d665a6554ace8ef61e995",
"assets/assets/images/ic_github.svg": "ce89173e3842fb91835a9cc8605a5ecc",
".idea/runConfigurations.xml": "722732673ec9e3427d5e068f801cbcce",
".idea/vcs.xml": "166acef3d301bd241d0d6da15bc5ad3c",
".idea/workspace.xml": "30f861f64b431b51d3752a69e7bece10",
".idea/modules.xml": "1eb3b065c55895e347308e50cd717dee",
".idea/web.iml": "52db5efd0fe9f576a1302b8c4b5eac6c",
".idea/misc.xml": "60bceb5690317356c64298ecd86ca10c"
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
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
  for (var resourceKey of Object.keys(RESOURCES)) {
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
