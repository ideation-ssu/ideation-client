import React, { Fragment, ReactNode } from "react";
import Menu from "@mui/material/Menu";

import Driver from "@/components/Atoms/Driver";
import RoundButton from "@/components/Atoms/RoundButton";

import { StyledButton, StyledMenuItem } from "./styles";

function MenuDrop({
  menuText,
  menuIcon,
  options,
}: {
  menuText?: string;
  menuIcon?: ReactNode;
  options: { label: string; onClick: () => void }[];
}): React.ReactElement {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {menuIcon ? (
        <StyledButton onClick={handleClick} startIcon={menuIcon}>
          {menuText}
        </StyledButton>
      ) : (
        <RoundButton
          text={menuText ? menuText : ""}
          isFilled={true}
          isMainClr={false}
          onClick={handleClick}
        />
      )}
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {options.map((menu, index) => [
          <StyledMenuItem
            key={index}
            onClick={() => {
              menu.onClick();
              handleClose();
            }}
          >
            {menu.label}
          </StyledMenuItem>,
          options.length - 1 !== index && <Driver key={`driver-${index}`} />,
        ])}
      </Menu>
    </>
  );
}

export default MenuDrop;

export const MenuItem = () => {};
