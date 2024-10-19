/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/05/13/HaoUI1/index.html","be40e0d2e5fa394787a140a366b543e1"],["/2022/05/13/HaoUI2/index.html","a3c8e613da9200451c69d4bcd43134a2"],["/2022/05/13/Node1/index.html","5c82ad765bef5b1c74fc2e0541e692c5"],["/2022/05/14/Face/index.html","4c83870809d3ee686811524e1cf74e07"],["/2022/05/14/algorithm1/index.html","67cf336390194254a54045a3e864621f"],["/2022/05/15/Node2/index.html","8601d4d94e3c2b94e591589df04480bf"],["/2022/05/18/Component1/index.html","1c3a947f3c08daeb6f715a83322822a9"],["/2022/05/18/tips1/index.html","4f323fac8a396ab55174a774a376f39a"],["/2022/05/23/Node3/index.html","54b161327ec337f6a7e4c61dec344f8b"],["/2022/05/28/Node4/index.html","14cf801fac96a09542464b5bcd08b632"],["/2022/05/28/webpack1/index.html","08bedebe8783c75ca1e4e91ded6d91b3"],["/2022/05/30/Node5/index.html","ec289650e48964893e1d8f8867a4cd00"],["/2022/06/04/Node6/index.html","484d30a1401858047353b1c3aaa5dae9"],["/2022/06/12/mysql1/index.html","4f56a025359c23baceade8b5d9f4fdc0"],["/2022/06/12/websocket1/index.html","be2c8099c89252f87d2e22dfbd92c42d"],["/2022/06/26/Face2/index.html","bc75b729fb688ef8afa1da1ca8b61e85"],["/2022/07/02/vue2code1/index.html","8eb18abe2369d595aa70829bfcfbef39"],["/2022/07/10/tsstudy1/index.html","6f28818231321b47b6e989234842495b"],["/2022/08/24/vite1/index.html","f63b6d01c8300f0987e14646462c56cc"],["/2022/08/25/vue31/index.html","c1e5eb3c4e2724d980af35372890d40c"],["/2022/08/25/webgl1/index.html","21391178f7cafce18d21a36f5af3fee9"],["/2022/08/31/react18/index.html","b201ad78f463155f4a13abfda4164846"],["/2022/09/01/algorithm2/index.html","e6b0356cbc2dbb40196661d168fb8927"],["/2022/09/06/promise1/index.html","238171f33c9f78b1cb6ee3f7fa0fc996"],["/2022/09/06/vuerouterandvuex/index.html","f4314af5dda11737082c32e03eebc733"],["/2022/09/14/miniweixin/index.html","cdfffd3986a33f179449b939fa8a2259"],["/2022/09/23/webgis1/index.html","ecab2d56a25c4fa3b30c6af03f256d53"],["/2022/09/24/vue32/index.html","d20072f8db3c0efc070a729603532c16"],["/2022/09/27/go1/index.html","9dd7171e0f19be8305c62a6eced07dd1"],["/2022/10/07/canvas1/index.html","ff5624dd353949133c6ba178746676d9"],["/2022/10/09/mobile1/index.html","7ce454cc98201d15ae192132433c0ab5"],["/2022/10/17/work1/index.html","45050f39ff1f9f6b9497b407980d79b8"],["/2022/10/19/rn1/index.html","6994175db591e2f011dbe679b49b8ff7"],["/2022/12/01/reactnative/index.html","00f219940f96a27617d2a36b59ba8744"],["/2022/12/07/realizationvue/index.html","5bdda9236be1f5c006ba4ea7f98e82a2"],["/2022/12/11/mongostudy/index.html","a9bf74e5b7c4b399c9752b65ce780216"],["/about/index.html","0f4a430a9a47493aac323979505a2b71"],["/archives/2022/05/index.html","8e1455799c7c5dd3ef1c6d2ee58fdf23"],["/archives/2022/05/page/2/index.html","b0d3da1b8c6f7ba3cf6289b55708a4c6"],["/archives/2022/06/index.html","82a613ad64073869097175b4ccee5b4c"],["/archives/2022/07/index.html","4ca1fcefa2410330ea072e7769d231ab"],["/archives/2022/08/index.html","649594190ed5fb2e7b664f1e45c39f2a"],["/archives/2022/09/index.html","4ccb3e69388def257763e88cccb307c0"],["/archives/2022/10/index.html","1556cfbefe36a2299fdfbfdfc66837b4"],["/archives/2022/12/index.html","9e322fd64bdddd9a2785de388eff37d2"],["/archives/2022/index.html","d69d44b1be129dd85122374658fca43e"],["/archives/2022/page/2/index.html","da582ac79209b056f2cd69eb16ec5614"],["/archives/2022/page/3/index.html","6bcb44d090fced3891071a79ee5638e6"],["/archives/2022/page/4/index.html","7d1d9e441cf5dc6f5740c9c57bf0112a"],["/archives/index.html","15ca90df28f1ec3695eb24b67077496b"],["/archives/page/2/index.html","c557c0c28bf0ddbebdabf683c44c0c08"],["/archives/page/3/index.html","7a98d313d2fac44cee0f2f99e557a25b"],["/archives/page/4/index.html","c9ba5ff6551f27adc7a507ce0694fdf4"],["/books/index.html","b81cc35b6b37921de79753bf0debe0d9"],["/categories/Go/index.html","d31f7dc0c80566d942319c056c5ac6e9"],["/categories/HaoUI/index.html","e3e82b149ca03c0458c4d93a16f31885"],["/categories/Node/index.html","67c2bb2ed29a0ae774065b74b0a69bdc"],["/categories/React/index.html","eb2dc082b94ae26bf450c50270f3bf80"],["/categories/WebGIS/index.html","d0a95f1a085ec1d049a6bbca240a21ca"],["/categories/Webpack/index.html","0fc655980ff542bcfd9a5190c9fe3d1a"],["/categories/canvas/index.html","a370f19ef79086c744d68848ac35bd17"],["/categories/index.html","45495d0fc173f3c28069d817cc175af6"],["/categories/mongo/index.html","d27e88a6c93d2b41cbc3abe95901039f"],["/categories/promise/index.html","6d9b8261359d505f6b7e3312c7eb49f8"],["/categories/react-native/index.html","1fff4ad14b82c3f0c2a4f2ab84e9944d"],["/categories/typescript/index.html","28a03212604d9e41c0c82ff222e08aa9"],["/categories/utils/index.html","3b8ed1188be25027c961257ffe1237d6"],["/categories/vite/index.html","180d238e3d6d5382cf34ab0be08ed792"],["/categories/vue/index.html","e7c915f82ba624b7aa94e4ee67823c2e"],["/categories/vue3/index.html","6c06bd028bd570a81642f3911109d67b"],["/categories/vue实现/index.html","a1dd1fc1e0fa8c2e9fd4482aa6177716"],["/categories/vue框架源码/index.html","8b12972fc79099b2724863ac18b850ac"],["/categories/webGL/index.html","ab6583416960528135752cba543e14e0"],["/categories/websocket/index.html","e0f32807d9d009a27c24f936fa54ce82"],["/categories/工作日志/index.html","105b94003c653fb46d89f39d17fb1a0e"],["/categories/微信小程序/index.html","2b36c48c9cd37b22c68fba1acef142a9"],["/categories/数据库mysql的学习/index.html","309a2741b0159b95b8604ba9721852f3"],["/categories/数据结构与算法/index.html","dc22e18a0902b5b7e6a46307c9c486e0"],["/categories/移动端适配/index.html","b2a1f182e19dc55b7299b1781b91853f"],["/categories/组件封装/index.html","00a63867ad4e2fe2a91976f739aadeec"],["/categories/面试/index.html","a757fcd88e32b893b9d12b6d2963bb7f"],["/css/style.css","84821df7f34e65b3154f614e687c98dc"],["/css/style.min.css","ec5624f76a35dbfa2072a0a7ad522c03"],["/favicon.png","e4ca51badab650e6fdae4ae8a36d508c"],["/fonts/README.html","714885f1fa300e03e1a5945cffef4275"],["/fonts/iconfont.eot","73ac48b57104a152b569c36254719b71"],["/fonts/iconfont.svg","a39735886b5ae4eb6c3fd913c8b2653d"],["/fonts/iconfont.ttf","b3a5564f04505aad8f620bfacaa533e5"],["/fonts/iconfont.woff","b10b7a09b88a62e2ae7dc9cabf8b75cf"],["/images/avatar.jpg","18bcb56226516fa7bc48394f45d3216e"],["/images/donate/alipayimg.png","6303cf9b670b057232f3b6938507e1b7"],["/images/donate/wechatpayimg.png","a8f47ee961b9cb935ea58ec5e920329f"],["/images/favatar/SzsFox-logo.png","9c70d6ee6ba84f07af43c608063224dd"],["/images/favatar/chuangzaoshi-logo.png","a82f7a820a55f821ecfef55775607d0b"],["/images/favatar/idesign-logo.png","f74ad2be89a8489a185f3f3caa96a78e"],["/images/thumb-default.png","0d3d38c94b750b66de049f80a7772ea7"],["/images/xingqiu-qrcode.jpg","5fde18844c32fc28c2476834acff709d"],["/index.html","2b5aee758d22160ae8704ccfe714b6d7"],["/js/application.js","6feea8a726eeaae266d40dd329db817c"],["/js/application.min.js","8022278009e71c5ddc6977664e2a8b26"],["/js/insight.js","60b8b430c44904f7504a36ffe92f4b71"],["/js/jquery.min.js","4f252523d4af0b478c810c2547a63e19"],["/js/plugin.js","c6a9617091206b55abf042f558d3ea61"],["/js/plugin.min.js","e94bb79e935335e69ecae1d41ac6b5bb"],["/links/index.html","ba17161161478e03be1849e881f45430"],["/page/2/index.html","75cb979f8bb860018150d6a5333aa247"],["/page/3/index.html","923718770ab31e07f5afcebe3bc13803"],["/repository/index.html","9645893a5e45189edab6ab3e0c2860c6"],["/sw-register.js","eac7ef95c1b4935e223aabe30a22ec8b"],["/tags/Go/index.html","6e67ef909ec3d0a9cd1a961fef550364"],["/tags/JS方法技巧/index.html","14e315da5eca63d9ecfbc6b57407dc79"],["/tags/Node学习/index.html","adebfb45986ae008596263faca6d02f5"],["/tags/React/index.html","f73e4092739bbeed43770135aa322115"],["/tags/Vue2源码/index.html","e344ed625589709f58e7c845c4ed0fc9"],["/tags/WebGIS/index.html","7f4f0f7379ec21558a157f3efdadcb7a"],["/tags/Webpack学习/index.html","e3172da25f94b5ac2dab1ddfd5f0682e"],["/tags/canvas/index.html","e4310f9a32b7e6b11217ff40e93601aa"],["/tags/index.html","c7ad64510888f2fbab9fdda7e022b859"],["/tags/mongo/index.html","a9b3d6e026dd322165a6ba0276ca1e42"],["/tags/mysql/index.html","0e769c0be490abe2c4d16aee43922e0c"],["/tags/promise/index.html","934683e23a351f5ac360ab85e477d83f"],["/tags/react-native/index.html","580f539bdfd718bd52b5e112e8747351"],["/tags/ts/index.html","da10aeb41bdab86d773f53ad73555d94"],["/tags/vite/index.html","1352897d0faa466f81128143d1f866ef"],["/tags/vue/index.html","14618d21e622ada1f044f0bafe154dc8"],["/tags/vue3/index.html","8861ad11c0629c79114cb5afc5794398"],["/tags/vue实现/index.html","17be9e3582c3fc8ac83bf5dd9e04f307"],["/tags/webGL/index.html","62ea0512db686ebddd433d255f9e9402"],["/tags/websocket/index.html","49c2a2b6ffa28a1c1eb67eacbb6f95ad"],["/tags/个人组件库/index.html","77024f2cb5ae7d3736c07ae6d2fc99b6"],["/tags/工作日志/index.html","ad26dfbea13ec6f9154ca97f046e18e1"],["/tags/微信小程序/index.html","6996cad5bb17f0dea1e4c05b0289810f"],["/tags/数据结构与算法/index.html","0d27545624c4dc6233557cdd3550fef4"],["/tags/数据结构与算法1/index.html","b2fcbfa1db14166f9bc535c3e4879172"],["/tags/移动端适配/index.html","16f9a9ed7d0c73b03012b973eb36c21e"],["/tags/组件封装/index.html","df5ab2ea98d87d87779c7f51c81d8980"],["/tags/面试题/index.html","0cd6a040cc6ef25983aed210da1a0ca4"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
