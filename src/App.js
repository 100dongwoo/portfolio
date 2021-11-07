import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from 'react-router-dom';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import MainPage from './pages/MainPage';
import { dark, light } from './theme';
import { useState } from 'react';

const GlobalStyle = createGlobalStyle`
  
  body {
    background-color: ${(props) => props.theme.colors.bgColor};
    color: ${(props) => props.theme.colors.font_color};
  }
`;

function App() {
    const [isLightThemeMode, setIsLightThemeMode] = useState(true); // 테마 모드 세팅
    const theme = isLightThemeMode ? light : dark; // 테마 환경에 맞는 테마 컬러 가져오기.
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Router>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <MainPage
                                isLightThemeMode={isLightThemeMode}
                                setIsLightThemeMode={setIsLightThemeMode}
                            />
                        }
                    />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;
