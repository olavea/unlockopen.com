import React from "react";
import BasicLayout from "./BasicLayout";

import MailinglistForm from "./MailinglistForm";
import Bio from "./Bio";

class Layout extends React.Component {
  render() {
    const childrenOfMatryoshka = this.props.children;
    let layoutBio = this.props.bio ? <Bio /> : null;
    return (
      <BasicLayout>
        {childrenOfMatryoshka}
        <MailinglistForm>
          <p>
            <strong>Intrigued? Want to know more?</strong>
          </p>
          <p>Subscribe to our mailing list.</p>
        </MailinglistForm>
        {layoutBio}
      </BasicLayout>
    );
  }
}

export default Layout;
