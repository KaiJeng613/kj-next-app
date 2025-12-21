import Image from 'next/image';
import Head from 'next/head';
import AnimatedText from '@/components/AnimatedText'
import styles from '@/styles/Home.module.css';

export default function Home() {
  const products = [{id: 1,name: 7}, {id: 2,name: 3}, {id: 3,name: 15},
                     {id: 4,name: 1}, {id: 5,name: 11}, {id: 6,name: 9} ];
  return (
    <div className={styles.container}>
      <Head>
        <title>Kai Jeng | Sorting</title>
        <meta name="description" content="My personal Portfolio built with nextjs which showcases my career background and experiences"></meta>  
      </Head>
      <main className={styles.main}>
        <AnimatedText text="Sorting Algorithms" className='!text-6xl' />
        <br></br>
        <div className='w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden'>
                {products && products.length>0 && 
                products
                .sort((a, b) => a.name - b.name)
                .map(products => (
                      <p key={products.id}> 
                        {products.name},
                      </p> 
                ))}
        </div>
      </main>

    </div>
  );
}