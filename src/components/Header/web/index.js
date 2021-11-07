import React from "react";
import { Container, LinkBox, WebOption, Icon } from "./styles";

function Web() {
  return (
    <Container>
      <WebOption>
        <LinkBox href="#projects">
          <Icon className="fi-rr-edit-alt option-icon" />
          Projects
        </LinkBox>
      </WebOption>
      <WebOption>
        <LinkBox href="#skills">
          <Icon className="fi-rr-laptop option-icon" />
          Skills
        </LinkBox>
      </WebOption>
      <WebOption>
        <LinkBox href="#work">
          <Icon className="fi-rr-briefcase option-icon" />
          Work
        </LinkBox>
      </WebOption>
      <WebOption>
        <LinkBox href="#contact">
          <Icon className="fi-rr-user option-icon" />
          Contact
        </LinkBox>
      </WebOption>
    </Container>
  );
}

export default Web;
