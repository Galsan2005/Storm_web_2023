import React from "react";
async function Home() {
  // const result = await fetch("http://127.0.0.1:8000/api/post/");
  // const data = await result.json();

  // console.log(data);
  return (
    <div>
      <h1>Profile</h1>
      {/* {data ? <div>Loading</div> : data.forEach((d) => {
        return (<div>
                {d.id}
        </div>)
      })} */}
    </div>
  );
}
export default Home;
