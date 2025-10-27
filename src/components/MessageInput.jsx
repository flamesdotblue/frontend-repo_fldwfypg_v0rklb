import React, { useState } from 'react';
import { Send } from 'lucide-react';

export default function MessageInput({ onSend, disabled }) {
  const [value, setValue] = useState('');

  const submit = () => {
    const v = value.trim();
    if (!v) return;
    onSend(v);
    setValue('');
  };

  const onKeyDown = (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
      e.preventDefault();
      submit();
    }
  };

  return (
    <div className="flex items-end gap-2">
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={onKeyDown}
        placeholder="Ask the Oracle anything…"
        className="min-h-[56px] max-h-40 w-full flex-1 resize-y rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-white placeholder-white/50 shadow-inner outline-none focus:ring-2 focus:ring-indigo-400/50"
        disabled={disabled}
      />
      <button
        onClick={submit}
        disabled={disabled}
        className="inline-flex h-[44px] items-center gap-2 rounded-xl bg-indigo-500 px-4 text-sm font-medium text-white shadow-lg shadow-indigo-500/20 transition hover:bg-indigo-400 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <Send className="h-4 w-4" />
        Send
      </button>
    </div>
  );
}
