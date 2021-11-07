import styled from "styled-components";
export const Container = styled.div`
  padding: 8px;
  width: 45%;
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row-reverse;
  @media only screen and (max-width: 720px) {
    width: 100%;
  }
`;
export const Image = styled.img`
  height: 80px;
`;
export const InformationBox = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;
export const WorkDesc = styled.div`
  text-align: left;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: horizontal;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 80%;
`;
