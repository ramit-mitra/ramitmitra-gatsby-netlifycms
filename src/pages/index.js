import React, {useEffect} from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import PostLink from "../components/post-link";
import ProjectLink from "../components/project-link";
import HeroHeader from "../components/heroHeader";

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const IndexPage = ({
  data: {
    site,
    allMarkdownRemark: { edges },
  },
}) => {
  // console.log(edges);

  const Posts = edges
    // You can filter your posts based on some criterion
    .filter((edge) => !!edge.node.frontmatter.date)
    .filter((edge) => edge.node.frontmatter.template !== "Project")
    .filter((edge) => edge.node.frontmatter.hidden !== "yes")
    .map((edge) => <PostLink key={edge.node.id} post={edge.node} />);

  const Projects = edges
    .filter((edge) => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .filter((edge) => edge.node.frontmatter.template === "Project")
    .map((edge) => <ProjectLink key={edge.node.id} post={edge.node} />);
	
	useEffect(() => {
		toast("Wow so easy !");
  }, []);
	
	

  return (
    <Layout>
      <Helmet>
        <title>{site.siteMetadata.title}</title>
        <meta name="description" content={site.siteMetadata.description} />
      </Helmet>
      <HeroHeader />
      <h2>Blog Posts &darr;</h2>
      <div className="grids">{Posts}</div>
      <h2 className="project-header">Projects &darr;</h2>
      <div className="grids">{Projects}</div>
	  <ToastContainer 
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover />
    </Layout>
  );
};

export default IndexPage;
export const pageQuery = graphql`
  query indexPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            thumbnail
            template
            projectUrl
            metaDescription
            hidden
          }
        }
      }
    }
  }
`;
