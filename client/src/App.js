import React from "react";
import Home from "./screens/Home/Home";
import Posts from "./screens/Posts/Posts";
import PostCreate from "./screens/CreatePost/CreatePost";
import EditPost from "./screens/EditPost/EditPost";
import PostDetails from "./screens/PostDetails/PostDetails";
import { Route, Switch } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/posts" component={Posts} />
        <Route path="/add-post" component={PostCreate} />
        <Route exact path="/posts/:id/edit" component={EditPost} />
        <Route exact path="/posts/:id" component={PostDetails} />
      </Switch>
    </div>
  );
};

export default App;
