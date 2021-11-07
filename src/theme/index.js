import { ViewCount } from '../components/body/about/styles';
import { ProjectStack } from '../components/body/projectCard/styles';

const calcRem = (size) => `${size / 16}rem`;

const fontSizes = {
    small: calcRem(14),
    base: calcRem(16),
    lg: calcRem(18),
    xl: calcRem(20),
    xxl: calcRem(22),
    xxxl: calcRem(24),
    titleSize: calcRem(50),
};

const deviceSizes = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '450px',
    tablet: '768px',
    tabletL: '1024px',
};

export const light = {
    colors: {
        bgColor: '#fff',
        font_color: '#000',
        name: 'blue',
        viewCount: 'purple',
        projectStack: '#000',
        link: '#000',
    },
};
export const dark = {
    colors: {
        bgColor: '#2d333b',
        font_color: '#adbac7',
        name: 'black',
        viewCount: '#aa9e9e',
        projectStack: '#403b3b',
        link: '#04f898',
    },
};

const device = {
    mobileS: `only screen and (max-width: ${deviceSizes.mobileS})`,
    mobileM: `only screen and (max-width: ${deviceSizes.mobileM})`,
    mobileL: `only screen and (max-width: ${deviceSizes.mobileL})`,
    tablet: `only screen and (max-width: ${deviceSizes.tablet})`,
    tabletL: `only screen and (max-width: ${deviceSizes.tabletL})`,
};
const theme = {
    fontSizes,
    deviceSizes,
    device,
};

export default theme;
