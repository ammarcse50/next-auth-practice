import { getServerSession } from "next-auth";
import React from "react";
import { authOption } from "../api/auth/[...nextauth]/route";

const about =async() => {
  const session = await getServerSession(authOption);
   console.log({session});
  return <div>about</div>;
};

export default about;
