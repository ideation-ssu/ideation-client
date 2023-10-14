import React, { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import dayjs from "dayjs";

import Driver from "@/components/Atoms/Driver";
import { INoti, NotiType } from "@/interfaces/notification";
import { useAuth } from "@/utils/auth";

import {
  Content,
  DateWrap,
  FeedbackIcon,
  IconWrap,
  IdeaIcon,
  Inner,
  MetionIcon,
  NotiIcon,
  ProjectIcon,
  StyledMenu,
  StyledMenuItem,
  VoteIcon,
} from "./styles";

function Notification({
  projectName,
  projectColor,
}: {
  projectName: string;
  projectColor: string;
}): React.ReactElement {
  const { axios } = useAuth();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [notiList, setNotiList] = useState<INoti[]>([]);

  const getNotiList = () => {
    axios.get(`${process.env.NEXT_PUBLIC_BASEURL}/notification`).then((res) => {
      setNotiList(res.data.notifications);
      console.log(res.data.notifications);
    });
  };

  useEffect(() => {
    getNotiList();
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNoti = (notificationId: number) => {
    const data = { notificationId: notificationId };
    axios
      .patch(`${process.env.NEXT_PUBLIC_BASEURL}/notification/read`, data)
      .then((res) => {
        getNotiList();
      });
  };

  return (
    <>
      <IconButton aria-label="delete" size="small" onClick={handleClick}>
        <NotiIcon />
      </IconButton>
      <StyledMenu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {notiList.map((menu, index) => {
          const menuContent: [JSX.Element, string, string, string, string] =
            getTitle({ type: menu.type, typeId: menu.typeId });
          const date = dayjs(menu.createdAt).format("YYYY-MM-DD");
          return (
            <div key={index}>
              <StyledMenuItem
                onClick={() => {
                  handleClose();
                  handleNoti(menu.notificationId);
                }}
                read={menu.isRead ? "true" : "false"}
              >
                <Inner>
                  <IconWrap color={projectColor}>{menuContent[0]}</IconWrap>
                  <Content color={projectColor}>
                    <span className="sub-title">{projectName}</span>
                    <span className="title">
                      <span>{menuContent[1]}</span>
                      <span className="highlight">{menuContent[2]}</span>
                      <span>{menuContent[3]}</span>
                    </span>
                  </Content>
                  <DateWrap>
                    <span>{date}</span>
                  </DateWrap>
                </Inner>
              </StyledMenuItem>
              {notiList.length - 1 !== index && (
                <Driver key={`driver-${index}`} />
              )}
            </div>
          );
        })}
      </StyledMenu>
    </>
  );
}

export default Notification;

function getTitle({
  type,
  typeId,
}: {
  type: string;
  typeId: number;
}): [JSX.Element, string, string, string, string] {
  switch (type) {
    case NotiType.PROJECT_INVITED:
      return [
        <ProjectIcon key="project" />,
        "새로운",
        "프로젝트",
        "에 초대되었습니다.",
        `/idea/${typeId}`,
      ];
    case NotiType.PROJECT_CREATED:
      return [
        <ProjectIcon key="project" />,
        "새로운",
        "프로젝트",
        "가 등록되었습니다.",
        `/idea/${typeId}`,
      ];
    case NotiType.PROJECT_DONE:
      return [
        <ProjectIcon key="project" />,
        "",
        "프로젝트",
        "가 종료되었습니다.",
        `/main`,
      ];
    case NotiType.VOTE_CREATED:
      return [
        <VoteIcon key="vote" />,
        "새로운",
        "투표",
        "가 등록되었습니다.",
        `/idea/${typeId}?tab=4`,
      ];
    case NotiType.VOTE_DONE:
      return [
        <VoteIcon key="vote" />,
        "",
        "투표",
        "가 종료되었습니다.",
        `/idea/${typeId}?tab=4`,
      ];
    case NotiType.COMMENT_MENTIONED:
      return [
        <MetionIcon key="mention" />,
        "내가",
        "멘션",
        "되었습니다.",
        `/idea/${typeId}?tab=4`,
      ];
    case NotiType.FEEDBACK_CREATED:
      return [
        <FeedbackIcon key="feedback" />,
        "새로운",
        "피드백",
        "이 등록되었습니다.",
        `/idea/${typeId}?tab=4`,
      ];
    case NotiType.COMMENT_CREATED:
      return [
        <FeedbackIcon key="feedback" />,
        "새로운",
        "댓글",
        "이 등록되었습니다.",
        `/idea/${typeId}?tab=4`,
      ];
    case NotiType.IDEA_CREATED:
      return [
        <IdeaIcon key="feedback" />,
        "새로운",
        "아이디어",
        "가 등록되었습니다.",
        `/idea/${typeId}`,
      ];
    case NotiType.IDEA_RELATED:
      return [
        <IdeaIcon key="idea" />,
        "",
        "연관자",
        "에 추가되었습니다.",
        `/idea/${typeId}`,
      ];
    case NotiType.BRAINSTORMING_CREATED:
      return [
        <IdeaIcon key="idea" />,
        "새로운",
        "브레인스토밍",
        "이 등록되었습니다.",
        `/idea/${typeId}?tab=2`,
      ];
    case NotiType.JOINER_JOINED:
      return [
        <ProjectIcon key="project" />,
        "새로운",
        "팀원",
        "이 추가되었습니다.",
        `/idea/${typeId}?tab=3`,
      ];
    default:
      return [<div key={"none"}></div>, "", "", "", ""];
  }
}
