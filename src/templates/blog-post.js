import React from "react"
import Helmet from "react-helmet"
import Link from "gatsby-link"
import get from "lodash/get"

import Layout from "../components/Layout"
import ArticleReaders from "../components/ArticleReaders"
import { rhythm, scale } from "../utils/typography"

const JsonLd = ({ data }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  />
)

const data = {
  "@context": "http://schema.org",
  "@type": "NewsArticle",
  headline: "Open-source framework for publishing content",
  datePublished: "2015-10-07T12:02:41Z",
  image: ["logo.jpg"],
}

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, "data.site.siteMetadata.title")
    const { previous, next } = this.props.pathContext
    return (
      <Layout bio={post.fields.bio}>
        <Helmet
          title={[post.fields.title, siteTitle].filter(t => t).join(" | ")}
        />

        <h1>{post.fields.title}</h1>
        <p
          style={{
            color: "#999",
            display: "block",
            marginBottom: rhythm(1),
            marginTop: rhythm(-1),
          }}
        >
          <small>{post.fields.date}</small>
        </p>

        <div
          className="markdown"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark {
      id
      html
    }
  }
`
// (fields: { slug: { eq: $slug } })
// fields {
//   title
//   bio
// }
