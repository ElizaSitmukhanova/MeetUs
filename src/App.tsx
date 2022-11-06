import react from "react";
import { Body } from "./components/body";

import { Footer } from "./components/footer";
import { Route, Routes } from "react-router-dom";
import { FullPost } from "./components/FullPost";
import { PostsUrl } from "./utils/roter";
import { UserUrl } from "./utils/roter";
import {UserPost} from "./components/Users"
import { Header } from "./components/header";
const App = () => {
  return (
   <div>
     
     <Header />
     <Routes>
     <Route path={UserUrl.path}  element= {<UserPost />} /> 
     </Routes>
      
      <Routes>
        <Route path="/" element= {<Body />} />
        <Route path={PostsUrl.path}  element= {<FullPost />} />
          
      </Routes>
     
     
      <Footer />
   </div>
  );
}

export default App;
