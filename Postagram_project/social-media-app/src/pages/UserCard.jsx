function UserCard(props) {
  const { user, id } = props;
  // console.log("user card", user.avatar, id);

  return (
    <div className="mt-[35px]">
      <ul className="flex flex-col gap-20">
        <li className="flex relative gap-2">
          <img
            className="bg-white rounded-[100px]  border-[2px] w-[50px] border-blue-600 h-[50px]"
            src={user.avatar}
            alt=""
          />
          <span className="font-medium">{user.username}</span>
          <div className="flex justify-center items-center w-[100px] bg-blue-600 h-[35px] absolute top-8 left-[60px] rounded-[6px]">
            <a href={`/profile/${user.id}`} className="text-white no-underline">View profile</a>
          </div>
        </li>
      </ul>
      <span></span>
      <button></button>
    </div>
  );
}

export default UserCard;
