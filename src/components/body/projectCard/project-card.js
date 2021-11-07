import React from 'react';
import {
    ProjectImages,
    ProjectPost,
    ProjectLinks,
    ProjectStack,
    ProjectTags,
    ProjectInfor,
    DemoBox,
    Demo,
    Title,
} from './styles';

function ProjectCard({ project }) {
    return (
        <ProjectPost>
            <ProjectInfor>
                <Title>{project.title}</Title>
                <ProjectLinks>
                    {project.demo && (
                        <Demo
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <DemoBox>
                                <i className="fi-rr-globe" />
                                Demo
                            </DemoBox>
                        </Demo>
                    )}
                    {project.github && (
                        <Demo
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <DemoBox>
                                <i className="devicon-github-original colored" />{' '}
                                GItHub
                            </DemoBox>
                        </Demo>
                    )}
                </ProjectLinks>
                <p>{project.about}</p>
                <ProjectTags>
                    {project.tags.map((tag, index) => {
                        return <ProjectStack key={index}>{tag}</ProjectStack>;
                    })}
                </ProjectTags>
            </ProjectInfor>
            <ProjectImages src={project.image} alt="ProjectImage" />
        </ProjectPost>
    );
}
export default ProjectCard;
