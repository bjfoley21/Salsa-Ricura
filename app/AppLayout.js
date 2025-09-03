import React from 'react';
import Head from 'next/head';

import Footer from './Footer';

const AppLayout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>Salsa Ricura</title>
        <meta name="description" content='Salsa Ricura is a Salsa and Bachata dance studio located at the Dance Complex in Cambridge. We offer partnerwork classes every Monday and footwork classes every Wednesday'/>
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
