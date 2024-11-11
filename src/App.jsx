import React, {useEffect} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {PublicRoutes} from "./utils/const.jsx";
import Navbar from "./component/navbar/navbar.jsx";
import Footer from "./component/footer/footer.jsx";
import AOS from 'aos';
import 'aos/dist/aos.css';
const App = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <BrowserRouter>
            <Routes>
                {PublicRoutes.map(({Path , Component} , index)=>(
                    <Route key={index} path={Path} element={<><Navbar/><Component/><Footer/></>}/>
                ))}
            </Routes>
        </BrowserRouter>
    );
};

export default App;