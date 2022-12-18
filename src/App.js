import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./components/Header"
import Detail from "./pages/Detail"
import Home from "./pages/Home"
import PostDetail from "./pages/PostDetail"
import Posts from "./pages/Posts"
import Users from "./pages/Users"

const App = () => {
  return (
    <Router>
      <div className="container">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/all">
            <Home />
          </Route>
          <Route path={`/all/:id`}>
            <Detail />
          </Route>
          <Route exact path="/posts">
            <Posts />
          </Route>
          <Route  path={`/posts/:postId`}>
            <PostDetail />
          </Route>
          <Route exact path="/users">
            <Users />
          </Route>
          <Route path="/users/:userId">
            <Users />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
