import styled from "styled-components";
export const Container = styled.div`
  width: max-content;
  padding: 8px 16px;
  height: 120px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 6px;
  border-radius: 8px;
  @media only screen and (max-width: 720px) {
    width: max-content;
    height: 100px;
  }
`;
export const Icon = styled.div`
  font-size: 80px;
  @media only screen and (max-width: 720px) {
    font-size: 60px;
  }
`;
export const Name = styled.label`
  font-size: 18px;
`;
