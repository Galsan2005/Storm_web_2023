import { getUser } from "../hooks/user.actions";

function Comment(props) {
  console.log("2222222")
  console.log(props);
  const user = getUser();
  return (
    <>
      <div className="flex flex-col bg-gray-100 relative w-[90%] mx-[30px] mt-[10px] pl-[20px] border-1 rounded-[10px]">
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
      </div>
    </>
  );
}

export default Comment;