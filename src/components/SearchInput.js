import React from "react";
import { Search as SearchIcon } from "react-feather";
import styled, { css } from "styled-components";

const ComponentStyle = styled.div`
  padding: 10px 10px;

  ${(a) =>
    a.small &&
    css`
      padding: 5px;
    `}
`;

const SearchInput = (props) => {
  return (
    <ComponentStyle
      small={!!props.small}
      className="inline-flex flex-1 items-center"
    >
      <SearchIcon strokeWidth={2} className="flex-shrink-0 text-blue-300" />
      <input
        type="text"
        value={props.value}
        onChange={(evt) => props.onChange(evt.target.value)}
        className={[
          "flex-1 text-_2 bg-transparent ml-4 outline-none",
          props.className,
        ].join(" ")}
        placeholder={props.placeholder}
      />
    </ComponentStyle>
  );
};

export default SearchInput;
