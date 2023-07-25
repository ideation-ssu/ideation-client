import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";

export const Container = styled("div")`
  width: 100%;

  span {
    padding: 0;
  }
`;

export const StyledSwitch = styled(Switch)`
  width: 28px;
  height: 16px;
  padding: 0;
  display: flex;

  span {
    padding: 0;
    background: none;
  }

  .MuiSwitch-root {
    padding: 0;
  }

  .MuiTouchRipple-root {
    background-color: white;
  }

  &:active {
    & .MuiSwitch-thumb {
      width: 15px;
    }
    & .MuiSwitch-switchBase.Mui-checked {
      transform: translateX(9px);
    }
  }

  & .MuiSwitch-switchBase {
    margin: 2px;

    &.Mui-checked {
      transform: translateX(12px);

      & + .MuiSwitch-track {
        opacity: 1;
        background-color: #713edc;
      }
    }
  }

  & .MuiSwitch-thumb {
    box-shadow: 0 2px 4px 0 rgb(0 35 11 / 20%);
    width: 12px;
    height: 12px;
    border-radius: 6px;
  }

  & .MuiSwitch-track {
    border-radius: 8px;
    opacity: 1;
    box-sizing: border-box;
    background-color: #d9d9d9;
  }
`;
