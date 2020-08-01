import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post }) => (
  <article className="card ">
    <Link to={post.frontmatter.path}>
      {!!post.frontmatter.thumbnail && (
        <img src={post.frontmatter.thumbnail} alt={post.frontmatter.title + "- Featured Shot"} />
      )}
    </Link>
    <header>
      <h2 className="post-title project-title">
        <Link to={post.frontmatter.path} className="post-link">
          {post.frontmatter.title}
        </Link>
      </h2>
      <div className="project-meta">{post.excerpt}</div>
	  {!!post.frontmatter.projectUrl && (
        
		<div className="project-meta"><br /><a className="post-link" href={post.frontmatter.projectUrl} target="_blank" rel="noreferrer">Visit project link &nbsp; &rarr;</a></div>
      )}
      <div className="project-meta">{post.projectUrl}</div>
    </header>
  </article>
)
export default PostLink
