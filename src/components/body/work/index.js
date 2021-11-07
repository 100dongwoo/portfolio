import React from "react";
import { WorkData } from "../../../data/work";
import WorkCard from "../workCard/workCard";
import Separator from "../../common/separator/index";
import { Container, Title, WorkList } from "./styles";
function Work() {
  const data = WorkData;
  return (
    <Container>
      <Separator />
      <Title>Work</Title>
      <WorkList>
        {data.map((item) => {
          return <WorkCard item={item} />;
        })}
      </WorkList>
    </Container>
  );
}

export default Work;
