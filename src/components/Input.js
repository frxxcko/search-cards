import styled from "styled-components";
import { t } from "../UI/Theme";
import { forwardRef } from "react";

export const Input = forwardRef(({ setCardName, ...rest }, ref) => {
    const onKeyUp = (e) => {
        if (e.keyCode === 13)
            setCardName(e.target.value);
    }

    return (
        <StyledInput {...rest} onKeyUp={onKeyUp} className="" ref={ref} />
    )
})

const StyledInput = styled.input`
  min-width: 200px;
  height: 36px;
  border: 1px solid ${t.primary};
  border-radius: 4px;
  outline: none;
  box-shadow: ${t.shadow};
  padding-inline-start: 2px;
  `;