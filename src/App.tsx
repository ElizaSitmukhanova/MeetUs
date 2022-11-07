import { FC } from "react";
import { Body } from "./components/body";
import { Footer } from "./components/footer";
import { Route, Routes } from "react-router-dom";
import { FullPost } from "./components/FullPost";
import { PostsUrl } from "./utils/roter";
import { UserUrl } from "./utils/roter";
import { User } from "./components/Users"
import { Header } from "./components/header";

const App: FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path={PostsUrl.path} element={<FullPost />} />
        <Route path={UserUrl.path} element={<User />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
