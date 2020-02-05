import React, { Component } from 'react';
import classNames from 'classnames';
import { Container, Navbar } from "shards-react";

class MainNavbar extends Component {
    classes = classNames(
        "main-navbar",
        "bg-white",
        "sticky-top"
    );
    render() {
        return (
            <div className={this.classes}>
                <Container className="p-0">
                    <Navbar type="light" className="align-items-stretch flex-md-nowrap p-0">

                    </Navbar>
                </Container>
            </div>
        );
    }
}
/*
    <div>
    <p>Navbar coming soon!</p>
    </div>
*/

export default MainNavbar;