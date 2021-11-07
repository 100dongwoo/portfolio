import React, { useState } from 'react';
import Mobile from './mobile/index';
import Web from './web/index';
import {
    Title,
    Container,
    MenuIcon,
    MobileNav,
    WebNav,
    Navbar,
} from './styles';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const handleLogoClick = () => {
        window.scrollTo(0, 0);
    };
    window.onscroll = function () {
        setIsOpen(false);
    };
    return (
        <Container>
            <Title onClick={handleLogoClick}>BDW Portfolio</Title>

            <Navbar>
                <WebNav>
                    <Web />
                </WebNav>
                <MobileNav>
                    <div onClick={() => setIsOpen(!isOpen)}>
                        <MenuIcon className="fi-rr-apps" />
                    </div>
                    {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
                </MobileNav>
            </Navbar>
        </Container>
    );
}

// const Container = styled.div`
//   // font-size: ${(props) => props.theme.fontSizes.xxxl};
//   // color: ${(props) => props.theme.colors.gray_1};
// `;

export default Header;
