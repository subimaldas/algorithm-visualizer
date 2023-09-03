import React from "react";
import styled from "styled-components";
import { AiFillGithub } from "react-icons/ai";

const FooterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: -40px;
  width: 100%;
`;

export function Footer() {
  return (
    <FooterDiv>
      ©2023 All Rights Reserved&nbsp;<a href="https://github.com/subimaldas/" >Subimal Das</a>
      {/* <a href="" target="_blank"><AiFillGithub style={{ fontSize: "1rem" }} /></a> */}
      
    </FooterDiv>
  );
}
