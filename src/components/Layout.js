import React from "react";
import { Footer, Link } from "./";


import name from '../img/nameVDB.png'
// import '../css/layout.css'


const Header = () => (
    <div className="row">
        <div className="col-12">
            <div className="">
                <Link to="/" hover={true}>
                    <img src={name} id="name" />
                </Link>
            </div>
        </div>
    </div>
);

export default ({ children }) => (
    <div className="narrowPanel">
        <Header />
        {children}
        <div className="col-2 mx-auto mt-5" style={{ borderTop: "2px solid black" }} />
        <Footer />
    </div>
);
