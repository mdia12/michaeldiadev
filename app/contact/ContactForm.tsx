'use client';

import React, { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('https://n8n.srv1101542.hstgr.cloud/webhook-test/9a22701f-2807-48e6-b920-e6606bc968e5', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  }

  return (
    <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-lg">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Envoyer un message</h2>
      
      {status === 'success' ? (
        <div className="p-6 bg-emerald-50 border border-emerald-100 rounded-xl text-center">
          <div className="text-emerald-500 text-4xl mb-4">✨</div>
          <h3 className="text-lg font-bold text-emerald-800 mb-2">Message envoyé !</h3>
          <p className="text-emerald-600">Je vous recontacterai très rapidement.</p>
          <button 
            onClick={() => setStatus('idle')}
            className="mt-6 text-sm text-emerald-700 hover:text-emerald-900 underline"
          >
            Envoyer un autre message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Nom</label>
            <input 
              type="text" 
              name="name" 
              id="name" 
              required 
              disabled={status === 'loading'}
              className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all disabled:opacity-50 disabled:bg-slate-50" 
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
            <input 
              type="email" 
              name="email" 
              id="email" 
              required 
              disabled={status === 'loading'}
              className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all disabled:opacity-50 disabled:bg-slate-50" 
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
            <textarea 
              name="message" 
              id="message" 
              rows={4} 
              required 
              disabled={status === 'loading'}
              className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all disabled:opacity-50 disabled:bg-slate-50"
            ></textarea>
          </div>
          
          {status === 'error' && (
             <div className="p-3 bg-red-50 text-red-600 text-sm rounded-lg border border-red-100">
               Une erreur est survenue lors de l'envoi. Veuillez réessayer ou utiliser l'email direct.
             </div>
          )}

          <button 
            type="submit" 
            disabled={status === 'loading'}
            className="w-full py-3 px-6 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {status === 'loading' ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Envoi en cours...
              </>
            ) : 'Envoyer le message'}
          </button>
        </form>
      )}
    </div>
  );
}
