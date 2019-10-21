import React from "react";
import Layout from "../components/Layout";
import Helmet from "react-helmet";

const NotFoundPage = () => (
  <Layout>
    <Helmet title="UnlockOpen | Page Not Found" />
    <h1>Page Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist. Sorry. :(</p>
  </Layout>
);

export default NotFoundPage;
