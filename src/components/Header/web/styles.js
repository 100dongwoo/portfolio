import styled from 'styled-components';
export const Container = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
`;
export const WebOption = styled.div`
    font-size: 20px;
    margin-right: 16px;
    font-weight: 700;
`;
export const LinkBox = styled.a`
    text-decoration: none;
    color: ${(props) => props.theme.colors.font_color};
    display: flex;
    align-items: center;
`;
export const Icon = styled.i`
    display: flex;
    align-items: center;
    margin-right: 4px;
`;
