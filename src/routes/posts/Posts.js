import { useState, useEffect } from "react";
import PostRow from "./PostRow";
import { Table } from "react-bootstrap";
import "./showPosts.css";

export default function Posts() {
  let [postList, setPostList] = useState([]);
  let [postListLoaded, setPostListLoaded] = useState(false);
  let [postListError, setPostListError] = useState(false);

  useEffect(() => {
    let posts = fetch("https://vachanmn.is-a.dev/BlogPosts/register.json");
    posts.then((response) => {
      response.json().then((data) => {
        setPostList(Object.keys(data));
        setPostListLoaded(true);
      });
    });
    posts.catch((error) => {
      setPostListError(true);
    });
  }, []);

  if (!postListLoaded)
    return (
      <div className="posts-div">
        <h1>Posts</h1>
        <small>Loading...</small>
      </div>
    );
  if (postListError) return <div>Failed to load posts</div>;
  return (
    <div className="posts-div">
      <h1>Posts</h1>
      <Table bordered hover style={{ color: "white" }}>
        <thead>
          <tr>
            <th>Post ID</th>
            <th>Post Title</th>
            <th>Post Authors</th>
            <th>Post Date</th>
          </tr>
        </thead>
        <tbody>
          {postList.map((id) => (
            <PostRow id={id} />
          ))}
        </tbody>
      </Table>
    </div>
  );
}
