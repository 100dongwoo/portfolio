import React, { useEffect, useState } from 'react';
import db from '../../firebase';
import styled from 'styled-components';
import Header from '../../components/Header';
import Body from '../../components/body';
import Footer from '../../components/footer';
import DarkModeToggle from 'react-dark-mode-toggle';
import './css.css';
function MainPage({ setIsLightThemeMode, isLightThemeMode }) {
    const [viewCount, setViewCount] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        db.collection('viewCount')
            .doc('8HXcyqBdNY7o9ijzOZHq')
            .get()
            .then((doc) => {
                db.collection('viewCount')
                    .doc('8HXcyqBdNY7o9ijzOZHq')
                    .update({ viewCount: doc.data().viewCount + 1 });
                setViewCount(doc.data().viewCount);
                setIsLoading(false);
                // console.log(typeof doc.data().viewCount);
            });
    }, []);

    return (
        !isLoading && (
            <>
                <TopContainer>
                    <DarkModeToggle
                        onChange={setIsLightThemeMode}
                        size={80}
                        checked={isLightThemeMode}
                    />
                </TopContainer>
                <Container>
                    <Header />
                    <Body viewCount={viewCount} />
                    <Footer />
                </Container>
            </>
        )
    );
}
export const Container = styled.div`
    scroll-behavior: smooth;
    margin: auto;
    width: 70%;
    display: flex;
    flex-direction: column;
    @media only screen and (max-width: 1024px) {
        width: 90%;
    }
    @media only screen and (max-width: 512px) {
        width: 100%;
    }
`;
export const TopContainer = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    margin-top: 1rem;
`;
export default MainPage;
