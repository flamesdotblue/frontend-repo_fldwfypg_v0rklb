import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero3D() {
  return (
    <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden rounded-b-2xl bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80" />

      <div className="relative z-10 flex h-full w-full items-center justify-center px-6 text-center">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs text-white/80 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Live • Legacy Meets Logic
          </div>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white md:text-6xl">
            Ask what Krishna would say — tradition guided by AI
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-white/80 md:text-base">
            A spiritual and educational Oracle that recalls verses from the Gita, the Buddha’s Dhammapada, and Jain sutras — in the tone you choose.
          </p>
        </div>
      </div>
    </section>
  );
}
