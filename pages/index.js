import Head from 'next/head';
import Layout from "../components/Layout/Layout";
import Hero from "../components/Home/Hero";
import About from "../components/Home/About";

export default function Home() {
  return (
    <>
      <Head>
        <title>Vihermawan - Learner</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Hero />
        <About />
      </Layout>
    </>
  )
}
