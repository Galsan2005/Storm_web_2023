import UserCard from "./UserCard";
import useSWR from 'swr';
import { fetcher } from "../helpers/axios";

function OtherProfile() {
  const users = useSWR(`/user/?author_public_id=8627e5187a1d42468c13d2205be84991`, fetcher, {
    refreshInterval: 20000
  })
  console.log("========")
  console.log(users.data)
  return (
    <div className="w-[90%] h-[100%] m-[30px] border-1 shadow-xl rounded-[20px]">
      <p className="pt-[25px] text-[20px] text-center">Other people</p>
      {
        users.data?.map((user, index) => <UserCard key={index} id={index} user={user} refresh={users.mutate} />)
      }
    </div>
  );
}

export default OtherProfile;
