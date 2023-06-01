"use client";

import Link from "next/link";
import Avatar from "@mui/material/Avatar";

const UserAvatar = () => {
  return (
    <Link href="/profile">
      <Avatar>EW</Avatar>
    </Link>
  );
};

export default UserAvatar;
