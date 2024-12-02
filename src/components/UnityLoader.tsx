import React from 'react';
import { Unity } from 'react-unity-webgl';
import { useUnity } from '../contexts/UnityContext';
import { LoadingIndicator } from './unity/LoadingIndicator';
import { ErrorDisplay } from './unity/ErrorDisplay';

export function UnityLoader() {
  const { unityProvider, isLoaded, loadingProgression, isError, errorMessage } =
    useUnity();

  return (
    <div className="relative w-full h-[600px] bg-gray-900 rounded-lg overflow-hidden">
      {isError && errorMessage && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
          <ErrorDisplay message={errorMessage} />
        </div>
      )}

      {!isLoaded && !isError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
          <LoadingIndicator progress={loadingProgression} />
        </div>
      )}

      <Unity
        unityProvider={unityProvider}
        className="w-full h-full"
        style={{ visibility: isLoaded && !isError ? 'visible' : 'hidden' }}
      />
    </div>
  );
}
