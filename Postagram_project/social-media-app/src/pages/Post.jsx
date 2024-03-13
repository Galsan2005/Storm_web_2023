import { useState } from "react";
import { getUser } from "../hooks/user.actions";
import CreateComment from "./CreateComment";
import useSWR from 'swr';
import { fetcher } from "../helpers/axios";
import Comment from "./Comment";

function Post(props) {
  console.log(props)
  const comments = useSWR(`/post/8c17ed71-7b19-4f98-b182-f355f4afe569/comment/`, fetcher, {
    refreshInterval: 20000
})
  console.log(props);
  console.log(comments)
  const user = getUser();
  const [showChildren, setShowChildren] = useState(true);
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handledecrement() {
    setCount(count - 1);
  }

  return (
    <>
      <div className="flex flex-col relative w-[90%] m-[30px] pl-[20px] h-[200px] border-1 shadow-xl rounded-[20px]">
        <div className="flex items-end">
          <img
            className="bg-white mt-[20px] border-blue-600 rounded-[100px]  border-[2px] w-[50px] h-[50px]"
            src={user.avatar}
            alt=""
          />
          <p className="ml-[10px]">{props.post.author.username}</p>
        </div>
        <img
          className=" absolute right-[10px] top-6 w-[20px] h-[20px]"
          src="/dots.png"
          alt=""
        />
        <div className="mt-[10px]">
          <p>{props.post.body}</p>
        </div>
        <div className="flex items-center justify-between gap-1 mt-[-10px] mb-2">
          <div className="flex gap-1 items-center">
            <img className="w-[20px] h-[20px]" src="/like (1).png" alt="" />
            <span>{count} like</span>
          </div>
          <div>
            <span className="mr-4 underline text-blue-500">0 comments</span>
          </div>
        </div>
        <div className="flex justify-start gap-10">
          <div className="flex gap-1">
            <button onClick={() => setShowChildren(!showChildren)}>
              {showChildren ? (
                <img
                  className="w-[20px] h-[20px]"
                  src="/like.png"
                  alt="icon"
                  onClick={handleIncrement}
                />
              ) : (
                <img
                  className="w-[20px] h-[20px]"
                  src="/thumb-up.png"
                  alt="icon"
                  onClick={handledecrement}
                />
              )}
            </button>
            <span>Like</span>
          </div>
          <div className="flex items-center gap-1">
            <button onClick={() => setShow(!show)}>
              <img
                className="w-[20px] h-[20px]"
                src="/bubble-chat.png"
                alt=""
              />
            </button>
            <span>Comment</span>
          </div>
        </div>
      </div>
      <div>
        {show ? (
          <div className="">
            <CreateComment post={props.post}/>
            {comments.data?.map((post, index) => (
              <Comment key={index} post={post} refresh={comments.mutate} />
            ))}
          </div>
        ) : (
          <span></span>
        )}
      </div>
    </>
  );
}

export default Post;
