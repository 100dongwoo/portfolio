import React from 'react';
import { WorkData } from '../../../data/work';
import WorkCard from '../workCard/workCard';
import Separator from '../../common/separator/index';
import { Container, Title, WorkList } from './styles';
function Work() {
    const data = WorkData;
    return (
        <Container>
            <Separator />
            <Title>업무 경험</Title>
            <WorkList>
                {data.map((item, index) => {
                    return <WorkCard item={item} key={index} />;
                })}
            </WorkList>
        </Container>
    );
}

export default Work;
