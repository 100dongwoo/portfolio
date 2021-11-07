import styled from "styled-components";

export const Download = styled.a`
  text-decoration: none;
  color: black;
  @media only screen and (max-width: 1024px) {
    font-size: 16px;
  }
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
export const Title = styled.label`
  font-size: 32px;
  font-weight: 700;
`;
export const ContectBox = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  margin: 16px 0px;
  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const LeftBox = styled.div`
  max-width: 60%;
  font-size: 20px;
  text-align: center;
  @media only screen and (max-width: 1024px) {
    max-width: 100%;
    font-size: 16px;
    margin-bottom: 12px;
  }
`;
export const Resume = styled.div`
  background-color: aquamarine;
  padding: 8px 16px;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`;
