import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Booklmarks/Bookmarks";
import Header from "./components/header/header";
import Module from "./components/module/Module";

function App() {
  return (
    <>
      <Header></Header>
      <Module></Module>
      <div className="md:flex mt-5">
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </>
  );
}

export default App;
