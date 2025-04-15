import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

import Blog from "./blog";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hunting Coder | Developer Blog</title>
        <meta name="description" content="A blog for hunting coders by a hunting coder" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.main}>
        <div className={styles.img}>
          <Image 
            className={styles.myImg} 
            src="/hero.jpg" 
            width={600} 
            height={400} 
            alt="Coding hero image"
            priority
          />
        </div>
        
        <h1 className={styles.title}>
          Hunting Coder
        </h1>
        
        <p className={styles.subtitle}>
          Exploring the world of code, one bug at a time.
        </p>
        
        <div className={styles.blogContainer}>
          {/* <Blog /> Correctly pass blogs here */}
        </div>
      </main>
    </>
  );
}
