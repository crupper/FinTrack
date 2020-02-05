import React, { Component } from 'react';
import { Col } from "shards-react";
import classNames from 'classnames';
import { Navbar, NavbarBrand } from "shards-react";

import moneyLogo from '../images/moneyLogo.png';
import SideBarItems from './SideBarItems';

class MainSideBar extends Component {
  render() {
    const classes = classNames(
      "main-sidebar",
      "px-0",
      "col-12",
      "open");

    return (
      <Col
        tag="aside"
        className={classes}
        lg={{ size: 2 }}
        md={{ size: 3 }}>
        <div className="main-navbar">
          <Navbar
            className="align-items-stretch bg-white flex-md-nowrap border-bottom p-0"
            type="light" >
            <NavbarBrand
              className="w-100 mr-0"
              href="#"
              style={{ lineHeight: "25px" }}>
              <div className="d-table m-auto">
                <img
                  id="main-logo"
                  className="d-inline-block align-top mr-1"
                  style={{ maxWidth: "25px" }}
                  src={moneyLogo}
                  alt="FinPortfolio" />
                <span className="d-none d-md-inline ml-1">
                  FinPortfolio
                </span>
              </div>
            </NavbarBrand>
          </Navbar>
        </div>
        <SideBarItems />
        {/* <SidebarMainNavbar hideLogoText={this.props.hideLogoText} />
        <SidebarSearch />
        <SidebarNavItems /> */}
      </Col>
    );
  }
}

export default MainSideBar;