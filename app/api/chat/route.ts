import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    // URL du webhook n8n
    const webhookUrl = 'https://n8n.srv1101542.hstgr.cloud/webhook/2fe872b4-4a12-464d-adbf-1471d9684f65/chat';

    // Appel serveur-à-serveur vers n8n (pas de problème CORS ici)
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
        console.error(`n8n Error: ${response.status} ${response.statusText}`);
        return NextResponse.json(
            { error: 'Error communicating with n8n' }, 
            { status: response.status }
        );
    }

    // Gestion de la réponse (JSON ou Texte)
    const contentType = response.headers.get('content-type');
    let data;
    
    if (contentType && contentType.includes('application/json')) {
      data = await response.json();
    } else {
      // Si n8n ne renvoie pas du JSON (ex: raw text), on l'encapsule
      const text = await response.text();
      data = { output: text };
    }

    return NextResponse.json(data);

  } catch (error) {
    console.error('Proxy Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' }, 
      { status: 500 }
    );
  }
}
