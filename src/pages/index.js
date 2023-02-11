import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Question from '@/components/Question'
import QuestionNav from '@/components/QuestionNav'


export default function Home() {
  return (
    <>
      <Head>
        <title>Quiz App UI</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className='text-3xl font-semibold'>Demo Online Test</h1>
        <div className="flex">
        <Question/>
        <QuestionNav />
        </div>
      </main>
    </>
  )
}
