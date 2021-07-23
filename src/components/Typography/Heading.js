import React, { PropsWithoutRef, ReactNode } from "react";
import styled from "styled-components";
// @ts-ignore
import { Heading as _Heading } from "@wigxel/react-components/lib/typography";

export const Heading = styled(_Heading)`
  color: ${({ theme }) => theme.colors._11};
`;

export const H1 = (props) => <Heading {...props} as="h1" $fontSize="43px" />;

export const H2 = (props) => <Heading {...props} as="h2" $fontSize="35px" />;

export const H3 = (props) => <Heading {...props} as="h3" $fontSize="25px" />;

export const H4 = (props) => <Heading {...props} as="h4" $fontSize="18px" />;

export const HeadingGroup = (props) => (
  <hgroup className={props.className}>
    <H3 bold>{props.heading}</H3>
    <p className="text-sm text-_11">{props.subHeading}</p>
  </hgroup>
);
