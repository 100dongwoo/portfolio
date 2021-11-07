import React from 'react';
import { SkillsData } from '../../../data/skills';
import SkillCard from '../skillCard/skillCard';
import Separator from '../../common/separator';
import { Container, SkillBox, SkillName, SkillsList, Subtitle } from './styles';
function Skills() {
    const data = SkillsData;
    return (
        <Container className="skills">
            <Separator />
            <Subtitle>Skills</Subtitle>
            <div>
                {data.map((item, index) => {
                    return (
                        <SkillBox key={index}>
                            <SkillName>{item.type}</SkillName>
                            <SkillsList>
                                {item.list.map((skill, index) => {
                                    return (
                                        <SkillCard skill={skill} key={index} />
                                    );
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
