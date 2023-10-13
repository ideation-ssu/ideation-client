import React, { useEffect, useState } from "react";
import Menu from "@mui/material/Menu";

import { INoti } from "@/interfaces/notification";
import { useAuth } from "@/utils/auth";

import { NotiIcon } from "./styles";

function Notification(): React.ReactElement {
  const { axios } = useAuth();
  const [showNoti, setShowNoti] = useState<boolean>(false);
  const [notiList, setNotiList] = useState<INoti>([]);

  const getNotiList = () => {
    axios.get(`${process.env.NEXT_PUBLIC_BASEURL}/notification`).then((res) => {
      setNotiList(res.data);
      console.log(res.data);
    });
  };

  const handleNoti = () => {
    setNotiList(true);
  };

  useEffect(() => {
    getNotiList();
  }, []);

  return (
    <>
      <NotiIcon />
    </>
  );
}

export default Notification;
