import React from 'react';
import Layout from 'layouts/index';

const NIAProject = () => (
  <Layout>
    <React.Fragment>
        <h1>Project One</h1>
        <section>
        <h2>Overview</h2>
        <p>Add more details here in future, just testing right now...</p>
        </section>
    </React.Fragment>
  </Layout>
);

export default NIAProject;

export const Head = () => (
  <>
    <title>National Institute on Aging (NIA) | Matthew's Portfolio</title>
    <meta name="description" content="Detailed write-up NIA Site work." />
  </>
);
