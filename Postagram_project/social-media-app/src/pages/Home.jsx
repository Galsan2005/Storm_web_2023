import React from "react";
import NavigationBar from "./NavigationBar";
import CreatePost from "./CreatePost";
import { usePostActions } from "../hooks/user.actions";
import Post from "./Post";
import OtherProfile from "./OtherProfile";

function Home() {
  const data = JSON.parse(localStorage.getItem("auth"));
  const userActions = usePostActions();
  // console.log("It is home");
  return (
    <div>
      <NavigationBar />
      <div className="flex justify-between">
        <div className="w-[65%]">
          <CreatePost />
          <Post />
          <Post />
          <Post />
        </div>
        <div className="w-[35%]">
          <OtherProfile />
        </div>
      </div>
    </div>
  );
}
export default Home;
