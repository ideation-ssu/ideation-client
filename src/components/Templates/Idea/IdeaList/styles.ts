import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";

export const Container = styled(Grid)`
  width: 100%;
  height: 70vh;
  gap: 25px;
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  margin-left: 0;
  background-color: transparent;
`;

export const CardContainer = styled("div")`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const ProcessCard = styled("div")`
  width: 356px;
  height: 554px;
  padding: 15px;
  border-radius: 5px;
  background-color: #ffffff;
`;

export const StatusTitle = styled("div")`
  height: 23px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;

  &.not_started {
    width: 103px;
    color: #e94e7c;
    background: rgba(233, 78, 124, 0.04);
  }

  &.progress {
    width: 88px;
    color: #f79942;
    background: rgba(245, 161, 83, 0.04);
  }

  &.done {
    width: 57px;
    color: #4fb1f9;
    background: rgba(83, 177, 245, 0.04);
  }
`;
