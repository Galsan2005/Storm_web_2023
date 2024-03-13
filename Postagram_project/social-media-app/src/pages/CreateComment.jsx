import { useState } from "react";
import { getUser } from "../hooks/user.actions";
import axiosService from "../helpers/axios";


function CreateComment(props) {
    console.log("comment")
    console.log(props)
  const user = getUser();

  const [validated, setValidated] = useState(false);
  const [comment, setComment] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    setValidated(true);
    const data = {
      author: user.id,
      body: comment,
      post: props?.post?.id,
    };
    console.log()
    console.log(comment);
    axiosService
      .post(`/post/${props?.post?.id}/comment/`, comment)
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
      <form className="flex justify-between w-[100%]">
        <input
          className="ml-[5px] rounded-[20px] w-[80%] h-[35px] border-solid border-2 border-blue-600 pl-5"
          type="text"
          placeholder="Write a comment"
          onChange={(event) => setComment(event.target.value)}
        />
        <button className="w-[80px] mr-[20px] text-white bg-blue-600 h-[35px] rounded-[10px]" onClick={handleSubmit}>Comment</button>
      </form>
    </div>
  );
}

export default CreateComment;