/*
 * @Author: your name
 * @Date: 2021-09-22 16:21:46
 * @LastEditTime: 2021-09-27 15:41:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /qiankun-micro-vue/src/public-path.js
 */

// webpack 默认的 publicPath 为 "" 空字符串，会基于当前路径来加载资源。
// 我们在主应用中加载微应用时需要重新设置 publicPath，这样才能正确加载微应用的相关资源。
if (window.__POWERED_BY_QIANKUN__) {
    // 动态设置 webpack publicPath，防止资源加载出错
    // eslint-disable-next-line no-undef
    __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
    console.log('window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__', window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__);
}