import styled from 'styled-components';
export const Container = styled.div`
    padding-bottom: 48px;
`;
export const TopContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media only screen and (max-width: 720px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;
export const ViewCount = styled.p`
    margin-bottom: 0;
    font-weight: bold;
    font-size: 1rem;
    color: ${(props) => props.theme.colors.viewCount};
`;
export const RightContainer = styled.div`
    width: 300px;
    height: 300px;
    @media only screen and (max-width: 720px) {
        margin-top: 1.5rem;
        margin-bottom: 0.5rem;
        width: 280px;
        height: 280px;
    }
`;
export const InformationBox = styled.div`
    font-size: 24px;
    font-weight: 500;
    line-height: 48px;
    @media only screen and (max-width: 720px) {
        font-size: 20px;
    }
`;
export const Name = styled.span`
    font-size: 32px;
    //color: blue;
    color: ${(props) => props.theme.colors.name};
    @media only screen and (max-width: 720px) {
        font-size: 26px;
    }
`;
export const Image = styled.img`
    height: 420px;
    @media only screen and (max-width: 720px) {
        height: 280px;
    }
`;
