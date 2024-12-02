import React from 'react';
import { UnityLoader } from './components/UnityLoader';
import { Gamepad2 } from 'lucide-react';
import { UnityProvider } from './contexts/UnityContext';

function App() {
  return (
    <UnityProvider>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-2">
              <Gamepad2 className="w-6 h-6 text-blue-500" />
              <h1 className="text-xl font-bold text-gray-900">Unity WebGL Demo</h1>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Unity Game Window</h2>
            <UnityLoader />
            <div className="mt-4 text-sm text-gray-600">
              <p>Instructions:</p>
              <ul className="list-disc list-inside">
                <li>Place your Unity WebGL build files in the public/Build directory</li>
                <li>Update the build URLs in UnityContext.tsx</li>
                <li>The game will automatically load when ready</li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </UnityProvider>
  );
}

export default App;