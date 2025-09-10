'use client';
import { useEffect, useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';

declare global {
  interface Window {
    magicEden?: { solana?: any };
  }
}

export default function MagicEdenConnectButton() {
  const { connected, publicKey } = useWallet();
  const [meProvider, setMeProvider] = useState<any>(null);
  const [status, setStatus] = useState<string>('');

  useEffect(() => {
    const p = typeof window !== 'undefined' ? window.magicEden?.solana : null;
    setMeProvider(p || null);
  }, []);

  const connectME = async () => {
    try {
      if (!meProvider) {
        setStatus('Magic Eden Wallet not detected. Check extension settings.');
        return;
      }
      setStatus('Connecting…');
      await meProvider.connect();
      setStatus(`Connected: ${meProvider.publicKey?.toBase58?.() || ''}`);
    } catch (e: any) {
      setStatus(e?.message || 'Failed to connect');
    }
  };

  return (
    <div className="space-y-2">
      <button
        onClick={connectME}
        className="h-11 w-full rounded-xl border border-white/15 bg-black/40 px-4 text-sm font-semibold text-white hover:bg-white/5"
      >
        Connect with Magic Eden (fallback)
      </button>
      {connected && publicKey && (
        <div className="text-xs text-emerald-300">
          Wallet Adapter connected: {publicKey.toBase58()}
        </div>
      )}
      {status && <div className="text-xs text-white/60">{status}</div>}
      {!meProvider && (
        <div className="text-xs text-white/50">
          Tip: Enable the Magic Eden extension, allow it on all sites, then refresh.
        </div>
      )}
    </div>
  );
}
