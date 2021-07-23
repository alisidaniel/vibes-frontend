import React from "react";
import { RefreshCcw } from "react-feather";
import styled, { css } from "styled-components";

const RefreshIcon = styled(RefreshCcw)`
  animation: rotate 1s ease-in-out infinite paused forwards 0s;

  ${(a) =>
    a.loading &&
    css`
      animation-play-state: running;
    `}

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
      opacity: 1;
    }
    50% {
      opacity: 0.3;
    }
    100% {
      opacity: 1;
      transform: rotate(360deg);
    }
  }
`;

export default function RefreshButton(props) {
  return (
    <button
      {...props}
      className="text-xs flex border border-gray-200 items-center px-4 py-2 rounded-lg"
    >
      <RefreshIcon size={16} loading={props.loading} />
      <span className="pl-4">Refresh</span>
    </button>
  );
}
