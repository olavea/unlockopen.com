import React from 'react'
import Link from 'gatsby-link'
import { rhythm } from '../utils/typography'
import css from './mailinglist-form.css'

class MailinglistForm extends React.Component {
  render() {
    const children =  this.props.children;
    return (
        <div>
            <script src="https://f.convertkit.com/ckjs/ck.5.js"></script>
            <form action="https://app.convertkit.com/forms/792816/subscriptions" className="seva-form formkit-form" method="post" data-sv-form="792816" data-uid="faf89d84f3" data-format="inline" data-version="5" data-options="{&quot;settings&quot;:{&quot;after_subscribe&quot;:{&quot;action&quot;:&quot;message&quot;,&quot;redirect_url&quot;:&quot;&quot;,&quot;success_message&quot;:&quot;Success! Now check your email to confirm your subscription.&quot;},&quot;return_visitor&quot;:{&quot;action&quot;:&quot;hide&quot;,&quot;custom_content&quot;:&quot;Thank you for subscribing to the mailing list. You should have received an email confirmation already!&quot;},&quot;recaptcha&quot;:{&quot;enabled&quot;:false}}}" min-width="400 500 600 700 800">
            { children }
              <div data-style="clean">
                  <ul className="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul>
                  <div data-element="fields" data-stacked="false" className="seva-fields formkit-fields">
                      <div className="formkit-field">
                          <input className="formkit-input" aria-label="Your first name" name="fields[first_name]" placeholder="Your first name" type="text" style={{color: "#000", borderColor: "rgb(227, 227, 227)", fontWeight: 300}} />
                      </div>
                      <div className="formkit-field">
                          <input className="formkit-input" name="email_address" placeholder="Your email address" required=" " type="text" style={{color: "#000", borderColor: "rgb(227, 227, 227)", fontWeight: 300}} />
                      </div>
                      <button data-element="submit" className="formkit-submit formkit-submit" style={{color: "#fff", borderColor: "rgb(255, 255, 255)", backgroundColor: "#b00056", fontWeight: 400 }}>
                          <div className="formkit-spinner">
                              <div></div>
                              <div></div>
                              <div></div>
                           </div>
                           <span>Subscribe</span>
                      </button>
                  </div>
              </div>
            </form>
        </div>
    )
  }
}

export default MailinglistForm



