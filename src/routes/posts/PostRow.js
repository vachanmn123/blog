import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function PostRow(id) {
  let [post, setPost] = useState({});
  let [postLoaded, setPostLoaded] = useState(false);
  let [failedLoad, setFailedLoad] = useState(false);

  useEffect(() => {
    let post = fetch(`https://vachanmn.is-a.dev/BlogPosts/register.json`);
    post.then((response) => {
      response.json().then((data) => {
        setPost(data[id.id]);
        setPostLoaded(true);
      });
    });
    post.catch((error) => {
      setFailedLoad(true);
    });
  }, []);

  if (!postLoaded || !post) return <tr colSpan={4}>Loading...</tr>;
  if (failedLoad) return <tr colSpan="4">Failed to load post</tr>;
  return (
    <tr>
      <td>{id.id}</td>
      <td>
        <Link to={`post/${id.id}`}>{post.title}</Link>
      </td>
      <td>{post.Authors.join(", ")}</td>
      <td>{new Date(post.date).toDateString()}</td>
    </tr>
  );
}
