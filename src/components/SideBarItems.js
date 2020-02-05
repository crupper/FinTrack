import React, { Component } from 'react';
import { Nav } from "shards-react";
import SideBarItem from './SideBarItem';

class SideBarItems extends Component {
    render() {
        const sideBaritems = items.map(item => <SideBarItem key={item.key} title={item.title} />);
        return (
            <div className="nav-wrapper">
                <Nav className="nav--no-borders flex-column">
                    {sideBaritems}
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