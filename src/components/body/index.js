import React from 'react';
import About from './about/index';
import Projects from './projects/index';
import Skills from './skills/index';
import Work from './work/index';
import Contact from './contact/index';
import { Container } from './styles';
function Body({ viewCount }) {
    return (
        <Container>
            <section id="about">
                <About viewCount={viewCount} />
            </section>
            <section id="projects">
                <Projects />
            </section>
            <section id="skills">
                <Skills />
            </section>
            <section id="work">
                <Work />
            </section>
            <section id="contact">
                <Contact />
            </section>
        </Container>
    );
}

export default Body;
