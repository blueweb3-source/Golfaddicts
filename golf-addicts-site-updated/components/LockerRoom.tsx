'use client';
import { useState } from 'react';
import ConnectWalletButton from '@/components/ConnectWalletButton';
import LockerGateButton from '@/components/LockerGateButton';
import MagicEdenConnectButton from '@/components/MagicEdenConnectButton';

export default function LockerRoom() {
  const [granted, setGranted] = useState(false);

  return (
    <section id="locker-room" className="relative mx-auto w-full max-w-6xl px-4 py-16 sm:py-20">
      <div className="mb-8 text-center">
        <span className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs tracking-wide uppercase backdrop-blur">
          Token‑gated members area
        </span>
        <h2 className="mt-3 text-2xl font-bold sm:text-3xl md:text-4xl tracking-tight">Locker Room</h2>
      </div>

      {!granted ? (
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-bold">Members‑only perks</h3>
            <ul className="mt-3 list-disc pl-6 text-sm text-white/80">
              <li>Early access to tournaments & tee times</li>
              <li>Exclusive merch drops and discount codes</li>
              <li>Raffles, giveaways, and sponsor perks</li>
              <li>Strategy chat & course notes</li>
            </ul>
            <p className="mt-4 text-xs text-white/60">
              Access requires holding a Golf Addicts NFT. Connect your wallet and check access.
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-400/20 bg-black/30 p-6">
            <h4 className="text-lg font-semibold mb-3">Enter the Locker Room</h4>
            <div className="mb-3"><ConnectWalletButton /></div>
            <div className="mb-3"><MagicEdenConnectButton /></div>
            <p className="text-xs text-white/60">If your wallet isn’t listed, use the Magic Eden fallback above or enable site access in your extension settings.</p>
            <div className="mt-4"><LockerGateButton onGranted={() => setGranted(true)} /></div>
            <div className="text-xs text-white/50 mt-2">
              Don’t have one yet? <a className="underline" href="https://magiceden.us/marketplace/golf_addicts" target="_blank">Grab a Golf Addicts NFT on Magic Eden</a>.
            </div>
          </div>
        </div>
      ) : (
        <div className="mx-auto max-w-5xl grid grid-cols-1 gap-3 text-sm">
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="font-semibold">This week’s codes</div>
            <ul className="mt-2 list-disc pl-5 text-white/80">
              <li>10% off at Pro Shop: <span className="font-mono">GA-PRO10</span></li>
              <li>Range bucket BOGO at partner course</li>
            </ul>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="font-semibold">Downloads</div>
            <ul className="mt-2 list-disc pl-5 text-white/80">
              <li>Tournament pack (PDF)</li>
              <li>Brand kit (PNG/SVG)</li>
            </ul>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="font-semibold">Members chat</div>
            <p className="mt-1 text-white/80">Private link will appear here after full wallet integration.</p>
          </div>
        </div>
      )}
    </section>
  );
}
