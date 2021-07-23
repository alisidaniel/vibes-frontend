import styled, { css } from "styled-components";
import { Button as _Button } from "@wigxel/react-components/lib/buttons";

const Button = styled(_Button)`
  font-size: 1rem;

  ${(a) =>
    a.white &&
    css`
      background-color: white;
      color: ${(a) => a.theme.colors.primary};
    `}

  ${(a) =>
    a.shadow &&
    css`
      box-shadow: 0 3px 3px rgba(0, 0, 0, 0.16);
    `}

  ${(a) =>
    a.rounded &&
    css`
      border-radius: 999px;
    `}

  ${(a) =>
    a.small &&
    css`
      font-size: 1rem;
      padding: 0.3rem 1rem;
    `}
`;

export default Button;
