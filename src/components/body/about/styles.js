import styled from "styled-components";
export const Container = styled.div`
  padding-bottom: 48px;
`;
export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 720px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const InformationBox = styled.div`
  font-size: 24px;
  @media only screen and (max-width: 720px) {
    font-size: 20px;
  }
`;
export const Name = styled.span`
  font-size: 32px;
  color: blue;
  @media only screen and (max-width: 720px) {
    font-size: 26px;
  }
`;
export const Image = styled.img`
  height: 420px;
  @media only screen and (max-width: 720px) {
    height: 28px;
  }
`;
