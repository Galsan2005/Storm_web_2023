import { useState } from "react";
import { getUser } from "../hooks/user.actions";
import axiosService from "../helpers/axios";

function CreatePost() {
  const user = getUser();

  const [validated, setValidated] = useState(false);
  const [post, setPost] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    setValidated(true);
    const data = {
      author: user.id,
      body: post,
    };
    console.log(data);
    axiosService
      .post("/api/post/", data)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="flex items-center w-[90%] m-[30px] h-[100px] border-1 shadow-xl rounded-[20px]">
      <img
        className="bg-white ml-[20px] rounded-[100px]  border-[2px] w-[50px] border-blue-600 h-[50px]"
        src={user.avatar}
        alt=""
      />
      <form className="w-[100%]">
        <input
          className="ml-[20px] rounded-[20px] w-[80%] h-[35px] border-solid border-2 border-blue-600 pl-5"
          type="text"
          placeholder="Write a post"
          onChange={(event) => setPost(event.target.value)}
        />
        <button onClick={handleSubmit}>post me</button>
      </form>
    </div>
  );
}

export default CreatePost;
