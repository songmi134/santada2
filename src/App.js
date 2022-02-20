import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing/Landing";
import Search from "./pages/Search/Search";
import Detail from "./pages/Detail/Detail";
import Community from "./pages/Community/Community";
import WritingForm from "./pages/Community/WritingForm";
import Login from "./pages/Login/Login";
import AuthProvider from "./components/login/AuthProvider";
import My from './pages/My/My';

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter basename="mountain">
        <Navbar />
        <Route path="/" exact component={Landing} />
        <Route path="/login" exact component={Login} />
        <Route path="/search" exact component={Search} />
        <Route path="/mountain/search/:id" exact component={Detail} />
        <Route path="/community" exact component={Community} />
        <Route path="/community/new" exact component={WritingForm} />
        <Route path="/community/update/:id" exact component={WritingForm} />
        <Route path="/my" component={My} />
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
