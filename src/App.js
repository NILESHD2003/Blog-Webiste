import {React, useEffect, useContext} from "react";
import Header from "./Components/Header";
import Blogs from "./Components/Blogs";
import Pagination from "./Components/Pagination";
import { AppContext } from "./Context/AppContext";
import "./App.css"

export default function App() {
  // This is used for State lifting.
  const {fetchBlogPost} = useContext(AppContext);

  useEffect(()=>{
    fetchBlogPost();
  }, [])
  return (<div className="w-full h-full flex flex-col gap-y-1 justify-center items-center">
    <Header/>
    <Blogs/>
    <Pagination/>
  </div>);
}
