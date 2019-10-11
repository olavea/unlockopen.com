import React from 'react'
import BasicLayout from './BasicLayout'
//import Hero from './Hero'
import MailinglistForm from './MailinglistForm'
import Bio from './Bio'

import { rhythm, scale } from '../utils/typography'

class Layout extends React.Component {
  render() {
    const children = this.props.children;
    let bio = this.props.bio ? <Bio /> : null;
    return (
        <BasicLayout>
            { children }
            <MailinglistForm>
              <p><strong>Intrigued? Want to know more?</strong></p>
              <p>Subscribe to our mailing list.</p>
            </MailinglistForm>
            {bio}
        </BasicLayout>
    )
  }
}

export default Layout



