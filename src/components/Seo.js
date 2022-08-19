/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

const Seo = ({ title, description }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            lang
            social {
              facebook
            }
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  const metaTitle = site.siteMetadata.title
  const { facebook } = site.siteMetadata.social
  // console.log(site, title, metaTitle)
  // console.log(title)
  // console.log(metaTitle)

  return (
    <>
      <title>{metaTitle ? `${title} | ${metaTitle}` : title}</title>
      <meta name="description" content={metaDescription} />
      <meta
        property="og:title"
        content={metaTitle ? `${title} | ${metaTitle}` : title}
      />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="og:image" content="" />
      <meta property="og:url" content="http://lewitarium.pl" />
      <meta name=":card" content="summary" />
      <meta name="facebook:creator" content={facebook} />
      <meta name="facebook:title" content={metaTitle} />
      <meta name="facebook:description" content={metaDescription} />

      {/* {children} */}
    </>
  )
}

Seo.defaultProps = {
  description: ``,
  children: {},
}

Seo.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string.isRequired,
}

export default Seo
