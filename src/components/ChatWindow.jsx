import React, { useEffect, useRef } from 'react';
import { Bot, User } from 'lucide-react';

export default function ChatWindow({ messages, isThinking }) {
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isThinking]);

  return (
    <div className="relative w-full overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03]">
      <div className="h-[42vh] md:h-[48vh] w-full overflow-y-auto p-4 space-y-3">
        {messages.length === 0 && (
          <div className="flex h-full items-center justify-center text-center text-white/60">
            Ask anything. The Oracle replies in the tone you choose.
          </div>
        )}
        {messages.map((m, i) => (
          <div key={i} className={`flex items-start gap-3 ${m.role === 'assistant' ? 'flex-row' : 'flex-row-reverse'}`}>
            <div className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${m.role === 'assistant' ? 'bg-indigo-600/80' : 'bg-white/90'}`}>
              {m.role === 'assistant' ? <Bot className="h-4 w-4 text-white" /> : <User className="h-4 w-4 text-black" />}
            </div>
            <div className={`max-w-[80%] rounded-2xl border px-4 py-2 text-sm leading-relaxed shadow-sm ${
              m.role === 'assistant'
                ? 'bg-white/5 border-white/10 text-white/90'
                : 'bg-white text-black border-black/10'
            }`}>
              {m.content.split('\n').map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
            </div>
          </div>
        ))}
        {isThinking && (
          <div className="flex items-center gap-2 text-white/70">
            <div className="h-2 w-2 animate-bounce rounded-full bg-white/70 [animation-delay:-0.2s]" />
            <div className="h-2 w-2 animate-bounce rounded-full bg-white/70" />
            <div className="h-2 w-2 animate-bounce rounded-full bg-white/70 [animation-delay:0.2s]" />
            <span className="ml-2 text-xs">Thinking…</span>
          </div>
        )}
        <div ref={endRef} />
      </div>
    </div>
  );
}
