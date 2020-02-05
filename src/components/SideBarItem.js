import React, { Component } from 'react';
import { NavItem, NavLink } from "shards-react";

class SideBarItem extends Component {
    render() {
        return (
            <NavItem>
                <NavLink>
                    {this.props.title}
                </NavLink>
            </NavItem>
        );
    }
}

export default SideBarItem;