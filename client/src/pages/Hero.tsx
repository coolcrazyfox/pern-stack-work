import React, { Fragment } from 'react';
import NavBar from "../components/navbar/NavBar";
import Main from "../components/Main";

import TabPage from "./TabPage";
import InputDev from "../components/InputDev";

const Hero = () => {
    return (
        <Fragment>
            <NavBar/>
            <div className="main_container">

               <InputDev/>
                <TabPage/>
            </div>
            {/*<Main/>*/}
        </Fragment>
    );
};

export default Hero;
