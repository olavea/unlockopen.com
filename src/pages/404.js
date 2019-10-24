import React from "react";
import Layout from "../components/Layout";
import Helmet from "react-helmet";

// Is not working
// <Helmet title="UnlockOpen |
// How do I debugg? 🐛 :lady-bug

const NotFoundPage = () => (
  <Layout>
    <Helmet title="UnlockOpen | Page Not Found" />
    <h1>Page Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist. Sorry. :(</p>
  </Layout>
);

export default NotFoundPage;
