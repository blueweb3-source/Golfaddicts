'use client';
import { useWallet } from '@solana/wallet-adapter-react';
import { useState } from 'react';

export default function LockerGateButton({ onGranted }:{ onGranted: ()=>void }) {
  const { publicKey } = useWallet();
  const [checking, setChecking] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const checkAccess = async () => {
    setError(null);
    if (!publicKey) { setError('Connect wallet first'); return; }
    setChecking(true);
    try {
      const r = await fetch('/api/gate', {
        method: 'POST',
        headers: {'content-type':'application/json'},
        body: JSON.stringify({ address: publicKey.toBase58() })
      });
      const { ok } = await r.json();
      if (ok) onGranted();
      else setError('No Golf Addicts NFT found in this wallet');
    } catch (e:any) {
      setError('Could not verify');
    } finally {
      setChecking(false);
    }
  };

  return (
    <div className="space-y-2">
      <button onClick={checkAccess} disabled={checking}
        className="h-11 rounded-xl bg-white px-4 text-sm font-extrabold text-black shadow hover:translate-y-[-1px]">
        {checking ? 'Checking…' : 'Enter Locker Room'}
      </button>
      {error && <div className="text-xs text-red-300">{error}</div>}
    </div>
  );
}
