import React, { PropsWithChildren } from "react";
import Nav from "./components/Nav";
import Extra from "./components/Extra";
import Menue from "./components/Menu";

const Wrapper = (props: PropsWithChildren<any>) => {
    return (
        <div>

            <Extra />

            <Nav />

            <div className="container-fluid">
                <div className="row">

                    <Menue />

                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        {props.children}
                    </main>
                </div>

            </div>
        </div>
    );
};

export default Wrapper;