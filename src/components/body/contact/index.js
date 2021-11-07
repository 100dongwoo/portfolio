import React from "react";
import SocialContact from "../../common/social-contact/index";
import Separator from "../../common/separator/index";
import {
  Container,
  Title,
  ContectBox,
  LeftBox,
  Resume,
  Download,
} from "./styles";

function Contact() {
  return (
    <Container>
      <Separator />
      <Title>Contact</Title>
      <ContectBox>
        <LeftBox>
          <p>Want to get in touch? Contact me on any of the platform</p>
          <SocialContact />
        </LeftBox>
        <Resume>
          <Download
            download
            href={require("../../../assets/resume.pdf").default}
          >
            <i className="fi-rr-cloud-download download-icon" />
            Download Resume
          </Download>
        </Resume>
      </ContectBox>
    </Container>
  );
}
export default Contact;
