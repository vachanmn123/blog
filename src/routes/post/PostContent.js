import ReactMarkdown from "react-markdown";
import { useState, useEffect } from "react";

export default function PostContent({ post }) {
  let [content, setContent] = useState("");
  let [isLoading, setIsLoading] = useState(true);
  let [error, setError] = useState(false);

  useEffect(() => {
    let postReq = fetch(`https://vachanmn.is-a.dev/BlogPosts/${post.mdFile}`)
      .then((response) => response.text())
      .catch((err) => {
        setError(true);
      });
    postReq.then((data) => {
      console.log(data);
      setContent(data);
      setIsLoading(false);
    });
  }, [post]);

  if (isLoading) return <div className="post-content">Loading...</div>;
  if (error) return <div className="post-content">Error loading content</div>;
  return (
    <div className="post-content" align="left">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}
