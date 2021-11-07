import React from "react";
import { SocialData } from "../../../data/social";
import { Container, IconBox, SocialIcon } from "./styles";
function SocialContact() {
  const data = SocialData;
  return (
    <Container>
      {data.map((item, index) => {
        return (
          <a href={item.link} key={index}>
            <IconBox>
              <SocialIcon
                src={item.icon}
                className="social-icon"
                alt={"images"}
              />
            </IconBox>
          </a>
        );
      })}
    </Container>
  );
}

export default SocialContact;
