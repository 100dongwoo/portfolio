import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const IconBox = styled.div`
  padding: 6px;
  cursor: pointer;
  margin: 6px;
`;
export const SocialIcon = styled.img`
  height: 40px;
  @media only screen and (max-width: 1024px) {
    height: 32px;
  }
`;
