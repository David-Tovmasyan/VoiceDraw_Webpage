// this file is created for using SASS/SCSS globally; 
// styles/global.scss
import '../styles/global.scss';
import '../styles/Header.scss';
import '../styles/Footer.scss';
import '../styles/About.scss';

export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
       
}