import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./ShowPost.css";
import PostContent from "./PostContent";
import { Helmet } from "react-helmet";

export default function ShowPost() {
  let param = useParams();
  let postID = param.postid;
  let [post, setPost] = useState({});
  let [isLoading, setIsLoading] = useState(true);
  let [error, setError] = useState(false);

  useEffect(() => {
    let posts = fetch(`https://vachanmn.is-a.dev/BlogPosts/register.json`)
      .then((response) => response.json())
      .catch((err) => {
        setError(true);
      });
    posts.then((data) => {
      setPost(data[postID]);
      setIsLoading(false);
    });
  }, [postID]);

  if (isLoading)
    return (
      <div className="post-display">
        <small>Loading...</small>
      </div>
    );
  if (error) return <div className="post-display">Error</div>;
  return (
    <div className="post-display">
      <Helmet>
        <title>{post.title} - The Vachan MN Blog</title>
      </Helmet>
      <h1>{post.title}</h1>
      <hr />
      <p>Written By: {post.Authors.join(", ")}</p>
      <p>Date: {new Date(post.date).toDateString()}</p>
      <hr />
      <PostContent post={post} />
    </div>
  );
}
