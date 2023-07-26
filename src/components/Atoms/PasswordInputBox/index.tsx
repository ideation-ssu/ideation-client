import React, { ChangeEvent } from "react";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";

import ErrorMsg from "@/components/Atoms/ErrorMsg";

import { Container, PasswordIcon, StyledInput } from "./styles";

function InputBox({
  placeHolder,
  text,
  setText,
  errText,
}: {
  placeHolder: string;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  errText?: string;
}): React.ReactElement {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <Container>
      <StyledInput
        placeholder={placeHolder}
        type={showPassword ? "text" : "password"}
        autoComplete={"new-password"}
        value={text}
        onChange={handleChange}
        error={!!errText}
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
      />
      {errText && <ErrorMsg errText={errText} />}
    </Container>
  );
}

export default InputBox;
