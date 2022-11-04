import react from "react";
import { Body } from "./components/body";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Route, Routes } from "react-router-dom";
import { FullPost } from "./components/FullPost";
import { PostsUrl } from "./utils/roter";

const App = () => {
  return (
   <div>
      <Header />
      <Routes>
        <Route path="/" element= {<Body />} />
        <Route path={PostsUrl.path}  element= {<FullPost />} />
      </Routes>
      <Footer />
   </div>
  );
}

export default App;
