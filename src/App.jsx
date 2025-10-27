import React, { useMemo, useState } from 'react';
import Hero3D from './components/Hero3D.jsx';
import ToneSelector from './components/ToneSelector.jsx';
import ChatWindow from './components/ChatWindow.jsx';
import MessageInput from './components/MessageInput.jsx';

function App() {
  const [tone, setTone] = useState('neutral');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const backendBase = useMemo(() => {
    const env = import.meta.env.VITE_BACKEND_URL;
    if (env) return env.replace(/\/$/, '');
    // Fallback to same host on port 8000 if running locally
    try {
      const u = new URL(window.location.href);
      return `${u.protocol}//${u.hostname}:8000`;
    } catch {
      return 'http://localhost:8000';
    }
  }, []);

  const sendMessage = async (userText) {
    const userMsg = { role: 'user', content: userText };
    setMessages((prev) => [...prev, userMsg]);
    setLoading(true);
    try {
      const res = await fetch(`${backendBase}/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: userText, tone }),
      });
      if (!res.ok) throw new Error('Request failed');
      const data = await res.json();
      const assistantMsg = { role: 'assistant', content: data.reply };
      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'Sorry, I could not reach the Oracle. Please try again.' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-neutral-950 text-white">
      <Hero3D />

      <main className="mx-auto -mt-12 flex w-full max-w-4xl flex-col gap-4 px-4 pb-20">
        <ToneSelector tone={tone} onChange={setTone} />

        <ChatWindow messages={messages} isThinking={loading} />

        <MessageInput onSend={sendMessage} disabled={loading} />

        <p className="mx-auto mt-2 text-center text-xs text-white/50">
          Tip: Press Ctrl/⌘ + Enter to send
        </p>
      </main>
    </div>
  );
}

export default App;
