import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const Title = styled.label`
  font-size: 24px;
  font-weight: 600;
`;
export const Subtitle = styled.label`
  font-size: 32px;
  font-weight: 700;
`;
export const SkillBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 12px 0px;
  @media only screen and (max-width: 720px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const SkillName = styled.label`
  font-size: 24px;
  font-weight: 600;
`;
export const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 70%;
  justify-content: flex-end;
  @media only screen and (max-width: 720px) {
    max-width: 100%;
    justify-content: center;
  }
`;
