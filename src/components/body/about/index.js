import React from 'react';
import {
    Container,
    InformationBox,
    Name,
    RightContainer,
    TopContainer,
    ViewCount,
} from './styles';
import './css.css';
function About({ viewCount }) {
    return (
        <Container>
            {/*클린코드, 같이 개발하고 싶은 개발자를 지향하고,*/}
            {/*React, React Native를 주로 사용하는 프론트엔드 개발자입니다.*/}
            <TopContainer>
                <div>
                    <InformationBox>
                        안녕하세요 👋 <br />
                        <Name>백동우</Name> 입니다
                        <br />
                        코딩과 여행을 사랑하는 <br />
                        프론트엔드 개발자입니다 <br />
                    </InformationBox>
                    <ViewCount>
                        조회 수 : {viewCount}
                        <br />
                    </ViewCount>
                </div>
                <RightContainer>
                    <iframe
                        src="https://snapwidget.com/embed/971729"
                        className="snapwidget-widget"
                        frameBorder="0"
                        scrolling="no"
                    />
                </RightContainer>
            </TopContainer>
            {/*<SocialContact />*/}
        </Container>
    );
}

export default About;
