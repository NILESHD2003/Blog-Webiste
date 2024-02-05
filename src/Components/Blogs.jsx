import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";

function Blogs() {
  //consume data
  const { posts, loading } = useContext(AppContext);
  // console.log(posts);
  return <div className="w-11/12 max-w-[650px] py-4 flex flex-col gap-y-8 mt-20 mb-12">
    {
      loading ? (<div className="text-3xl text-center">Loading</div>) : (
        posts.length === 0 ? (<div>No Post Found!!</div>) : (
          posts.map((post)=>(
            <div key={post.id}>
              <p className="font-bold text-xl">{post.title}</p>
              <p className="text-base">
                By <span className="italic">{post.author} on <span className="underline font-semibold">{post.category}</span></span>
              </p>
              <p className="text-sm">
                Posted on <span className="underline">{post.date}</span>
              </p>
              <p className="text-base py-2">{post.content}</p>
              <div className="flex py-2 gap-2">{post.tags.map((tag, index) => {
                return <span key={index} className="text-blue-600 underline font-bold text-xs">{`#${tag}`}</span>
              })}</div>
            </div>
          ))
        )
      )
    }
  </div>;
}

export default Blogs;
