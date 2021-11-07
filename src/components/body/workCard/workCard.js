import React from "react";
import { Container, Image, InformationBox, WorkDesc } from "./styles";
function WorkCard({ item }) {
  return (
    <Container>
      <Image src={item.companyLogo} />
      <InformationBox>
        <label>{item.company}</label>
        <div style={{ color: "gray" }}>
          <label>{item.dateJoining}</label>-<label>{item.dateEnd}</label>
        </div>
        <WorkDesc>
          <p>{item.work}</p>
        </WorkDesc>
      </InformationBox>
    </Container>
  );
}

export default WorkCard;
