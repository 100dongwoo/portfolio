import React from 'react';
import SocialContact from '../../common/social-contact';
import { Container, Image, InformationBox, Name, TopContainer } from './styles';
function About() {
    return (
        <Container>
            <TopContainer>
                <InformationBox>
                    Hello There 👋, I am <br />
                    <Name>Random Guy</Name>.<br /> I love experimenting with the
                    web.
                </InformationBox>
                <div>
                    <Image
                        src={
                            require('../../../assets/image/coding.png').default
                        }
                    />
                </div>
            </TopContainer>
            <SocialContact />
        </Container>
    );
}

export default About;
