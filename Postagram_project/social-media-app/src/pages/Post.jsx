import { useState } from "react";
import { getUser } from "../hooks/user.actions";

function Post(props) {
  console.log(props)
  const user = getUser();
  const [showChildren, setShowChildren] = useState(true);
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handledecrement() {
    setCount(count - 1);
  }

  return (
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
        src="dots.png"
        alt=""
      />
      <div className="mt-[10px]">
        <p>{props.post.body}</p>
      </div>
      <div className="flex items-center gap-1 mt-[-10px] mb-2">
        <img className="w-[20px] h-[20px]" src="like (1).png" alt="" />
        <span>{count} like</span>
      </div>
      <div className="flex justify-start gap-10">
        <div className="flex gap-1">
          <button onClick={() => setShowChildren(!showChildren)}>
            {showChildren ? ( <img className="w-[20px] h-[20px]" src="like.png" alt="icon" 
            onClick={handleIncrement}/> ) : ( <img className="w-[20px] h-[20px]" src="thumb-up.png" alt="icon"  onClick={handledecrement}/> 
            )}
          </button>
          <span>Like</span>
        </div>
        <div className="flex items-center gap-1">
          <img className="w-[20px] h-[20px]" src="bubble-chat.png" alt="" /> 
          <span>Comment</span>
        </div>
      </div>
    </div>
  );
}

export default Post;
