import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'bootstrap/dist/js/bootstrap.bundle.js'
import {HelmetProvider} from "react-helmet-async";
import {LanguageProvider} from "./utils/lang/LangContext.jsx";
const helmetContext = {};
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <LanguageProvider>
            <HelmetProvider context={helmetContext}>
                <App/>
            </HelmetProvider>
        </LanguageProvider>
    </StrictMode>,
)
