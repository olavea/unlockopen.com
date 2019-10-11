import React from 'react'
import BasicLayout from '../components/BasicLayout'
import Helmet from 'react-helmet'

const NotFoundPage = () => (
  <BasicLayout>
    <Helmet title="UnlockOpen | Page Not Found" />
    <h1>Page Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist. Sorry. :(</p>
  </BasicLayout>
)

export default NotFoundPage
