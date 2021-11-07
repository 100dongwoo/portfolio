import React from "react";
import { SkillsData } from "../../../data/skills";
import SkillCard from "../skillCard/skillCard";
import Separator from "../../common/separator";
import { Container, SkillBox, SkillName, SkillsList, Subtitle } from "./styles";
function Skills() {
  const data = SkillsData;
  return (
    <Container className="skills">
      <Separator />
      <Subtitle>Skills</Subtitle>
      <div>
        {data.map((item) => {
          return (
            <SkillBox>
              <SkillName>{item.type}</SkillName>
              <SkillsList>
                {item.list.map((skill) => {
                  return <SkillCard skill={skill} />;
                })}
              </SkillsList>
            </SkillBox>
          );
        })}
      </div>
    </Container>
  );
}

export default Skills;
