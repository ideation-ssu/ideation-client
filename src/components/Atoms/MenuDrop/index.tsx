import React, { Dispatch, ReactNode, SetStateAction } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { StyledButton } from "./styles";

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
      <StyledButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        startIcon={menuIcon}
      >
        {menuText}
      </StyledButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {options.map((menu, index) => {
          return (
            <MenuItem
              key={index}
              onClick={() => {
                menu.onClick();
                handleClose();
              }}
            >
              {menu.label}
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
}

export default MenuDrop;
