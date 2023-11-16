import React from "react";

const userLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <div className="bg-gray-300 mr-5 p-5">userSidebar</div>
      <div>{children}</div>
    </div>
  );
};

export default userLayout;
