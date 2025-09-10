import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { address } = await req.json();
  if (!address) return NextResponse.json({ ok: false, error: 'No address' }, { status: 400 });

  const apiKey = process.env.HELIUS_API_KEY;
  const collectionGroupValue = process.env.COLLECTION_GROUP_VALUE; // verified collection address
  if (!apiKey || !collectionGroupValue) {
    return NextResponse.json({ ok: false, error: 'Server not configured' }, { status: 500 });
  }

  const url = `https://mainnet.helius-rpc.com/?api-key=${apiKey}`;
  const body = {
    jsonrpc: '2.0',
    id: 'golf-addicts',
    method: 'getAssetsByOwner',
    params: {
      ownerAddress: address,
      page: 1,
      limit: 1000,
      options: { showUnverifiedCollections: true }
    }
  };

  try {
    const resp = await fetch(url, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(body)
    });
    if (!resp.ok) return NextResponse.json({ ok: false, error: 'RPC error' }, { status: 502 });
    const data = await resp.json();
    const items = data?.result?.items || [];
    const ok = items.some((it: any) =>
      Array.isArray(it.grouping) &&
      it.grouping.some((g: any) => g.group_key === 'collection' && g.group_value === collectionGroupValue)
    );
    return NextResponse.json({ ok });
  } catch (e:any) {
    return NextResponse.json({ ok: false, error: 'Request failed' }, { status: 500 });
  }
}
