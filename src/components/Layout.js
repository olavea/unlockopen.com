import React from "react";
import BasicLayout from "./BasicLayout";

import MailinglistForm from "./MailinglistForm";
import Bio from "./Bio";

const Layout = ({ displayBio, children }) => {
  return (
    <BasicLayout>
      {children}
      <MailinglistForm>
        <p>
          <strong>Intrigued? Want to know more?</strong>
        </p>
        <p>Subscribe to our mailing list.</p>
      </MailinglistForm>
      {displayBio && <Bio />}
    </BasicLayout>
  );
};

export default Layout;
