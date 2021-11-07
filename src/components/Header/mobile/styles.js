import styled from 'styled-components';

export const Container = styled.div`
    background-color: ${(props) => props.theme.colors.bgColor};
    height: 100vh;
    width: 60vw;
    right: 0px;
    position: absolute;
    padding: 18px 12px;
    top: -6px;
    display: flex;
    flex-direction: column;

    flex: 1;
`;
export const CloseIcon = styled.i`
    display: flex;
    justify-content: flex-end;
    font-size: 24px;
`;
export const MobileOptionBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-top: 24px;
    justify-content: center;
    align-items: center;
    height: 100%;
`;
export const MobileOption = styled.div`
    font-size: 24px;
    margin: 12px 0px;
    display: flex;
`;
export const LinkOption = styled.a`
    text-decoration: none;
    color: black;
    display: flex;
`;
