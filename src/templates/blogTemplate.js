import React, {useEffect} from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import { Disqus, CommentCount } from "gatsby-plugin-disqus";
import Layout from "../components/layout";

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
  pageContext,
}) {
  const { site, markdownRemark } = data; // data.markdownRemark holds your post data
  const { siteMetadata } = site;
  const { frontmatter, html } = markdownRemark;
  const { id } = pageContext.node;
  const { template } = pageContext.node.frontmatter;

  let disqusConfig = {
    url: `${site.siteMetadata.siteUrl + frontmatter.path}`,
    /* identifier: frontmatter.title + frontmatter.date, */
    identifier: id,
    title: frontmatter.title,
  };

  // console.log(frontmatter.hidden);

	useEffect(() => {
		// if the post was hidden, you wont be able to see it and forced to return to home
		if (frontmatter.hidden === "yes") return (window.location = "/");
	}, []);

  

  return (
    <Layout>
      <Helmet>
        <title>
          {frontmatter.title} | {siteMetadata.title}
        </title>
        <meta name="description" content={frontmatter.metaDescription} />
      </Helmet>
      <div className="blog-post-container">
        <article className="post">
          {!frontmatter.thumbnail && (
            <div className="post-thumbnail">
              <h1 className="post-title">{frontmatter.title}</h1>
              {template === "BlogPost" ? (
                <div className="post-meta">{frontmatter.date}</div>
              ) : (
                ""
              )}
            </div>
          )}
          {!!frontmatter.thumbnail && (
            <div
              className="post-thumbnail"
              style={{ backgroundImage: `url(${frontmatter.thumbnail})` }}
            >
              <h1 className="post-title">{frontmatter.title}</h1>
              <div className="post-meta">{frontmatter.date}</div>
            </div>
          )}
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <div className="blog-post-content">
            <br />
            <hr />
            <br />
            {template === "BlogPost" ? <Disqus config={disqusConfig} /> : ""}
          </div>
        </article>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        thumbnail
        metaDescription
        hidden
      }
    }
  }
`;
