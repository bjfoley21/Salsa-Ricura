import React from 'react';
import Head from 'next/head';

import Footer from './Footer';

const AppLayout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>Salsa Ricura</title>
        <meta name="description" content='Salsa Ricura is a NY style On2 Salsa and Bachata dance studio located at the Dance Complex in Cambridge. We offer partnerwork and footwork classes every Monday'/>
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      <main className="main-container">
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default AppLayout;
