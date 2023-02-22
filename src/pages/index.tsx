import Head from 'next/head';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import { PEIImage } from '../common';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>PEI</title>
        <meta name="description" content="Generated for PEI content-hub" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/faviconPEI.png" />
      </Head>
      <main className={styles.main}>
        <PEIImage
          src={'/pei-logo.svg'}
          alt="Picture of the Company"
          width={250}
          height={250}
        />
      </main>
      <footer>
        <p></p>
      </footer>
    </>
  );
}
