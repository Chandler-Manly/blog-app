import React from "react";
import Home from "./screens/Home/Home.jsx";
import Posts from "./screens/Posts/Posts.jsx";
import CreatePost from "./screens/CreatePost/CreatePost.jsx";
import EditPost from "./screens/EditPost/EditPost.jsx";
import PostDetails from "./screens/PostDetails/PostDetails.jsx";
import { Route, Switch } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/posts" component={Posts} />
        <Route path="/add-post" component={CreatePost} />
        <Route exact path="/posts/:id/edit" component={EditPost} />
        <Route exact path="/posts/:id" component={PostDetails} />
      </Switch>
    </div>
  );
};

export default App;
