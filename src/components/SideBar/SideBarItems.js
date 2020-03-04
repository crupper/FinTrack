import React, { Component } from 'react';
import { Nav } from "shards-react";
import SideBarItem from './SideBarItem';
import LinkIntegration from '../LinkIntegration';

class SideBarItems extends Component {
    render() {
        const sideBaritems = items.map(item => <SideBarItem key={item.id} title={item.title} />);
        return (
            <div className="nav-wrapper">
                <Nav className="nav--no-borders flex-column">
                    {sideBaritems}
                    {/* <br/> */}
                    <LinkIntegration />
                </Nav>
            </div>
        );
    }
}

const items = [
    {
        title: "Overview",
        link: "/",
        id: 1
    },
    {
        title: "Cashflow",
        link: "/",
        id: 2
    },
    {
        title: "Retirement",
        link: "/",
        id: 3
    },
];

export default SideBarItems;