import React, { Component } from 'react';
import classNames from 'classnames';
import { Container, Navbar } from "shards-react";
import LinkIntegration from '../LinkIntegration';

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
                        <div style={{width: '90%'}}>
                            {/* Div to take up space */}
                        </div>
                        <div className="float-right">
                            {/* <LinkIntegration /> */}
                        </div>
                    </Navbar>
                </Container>
            </div>
        );
    }
}

export default MainNavbar;