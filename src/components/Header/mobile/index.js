import React from "react";
import {
  Container,
  CloseIcon,
  MobileOption,
  LinkOption,
  MobileOptionBox,
} from "./styles";

function Mobile({ isOpen, setIsOpen }) {
  return (
    <Container>
      <CloseIcon onClick={() => setIsOpen(!isOpen)}>
        <i className="fi-rr-cross-circle" />
      </CloseIcon>
      <MobileOptionBox>
        <MobileOption>
          <LinkOption href="#projects">
            <i className="fi-rr-edit-alt option-icon" />
            Projects
          </LinkOption>
        </MobileOption>
        <MobileOption>
          <LinkOption href="#skills">
            <i className="fi-rr-laptop option-icon" />
            Skills
          </LinkOption>
        </MobileOption>
        <MobileOption>
          <LinkOption href="#work">
            {" "}
            <i className="fi-rr-briefcase option-icon" />
            Work
          </LinkOption>
        </MobileOption>
        <MobileOption>
          <LinkOption href="#contact">
            <i className="fi-rr-user option-icon" />
            Contact
          </LinkOption>
        </MobileOption>
      </MobileOptionBox>
    </Container>
  );
}
export default Mobile;
