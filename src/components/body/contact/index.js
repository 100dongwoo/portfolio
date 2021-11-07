import React from 'react';
import SocialContact from '../../common/social-contact/index';
import Separator from '../../common/separator/index';
import {
    Container,
    Title,
    ContectBox,
    LeftBox,
    Resume,
    Download,
} from './styles';

function Contact() {
    return (
        <Container>
            <Separator />
            <Title>Contact</Title>
            <ContectBox>
                <LeftBox>
                    {/*<p>필요시 언제든지 연락바랍니다</p>*/}
                    <SocialContact />
                </LeftBox>
                <Resume>
                    <Download
                        target="_blank"
                        rel="noopener noreferrer"
                        href={'https://programmers.co.kr/pr/qorehddn123_9036'}
                    >
                        <i className="fi-rr-cloud-download download-icon" />
                        &nbsp; 이력서 링크
                    </Download>
                </Resume>
            </ContectBox>
        </Container>
    );
}
export default Contact;
