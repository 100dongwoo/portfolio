import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  padding: 12px 12px;
  position: relative;
  align-items: center;
`;
export const Title = styled.h1`
  display: flex;
  font-size: 36px;
  color: blueviolet;
  font-weight: 800;
`;
export const Navbar = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;
export const WebNav = styled.div`
  display: flex;
  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;
export const MobileNav = styled.div`
  display: none;
  @media only screen and (max-width: 1024px) {
    display: flex;
  }
`;
export const MenuIcon = styled.i`
  @media only screen and (max-width: 1024px) {
    font-size: 24px;
  }
`;
