import React from "react";

interface Props {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: Props) => {
  return (
    <div className="flex">
      <aside className="bg-gray-300 mr-5 p-5">AdminSidebar</aside>
      <div>{children}</div>
    </div>
  );
};

export default AdminLayout;
