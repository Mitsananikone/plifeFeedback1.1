import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import '@/styles/globals.css';
import  Navbar  from '@/components/nav/nav';
import Footer from '@/components/footer/footer';
import 'bootstrap/dist/css/bootstrap.min.css';

 export default function App({ Component, pageProps }) {

    return (
        <>
            <Head>           
            {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
                <title>Phoenique Life</title>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"/>

            </Head>
                <Navbar />
                    <div >
                        <Component {...pageProps} />
                        <Footer/>
                    </div>
              
        </>
    );
}
