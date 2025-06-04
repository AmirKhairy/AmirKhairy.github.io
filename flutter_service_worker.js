'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "389ef32cbb00f2421a8adca07f2e667d",
".git/config": "ca36ebc86923dfd193a3bd5b94b1e4ea",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "01bb1581fb18a050a9dba41eea6f396f",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "75b8a837ea21b6495461fab84a5798af",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d3e8a1543d1b7461598e75797d3568d6",
".git/logs/refs/heads/main": "fb7a126f6f3e18c06ac18ed75e100b8a",
".git/logs/refs/remotes/origin/main": "656cf203f76180237dea65fb4708163a",
".git/objects/02/b6b0eec3ab33a79a9a7f2ccc81e08205165a27": "1485614b63de5723ce51e09dc387ab72",
".git/objects/05/0d4a2241fa17dedf840696cc01ddf5870ffe9f": "6aa5cc1e9805cd31974bdd03e5ee9986",
".git/objects/05/b927c3afd94029b5226f7d8835e66cafa4bd35": "51e8b732be0429cbde795b52bba96519",
".git/objects/07/5bf1dd7a5ee51db30a29adb68969b7c68b1aff": "8c21c127dcfd05fc5340cc7c51c6f36a",
".git/objects/0a/b36e8b3ab86239c42c1869a06b22f5021637cf": "494b95d13362a0b0ecd93608dae52a87",
".git/objects/0b/468089439bd7f8cc39b364976acd4b2460a9a8": "5a20987f515c54b03ba36dacabebfe71",
".git/objects/11/be0d2463bfbeb8c16c3e88c2c8efe0db393b39": "26d3b458238b5abb1a0f6c3ffc5b02c0",
".git/objects/14/b261f7e54642038191a79f5748cd71466fd5a2": "6202676ec877257b70b2be339b715859",
".git/objects/16/282015cb580c13cf24d02f338ecfbf0ce3176e": "fc4bd5c0f8d23fdfae34633e7cd6f252",
".git/objects/16/4a728d64a7fd9ec140da442c7fc15a14a42826": "f69389e8a5f98e9d4e42f8d268585ed7",
".git/objects/18/b6e867a1f97e0ef63d6e68fc54f68582b4717b": "5988818cd4815a2fadc0f52e2d511d12",
".git/objects/19/238499eb69f8ebf39933d27238b4b4ae3bd0aa": "eb1aab8f71a90b9199c52e05aee92a2f",
".git/objects/19/5e34c2ce568644a086b72dc84823edb9a6efeb": "74b171c6272e40068980ef32548024d1",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/1f/2fa9a76dd2b53c8195343a8be99fb20921677c": "b4e23b668a3881c0187433d52c7d72d5",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/23/6bb811ac53a12907abcc8947b33b43224089c9": "b0f65fd659ade0ac2b4d465f1caa69b1",
".git/objects/26/5012493910efa714c72651b9602d81adbfa099": "fd7d7b2665ab1a4cf6cd9ab9e282af25",
".git/objects/26/ccfe2b27a6a51db36e1fadcfd1f733f4024968": "07f977d68efc8ecb42420454fbf518d5",
".git/objects/28/5a9ad33fc8ff62e64e4db070bb082575ea74b2": "b52792f622358f29881de683efd394bc",
".git/objects/2c/4def4235ded5517e4de8b77b36d97c53a8e62c": "bfa7fba15afcdaa36cafd5849eb9c821",
".git/objects/2d/dc109f9e56dd093cd7c1f3c2eff719c05718a6": "6f95cb4ce9533f7778f9935e6c4eef9d",
".git/objects/2f/acace8f34922c0c5b3a169df1cd8c66ec848fd": "71420400349490eee379d3d0b0566f80",
".git/objects/33/0909d0c2e89e190688ce2b36a7ca83cd32fbfe": "41f186171a338cffb5f160ba5234def4",
".git/objects/34/7a1c0f568b781d62b62a3880f6e1adad3ebc0a": "6bc6485fcd527e0b8fd75c8c95d8eed7",
".git/objects/35/7dbeb2a7784a4913e5a31eb21edbb5e4164387": "2c2dbc33617ae594e32f9978c3e89b60",
".git/objects/36/5d85c7788573d518a1751d1b189ee6445e9411": "a86e05cfc360bd761d9c6bc442ed4cf0",
".git/objects/3a/63c603619e00ac7c2d407a65ef492737ea796b": "c9a0dce16f2b5ded279bf4867ac78660",
".git/objects/3c/0a53da434e43411b0dc57673bef379f3bcfe3e": "48031a881a2d1f7b61d78458ad26999e",
".git/objects/3c/61198d80421d9d65402aa994e12e873fbdb2d6": "c35a805213e0baa6ec6ed9c855679c8c",
".git/objects/3e/d0ddd7136a48520910e7e4bf665362facd60d4": "c8322669a78b5f07c75b1decdc05718d",
".git/objects/3f/ed2846b6c1675f4f6272a805f9eaf8dd792d1e": "000d27e0632305d17afadffc0e057c93",
".git/objects/43/0568ab4b7345723491c0e2923a929a8a4565bb": "22e6719545bdf7f7433bf21cb0c9fee0",
".git/objects/45/c44bfaacc2c6a4fba04bd8518a4c55ce7d530b": "c5fd33abe8b72c27819e48a199d8ab44",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/4c/ef843e21b15d34e846734093a643148d3888af": "0ef9a8ad2613f6b366ca6c84d8510edd",
".git/objects/4e/7048653c384f9205a5ab27a52d0e9e49625da2": "15cbdb5f3556880253dc3091a1d363d7",
".git/objects/51/ccbc65f0d3df264c04697704e289a58f4f84ec": "27fb6e09b2f09a3ef1c0f9abb404d61a",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/53/6dfb349cf46035ce6d520d0f18da0983b96c21": "6b355716dd66762fcff359a39342d238",
".git/objects/54/c0a52fa282bdbcd55436474dfbc47352dde319": "40cc4ed452d3bd6aac2a741e50ddf266",
".git/objects/5b/641782bcd48bd2e538bae4f1fa6adf8ebb9519": "1ff66bf4b84419d82ee21c98c280f226",
".git/objects/5f/29dd53e21bf4b0e226fd7283ae131d4c9a8ea6": "c141121cec74421526d12a5daf60ebef",
".git/objects/64/e93687b511ab691dbc48b8aa7510d252a8c7b0": "2e63e1064543e7bf7fc7c18e45fd75b5",
".git/objects/66/0ed8d85b98b4845a9cbde3c35cfb16cab91179": "4932c719998d47916d477c454e69dcaa",
".git/objects/6a/42755a3974a865c6185e6ae07170466f4ffc26": "9f26ba5069d9f0d7f1b00964d3d99154",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6d/e7a4c1b686e2f790a53365736f0ae6b739b03b": "84ecad5d74e11555eb01ec7622e8888a",
".git/objects/6e/39e0619cdb0287728b7592e67ae94b9587aa2f": "63e6e663f7a9cb1a708d7d4efd2ed402",
".git/objects/6e/78f242890ef748b30148140d411fe4e90518a8": "5dd7070fed91bbb8cae43a8882acf793",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/76/b8427f3095863b1b51a9e52585defbfb438528": "334f6a061fb2ba539c6d360e1d8e689a",
".git/objects/7b/7663f73abd969a6d409107a4ceb9ff558b07a1": "2f7e0b091272c5ad603855f601c16e49",
".git/objects/7d/6a0481e774d55da185d66d951a7d290ccd78dc": "ac75d053a0066edb78a12cb79ed281f0",
".git/objects/7d/c1d257faaed23da390845f38ebe656f0f07c51": "4c2e08dcfad502096d102952420d1c3f",
".git/objects/7f/e32f69210daee04b818f91caecbb07cfb2cf4e": "a3ff96450eb3ccbb7a22a8e3690b77eb",
".git/objects/80/dffd48c9d0973ad59f30c149e841a8661a8b96": "100b2a02907ad52e28018553505270de",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8d/0d1634a2d02ef9fd42706ff53fa3da2186d75c": "8aeb4bac58d6f7695e6dc8711e15f6f3",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/8f/141f4158edb90c435e8ac76105518750c7812c": "4b2503c1d974b43a83c9e2e2c6245b30",
".git/objects/90/e1bf336fb1d957098aecfae543cbe0641ac767": "25e9d13015cb166b64963548b0208225",
".git/objects/95/caf00329daa22c38d5991858f115f0f09fbac7": "75a1aac05fafadd8d6675014703ce215",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9c/73031a3eae5315ce4d35c33e49244babf5fda5": "09ea0ac197b3f001f73dd99715aa9cc3",
".git/objects/9d/a4944b988470ff74ff32dae8a2a1f1ec0f4f09": "2a9a4b7219c926e2702f022150ce882a",
".git/objects/9d/cf074b7fa2aed871c98e530ede01191ec97355": "80805e16580384c083a170cef0717ffd",
".git/objects/a4/c5117eb479c8afa9717622aa88d76258574610": "1a8493560c3b70cf796b4c53758f5b7c",
".git/objects/a5/8716282d7b0847b7c5f26a6329897dc7ce20dc": "df6763f4567db756f5ccbd5ce6a6c7db",
".git/objects/a9/90b6ee110f48731d9bb1ffdacce9abb2828f4c": "9a4941d794c1538594fa52a0ed0e6c23",
".git/objects/ac/7dbdda8b9e7283e2883223de1482fc41d9808f": "0d8828cf5e50cb85572d86f2696b45b0",
".git/objects/b4/85dc5339e0113a8e03434159e4201649602ca2": "4b63c6c08f0bf3884279fdafc8c971d6",
".git/objects/b6/98bfaba196eb7658d3dbeb66ec77b9b885373e": "0b6098d8e948f7f5105fddfcf396d7b7",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/d5d7c7232b1abf1593acec693aaf52e069603d": "42893625de7be1730a352ac902a56dea",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/bf/fa9def5049acbe3cae868541826fae67e0e677": "3d1addad22abdbdc2d0bef7ad7573a28",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/cb/3c8f142f5e9b37c1df6a1364b92a5113243fa9": "fe5c9c998650f7e69e1d0f6f92859716",
".git/objects/cb/6b7a6137f8e01d986294349a6bc2fadc6d1849": "9df7d09456db8013ef6b3c4b23309f7a",
".git/objects/d3/ae50313fa197445702f2a267585b7de987fbf6": "fb7d6b0502c7dc51a0f51b5112e41da8",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/847531ecce12b5993e70df5bc2b83603b91057": "d610f681dd758bc6b48e2172575ae5a2",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/edb795e4df425e4218db3eca2edd764b02d41f": "ef17235fccc481d330b824ee8fd683a1",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/df/e9ffdb60a3a2ecbbaf665b345177dd12cf3eb2": "0684e97c8bf8b66e0418ea0444bf1c37",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e1/a679574d3bc4e1aad64614ed50cf0a3e83241f": "42998e721620e12afa7ba052a86df408",
".git/objects/e4/ed1e9da1b778eb2938fe549445ce0df066ea02": "15667eba0547439c4a80814be3eec941",
".git/objects/e5/50dc163a85aa696fdf423da3256d8962d12b83": "e1f3d8ca2275304ef8b404b6177d0a03",
".git/objects/e6/d033fee2ca6f54d01a8bd4ded9a02e45c80c07": "4ec142cfcce2c5c41e40fa5323aa7f1b",
".git/objects/e7/f203b1506a30180d967e994faf0a07a715e521": "607e53d45e61e8355b3afeb6ab5c373d",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/6989f4d24452a1593f0d7ba5f4247e2abafdc0": "eb69c1c29e179c5d0801fd766a999844",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/3ff9a060463d96293b750467d329f6e96662f0": "2e48cda4c54179658338fdac690979c4",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/0abc7b3de851d6761063f0f18f5007037ce6a8": "3a7d04f910d6d76482bcc82387b16621",
".git/objects/f3/3fd71511e023a582ff10d1f4bafddd853a069e": "c026a427d83f52578ce76779bf59fdd1",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/fa/7268fcd69071031dce54c5801335785a59304a": "953cd3f5c2728c6f62defdd26e4f462f",
".git/objects/fa/75c89f3a5fdfdb3372c7c977275d56e6753ea4": "03ad56d20f460ec5fe4bb2c442e642c0",
".git/objects/fc/a819cfe9c2668e218f4afb06a897f6052e820f": "3408b3b4c2edaa103303d237689cb8fb",
".git/ORIG_HEAD": "7c15a0405221ef0e7723e3cb5940f6b5",
".git/refs/heads/main": "8d6b77c71b7ab575a840b7c8b46c9a47",
".git/refs/remotes/origin/main": "8d6b77c71b7ab575a840b7c8b46c9a47",
"assets/AssetManifest.bin": "5d9dd9b6074971a0163617e41136054c",
"assets/AssetManifest.bin.json": "195a9a0eb4d30389e768bad398d225c8",
"assets/AssetManifest.json": "dce8b630f9afee034dc886ee7cd6e4f6",
"assets/assets/images/attend_ease.png": "fc451e4aa96f097fb3a78b5e70c6bc52",
"assets/assets/images/chat.png": "bfadca00e808753606864513b1ed487a",
"assets/assets/images/e_commerce.png": "e196fe1ef0342b7fde63535279060f5b",
"assets/assets/images/home_image.png": "4c293e30d2d2414275b24bc768b2e49d",
"assets/assets/images/news.png": "e9eecae81ec6baf1ffdd4a95698e5d72",
"assets/assets/images/smart_label.png": "266a76825321c8bebc4822fed3771633",
"assets/assets/images/todo.png": "98dc33542952607d6bccf61864f40c80",
"assets/assets/images/weather.png": "18c9e9fa5291d0f60ed7bb7c8156a8db",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/NOTICES": "6b51e704222b4f990ca1d9ab1821ef00",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b008622e099672b40495463334ea5aa7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "9d8e134a903af81179524df72dd1b752",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "e92266f3088f3a746e357a28ff96d478",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "19cdb24207c02910fdb93bff26455edb",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "18adba2863da3bf61ce6da6f49a765f5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9ff18570d06d272b4cccda66bc084ecd",
"/": "9ff18570d06d272b4cccda66bc084ecd",
"main.dart.js": "85873ef50b76a3d1481bfa3d1d951288",
"manifest.json": "7dad58d599be6607f182317a53245ad2",
"version.json": "a1b59c01295e24e0eb1deaaddf41c2ac"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
