import React from 'react';
import { Page, Text, View, Document, StyleSheet, renderToStream } from '@react-pdf/renderer';
import { NextResponse } from 'next/server';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 40,
    fontFamily: 'Helvetica',
  },
  header: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#333333',
    paddingBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#000000',
  },
  title: {
    fontSize: 14,
    color: '#333333',
    marginBottom: 4,
  },
  location: {
    fontSize: 10,
    color: '#666666',
    marginBottom: 8,
  },
  tagline: {
    fontSize: 11,
    fontStyle: 'italic',
    color: '#444444',
  },
  section: {
    marginTop: 20,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#333333',
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    marginBottom: 8,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  text: {
    fontSize: 10,
    lineHeight: 1.5,
    color: '#111111',
    marginBottom: 4,
  },
  listItem: {
    fontSize: 10,
    lineHeight: 1.5,
    color: '#111111',
    marginLeft: 10,
    marginBottom: 2,
  },
  projectBlock: {
    marginBottom: 8,
  },
  projectTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#000000',
  },
  projectDesc: {
    fontSize: 10,
    color: '#333333',
  },
  stackText: {
    fontSize: 10,
    color: '#333333',
  },
  footer: {
    marginTop: 'auto',
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
    paddingTop: 10,
  },
  footerText: {
    fontSize: 9,
    color: '#666666',
    lineHeight: 1.4,
  },
});

const ProfileDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.name}>Michael DIA</Text>
        <Text style={styles.title}>Entrepreneur IA & Automation</Text>
        <Text style={styles.location}>France · Canaries · International</Text>
        <Text style={styles.tagline}>"Conception de solutions SaaS et IA orientées performance, fiabilité et automatisation."</Text>
      </View>

      {/* PROFILE */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>PROFIL</Text>
        <Text style={styles.text}>
          Entrepreneur tech spécialisé dans l’IA, l’automatisation et les architectures SaaS.
          J’accompagne des organisations dans la conception de produits fiables, sécurisés et scalables,
          avec une approche pragmatique orientée résultats opérationnels.
        </Text>
      </View>

      {/* AREAS OF EXPERTISE */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>DOMAINES D'EXPERTISE</Text>
        <Text style={styles.listItem}>• IA & agents intelligents</Text>
        <Text style={styles.listItem}>• Automatisation de processus métier</Text>
        <Text style={styles.listItem}>• Architecture SaaS & API</Text>
        <Text style={styles.listItem}>• Intégration systèmes & data</Text>
        <Text style={styles.listItem}>• Sécurité et fiabilité des plateformes</Text>
      </View>

      {/* PROJECTS (NexoAI - Corrected) */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>PROJETS PHARES</Text>
        
        <View style={styles.projectBlock}>
          <Text style={styles.projectTitle}>NexoAI</Text>
          <Text style={styles.projectDesc}>IA & automatisation sur mesure pour entreprises</Text>
        </View>

        <View style={styles.projectBlock}>
          <Text style={styles.projectTitle}>AlgoNovaAI</Text>
          <Text style={styles.projectDesc}>Intelligence artificielle appliquée au trading</Text>
        </View>
        
        <View style={styles.projectBlock}>
          <Text style={styles.projectTitle}>AlgoNovaEdge</Text>
          <Text style={styles.projectDesc}>Infrastructure SaaS pour traders (brokers, gestion du risque, automatisation)</Text>
        </View>
      </View>

      {/* COLLABORATION TYPES */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>MODES DE COLLABORATION</Text>
        <Text style={styles.listItem}>• Conseil stratégique & cadrage produit</Text>
        <Text style={styles.listItem}>• Développement de MVP / Proof of Concept</Text>
        <Text style={styles.listItem}>• Partenariats techniques long terme</Text>
        <Text style={styles.listItem}>• Interventions ponctuelles (audit, structuration)</Text>
      </View>

      {/* STACK */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>STACK TECHNIQUE</Text>
        <Text style={styles.stackText}>Next.js · TypeScript · Supabase · IA · APIs · Automatisation</Text>
      </View>

      {/* FOOTER */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Contact:</Text>
        <Text style={styles.footerText}>Téléphone : +33 6 20 65 49 61</Text>
        <Text style={styles.footerText}>Email : contact@michaeldia.com</Text>
        <Text style={styles.footerText}>Site : www.michaeldia.com</Text>
      </View>

    </Page>
  </Document>
);

export async function GET() {
  const stream = await renderToStream(<ProfileDocument />);
  
  return new NextResponse(stream as any, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="Michael_DIA_Profil_IA_Automation.pdf"',
    },
  });
}
