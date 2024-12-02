import { UnityConfig } from '../types/unity';

// Unity build configuration
export const UNITY_CONFIG: UnityConfig = {
  loaderUrl: '/Build/webgl.loader.js',
  dataUrl: '/Build/webgl.data',
  frameworkUrl: '/Build/webgl.framework.js',
  codeUrl: '/Build/webgl.wasm',
};