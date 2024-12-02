import { UnityConfig } from '../types/unity';

// Unity build configuration
export const UNITY_CONFIG: UnityConfig = {
  loaderUrl: '/Build/WB2.loader.js',//WB2.loader //Build/webgl.loader.js
  dataUrl: '/Build/webgl.data',//Build/webgl.data //
  frameworkUrl: '/Build/build.framework.js',//build.framework.js ///Build/webgl.framework.js
  codeUrl: 'https://anilproject12001.web.app/build.wasm',//build.wasm //webgl.wasm //https://anilproject12001.web.app/build.wasm
};
