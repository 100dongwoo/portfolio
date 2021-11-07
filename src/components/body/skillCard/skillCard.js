import React from "react";
import { Container, Icon, Name } from "./styles";
function SkillCard({ skill }) {
  return (
    <Container>
      <Icon>{skill.icon}</Icon>
      <Name>{skill.name}</Name>
    </Container>
  );
}

export default SkillCard;
