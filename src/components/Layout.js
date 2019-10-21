import React from "react";
import Helmet from "react-helmet";
import Header from "./Header";
import Footer from "./Footer";
import ColorLine from "./ColorLine";
import { rhythm } from "../utils/typography";
import MailinglistForm from "./MailinglistForm";
import Bio from "./Bio";

const Layout = ({ displayBio, children }) => {
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
      </Helmet>
      <Header />

      <div
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)} ${rhythm(1)} ${rhythm(
            3 / 4
          )}`,
        }}
      >
        {children}
      </div>

      <MailinglistForm>
        <p>
          <strong>Intrigued? Want to know more?</strong>
        </p>
        <p>Subscribe to our mailing list.</p>
      </MailinglistForm>
      {displayBio && <Bio />}
      <Footer
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: rhythm(24),
          padding: `${rhythm(1)} ${rhythm(3 / 4)} 0 ${rhythm(3 / 4)}`,
        }}
      />
      <ColorLine />
    </div>
  );
};

export default Layout;
