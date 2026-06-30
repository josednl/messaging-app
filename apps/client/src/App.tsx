import React, { useState } from 'react';
import { APP_NAME, formatMessage } from '@messaging-app/shared';

export default function App() {
  const [count, setCount] = useState(0);
  const demoMessage = formatMessage(
    'Client',
    'The monorepo is running correctly.'
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-6 font-sans">
      <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center shadow-xl">
        <h1 className="text-3xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-indigo-400 mb-2">
          {APP_NAME}
        </h1>

        <p className="text-slate-400 text-sm mb-6">
          Frontend Base Template
        </p>

        {/* Demo Box showing shared package resolution */}
        <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 mb-6 text-left font-mono text-xs text-slate-300">
          <p className="text-blue-400 font-semibold mb-1">
            // From @messaging-app/shared:
          </p>
          <p>{demoMessage}</p>
        </div>

        {/* React State Interactive Demo */}
        <div className="space-y-4">
          <p className="text-slate-300 text-sm">
            Interactivity test:{' '}
            <span className="font-semibold text-blue-400">{count}</span>
          </p>

          <button
            onClick={() => setCount((prev) => prev + 1)}
            className="w-full py-3 bg-blue-600 hover:bg-blue-500 active:scale-98 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/20 transition-all cursor-pointer"
          >
            Increment Counter
          </button>
        </div>
      </div>
    </div>
  );
}
