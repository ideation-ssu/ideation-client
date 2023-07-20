import React, { ChangeEvent } from "react";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";

import { Input, PasswordIcon } from "./styles";

function PasswordInputBox({
  placeHolder,
  text,
  setText,
}: {
  placeHolder: string;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}): React.ReactElement {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <Input
      placeholder={placeHolder}
      type={showPassword ? "text" : "password"}
      value={text}
      onChange={handleChange}
      endAdornment={
        text.length > 0 && (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              edge="end"
            >
              <PasswordIcon show={showPassword} />
            </IconButton>
          </InputAdornment>
        )
      }
    ></Input>
  );
}

export default PasswordInputBox;
