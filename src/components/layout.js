import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Navigation from "../components/navigation";
import { SocialIcon } from "react-social-icons";
import "prismjs/themes/prism-okaidia.css";

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );
  return (
    <div className="site-wrapper">
      <header className="site-header">
        <div className="site-title">
          <Link to="/">{data.site.siteMetadata.title}</Link>
          <br />
          <SocialIcon
            url="https://twitter.com/ramit_mitra"
            style={{ height: 25, width: 25 }}
          />
          &nbsp;
          <SocialIcon
            url="https://github.com/ramit-mitra"
            style={{ height: 25, width: 25 }}
          />
        </div>
        <Navigation />
      </header>
      {children}
      <footer className="site-footer">
        <p>&copy; {new Date().getFullYear()} Ramit Mitra</p>
      </footer>
    </div>
  );
};
