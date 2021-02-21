import React from "react";
import Head from 'next/head';
import Layout from "../components/Layout/Layout";

export default function Blog() {
    return (
      <>
        <Head>
          <title>Vihermawan - Learner</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout>
          <p>This is page of blog</p>
        </Layout>
      </>
    )
  }
  