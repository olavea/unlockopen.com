import React from 'react'
import BasicLayout from '../components/BasicLayout'
import Helmet from 'react-helmet'

import { rhythm, scale, options} from '../utils/typography'
import * as brand from '../utils/brand'

class Info extends React.Component {
  render() {
    return (
      <BasicLayout>
        <Helmet title="UnlockOpen LLC Info" />
        
        <h1>UnlockOpen LLC</h1>

 <h2>Company details</h2>
    <table>
      <tr><th>Company name:</th><td>UnlockOpen LLC</td></tr>
      <tr><th>Street address:</th><td>4, route de l'Eaumorte</td></tr>
      <tr><th>City:</th><td>Laconnex</td></tr>
      <tr><th>Province/Region/State:</th><td>GE</td></tr>
      <tr><th>Postal Code:</th><td>1287</td></tr>
      <tr><th>Country:</th><td>Switzerland</td></tr>
      <tr><th>Phone:</th><td><a href="tel:+41 79 173 19 49">+41 79 173 19 49</a></td></tr>
      <tr><th>Email:</th><td><a href="mailto:billing@unlockopen.com">billing@unlockopen.com</a></td></tr>
    </table>
    <h2>Corporate ID</h2>
    <table>
      <tr><th>D-U-N-S number:</th><td>48-534-3110</td></tr>
      <tr><th>Swiss UID:</th><td>CHE-115.171.786</td></tr>
      <tr>
        <th>Business Registry:</th>
        <td>
          <a href="https://ge.ch/hrcintapp/companyReport.action?lang=EN&rcentId=14574965200000066031025&showHeader=true">Web</a> | <a href="https://ge.ch/hrcintreport/createReport?rcentId=14574965200000066031025&lang=FR">PDF</a>
        </td>
      </tr>
    </table>
    <h2>Bank Details</h2>
    <table>
      <tr><th>Bank name:</th><td>	UBS S.A.</td></tr>
      <tr><th>Street address:</th><td>Rue des Noirettes 35</td></tr>
      <tr><th>&nbsp;</th><td>Centre des Acacias</td></tr>
      <tr><th>City:</th><td>Carouge</td></tr>
      <tr><th>Province/Region/State:</th><td>GE</td></tr>
      <tr><th>Postal Code:</th><td>1227</td></tr>
      <tr><th>Country:</th><td>Switzerland</td></tr>
      <tr><th>BIC/SWIFT:</th><td>	UBSWCHZH80A</td></tr>
      <tr><th>Clearing number:</th><td>240</td></tr>
      <tr><th>CHF IBAN:</th><td>	CH48 0024 0240 8555 6201 Y</td></tr>
      <tr><th>EUR IBAN:</th><td>	CH71 0024 0240 8555 6261 M</td></tr>
      <tr><th>USD IBAN:</th><td>	CH77 0024 0240 8555 6260 E</td></tr>
    </table>
              
              
        
      </BasicLayout>
    )
  }
}

export default Info
