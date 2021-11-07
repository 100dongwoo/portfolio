import styled from "styled-components";

export const ProjectPost = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 16px 0px;
  padding: 8px 0px;
  @media only screen and (max-width: 720px) {
    flex-direction: column-reverse;
  }
`;
export const ProjectInfor = styled.div`
  margin-right: 24px;
  @media only screen and (max-width: 720px) {
    margin-left: 0px;
    margin-top: 12px;
  }
`;
export const Title = styled.label`
  font-size: 20px;
  font-weight: 600;
`;
export const ProjectLinks = styled.div`
  margin-top: 6px;
  display: flex;
`;
export const Demo = styled.a`
  text-decoration: none;
  color: black;
`;
export const DemoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: max-content;
  background-color: aquamarine;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 16px;
  margin-right: 6px;
`;
export const ProjectTags = styled.div`
  display: flex;
  max-width: 60%;
  flex-wrap: wrap;
  @media only screen and (max-width: 720px) {
    max-width: 100%;
  }
`;
export const ProjectStack = styled.label`
  padding: 4px 8px;
  background-color: aquamarine;
  border-radius: 4px;
  margin-right: 6px;
  margin-bottom: 4px;
`;
export const ProjectImages = styled.img`
  width: 40%;
  @media only screen and (max-width: 720px) {
    width: 70%;
  }
`;
