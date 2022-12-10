import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./routes/home/App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  RouterProvider,
  createHashRouter,
  HashRouter,
  Route,
  Routes,
} from "react-router-dom";
import ErrorPage from "./routes/errors/error-page";
import Posts from "./routes/posts/Posts";
import ShowPost from "./routes/post/ShowPost";
import About from "./routes/about/about";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createHashRouter([
  {
    path: "/blog",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Posts />,
      },
      {
        path: "post/:postid",
        element: <ShowPost />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);
root.render(
  <React.StrictMode>
    <HashRouter basename="/">
      <Routes>
        <Route path="/" element={<App component={<Posts />} />} />
        <Route
          path="/post/:postid"
          element={<App component={<ShowPost />} />}
        />
        <Route path="/about" element={<App component={<About />} />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
