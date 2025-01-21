import React from "react";
import Sidebar from "./Sidebar";
import UserList from "./UserList";

const CommonPage = () => {
  return (
    <div style={{display:"flex", backgroundColor:'rgba(4, 59, 100, 1)'}}>
      <Sidebar />
      <UserList />
    </div>
  );
};

export default CommonPage;
