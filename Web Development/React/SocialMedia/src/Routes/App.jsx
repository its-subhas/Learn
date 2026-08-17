import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Sidebar from "../Components/Sidebar";
import PostListProvider from "../Store/PostListStore";
import { Outlet } from "react-router-dom";
import "./App.css";

function App() {

  return (
    <PostListProvider>
      <div className="mycontainer">
        <Sidebar />
        <div className="mycontent">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}



export default App;

// {selectedTab === "Home" ? <PostList /> : <Post />}
