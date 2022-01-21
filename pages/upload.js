import React from "react";
import Head from "next/head";
import Index from "../components/pages";

const IndexPage = () => {
  return (
    <>
      <Head>
        <title>Upload đi - Generate mockups for your screenshots</title>
      </Head>
      <Index  className="index"/>
    </>
  );
};

export default IndexPage;