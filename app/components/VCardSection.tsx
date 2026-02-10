'use client';

import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Download, Copy, Check, ExternalLink, MapPin, Phone, Mail, Globe, User } from 'lucide-react';

export default function VCardSection() {
  const [copied, setCopied] = useState(false);

  // Données vCard
  const vCardData = {
    firstName: 'Michael',
    lastName: 'SYLVIE',
    title: 'Entrepreneur & Consultant en innovation digitale',
    nif: 'Y7565912F',
    phone: '+33620654961',
    displayPhone: '+33 6 20 65 49 61',
    email: 'michaeldia231116@gmail.com',
    website1: 'https://nexoai.fr',
    website2: 'https://michaeldiadev.vercel.app',
    address: 'Telde, Las Palmas',
    country: 'Spain',
  };

  // Génération de la string vCard 3.0
  const generateVCardString = () => {
    return `BEGIN:VCARD
VERSION:3.0
FN:Michael SYLVIE
N:SYLVIE;Michael;;;
TITLE:${vCardData.title}
TEL;TYPE=CELL:${vCardData.phone}
EMAIL;TYPE=WORK:${vCardData.email}
URL:${vCardData.website1}
URL:${vCardData.website2}
ADR;TYPE=WORK:;;;Telde;Las Palmas;;Spain
NOTE:NIF: ${vCardData.nif}
END:VCARD`;
  };

  const vCardString = generateVCardString();

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([vCardString], { type: "text/vcard;charset=utf-8" });
    element.href = URL.createObjectURL(file);
    element.download = "contact-michael-sylvie.vcf";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleCopy = () => {
    const textToCopy = `Michael SYLVIE\nTel: ${vCardData.displayPhone}\nEmail: ${vCardData.email}\nSites: ${vCardData.website1}, ${vCardData.website2}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="px-6 py-24 bg-white border-t border-slate-100">
      <div className="max-w-4xl mx-auto">
        <div className="bg-slate-50 rounded-3xl border border-slate-200 overflow-hidden shadow-sm flex flex-col md:flex-row">
          
          {/* Bloc Gauche : Infos Texte */}
          <div className="p-8 md:p-12 flex-1 flex flex-col justify-center">
            
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Mes Coordonnées</h2>
              <p className="text-slate-500">Scannez le QR code ou téléchargez la fiche contact pour échanger facilement.</p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center text-slate-700">
                <User className="w-5 h-5 text-indigo-500 mr-3 flex-shrink-0" />
                <div className="flex flex-col">
                  <span className="font-semibold">Michael SYLVIE</span>
                  <span className="text-sm text-slate-500">Entrepreneur & Consultant Innovation</span>
                </div>
              </div>
              <div className="flex items-center text-slate-600">
                <Phone className="w-5 h-5 text-indigo-500 mr-3 flex-shrink-0" />
                <a href={`tel:${vCardData.phone}`} className="hover:text-indigo-600 transition-colors">
                  {vCardData.displayPhone}
                </a>
              </div>
              <div className="flex items-center text-slate-600">
                <Mail className="w-5 h-5 text-indigo-500 mr-3 flex-shrink-0" />
                <a href={`mailto:${vCardData.email}`} className="hover:text-indigo-600 break-all transition-colors">
                  {vCardData.email}
                </a>
              </div>
              <div className="flex items-center text-slate-600">
                <MapPin className="w-5 h-5 text-indigo-500 mr-3 flex-shrink-0" />
                <span>{vCardData.address} (Espagne)</span>
              </div>
              <div className="flex items-start text-slate-600">
                <Globe className="w-5 h-5 text-indigo-500 mr-3 mt-1 flex-shrink-0" />
                <div className="flex flex-col">
                  <a href={vCardData.website1} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors flex items-center">
                    nexoai.fr <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                  <a href={vCardData.website2} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors flex items-center mt-1">
                    michaeldiadev.vercel.app <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button 
                onClick={handleDownload}
                className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/10"
              >
                <Download className="w-4 h-4 mr-2" />
                Télécharger .vcf
              </button>
              <button 
                onClick={handleCopy}
                className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-white border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 hover:text-indigo-600 transition-colors"
              >
                {copied ? <Check className="w-4 h-4 mr-2 text-emerald-500" /> : <Copy className="w-4 h-4 mr-2" />}
                {copied ? 'Copié !' : 'Copier infos'}
              </button>
            </div>
          </div>

          {/* Bloc Droit : QR Code */}
          <div className="bg-white p-8 md:p-12 border-t md:border-t-0 md:border-l border-slate-200 flex flex-col items-center justify-center text-center">
            <div className="bg-white p-4 rounded-2xl shadow-xl shadow-indigo-500/10 border border-slate-100 mb-4">
              <QRCodeSVG 
                value={vCardString}
                size={200}
                level={"M"}
                includeMargin={false}
                imageSettings={{
                  src: "https://nbaiw6gccbuytvgc.public.blob.vercel-storage.com/mike%20corporate.png",
                  x: undefined,
                  y: undefined,
                  height: 40,
                  width: 40,
                  excavate: true,
                }}
              />
            </div>
            <p className="text-sm font-medium text-slate-900">
              Scannez pour ajouter
            </p>
            <p className="text-xs text-slate-400 mt-1">
              Compatible iOS & Android
            </p>
          </div>

        </div>
        
        {/* Footnote NIF discret */}
        <div className="text-center mt-6">
          <span className="text-xs text-slate-300">NIF: {vCardData.nif}</span>
        </div>
      </div>
    </section>
  );
}
