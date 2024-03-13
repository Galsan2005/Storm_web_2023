import React from "react";
import NavigationBar from "./NavigationBar";
import CreatePost from "./CreatePost";
import Post from "./Post";
import useSWR from 'swr';
import { fetcher } from "../helpers/axios";
import OtherProfile from "./OtherProfile";


function Home() {
  const posts = useSWR(`/post/?author_public_id=8627e5187a1d42468c13d2205be84991`, fetcher, {
    refreshInterval: 20000
  })
  console.log("111111111")
  console.log(posts?.data)
  return (
    <div>
      <NavigationBar />
      <div className="flex justify-between">
        <div className="w-[65%]">
          <CreatePost />
         {
          posts.data?.map((post, index) => <Post key={index} post={post} refresh={posts.mutate} />)
         }
        </div>
        <div className="w-[35%]">
          <OtherProfile />
        </div>
      </div>
    </div>
  );
}
export default Home;
