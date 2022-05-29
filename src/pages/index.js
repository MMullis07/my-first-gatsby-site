import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby tutorial.</p>
      <StaticImage
        alt="Gatsby and React logos"
        src="../images/gatsbyandreactlogos.png"
      />
    </Layout>
  );
};

export default IndexPage;
