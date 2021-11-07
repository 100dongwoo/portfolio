import React from 'react';
import {
    Container,
    Image,
    InformationBox,
    Type,
    WorkDesc,
    Link,
} from './styles';
function WorkCard({ item }) {
    return (
        <Container>
            <Image src={item.Image} />
            <InformationBox>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        width: '100%',
                        justifyContent: 'space-between',
                    }}
                >
                    <label>{item.company}</label>
                    {item.type && <Type>({item?.type})</Type>}
                </div>
                <div style={{ color: 'gray' }}>
                    <label>{item.date}</label> ~ <label>{item.dateEnd}</label>
                </div>
                <WorkDesc>
                    <p>{item.work}</p>
                </WorkDesc>
                {item.link && (
                    <Link
                        style={{ textDecoration: 'none' }}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        링크
                    </Link>
                )}
            </InformationBox>
        </Container>
    );
}

export default WorkCard;
