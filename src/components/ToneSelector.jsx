import React from 'react';
import { Settings } from 'lucide-react';

export default function ToneSelector({ tone, onChange }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-2 backdrop-blur">
      <div className="flex items-center gap-2 text-white/80 text-sm">
        <Settings className="h-4 w-4" />
        Tone
      </div>
      <div className="ml-auto" />
      <div className="grid grid-cols-4 gap-1">
        {[
          { key: 'neutral', label: 'Neutral' },
          { key: 'poetic', label: 'Poetic' },
          { key: 'scientific', label: 'Scientific' },
          { key: 'traditional', label: 'Traditional' },
        ].map((opt) => (
          <button
            key={opt.key}
            onClick={() => onChange(opt.key)}
            className={`px-3 py-1.5 text-xs rounded-lg transition-colors border ${
              tone === opt.key
                ? 'bg-white text-black border-white'
                : 'bg-transparent text-white/80 border-white/10 hover:bg-white/10'
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}
