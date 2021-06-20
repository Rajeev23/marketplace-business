import React, { Component, Fragment } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText,
  Button,
} from "reactstrap";
import Link from "next/link";
import * as Icon from "react-feather";

const links = [
  { href: "/aboutus", text: "AboutUs" },
  { href: "/faq", text: "Help" },
  { href: "/missions", text: "Services" },
  { href: "/gallery", text: "Gallery" },
  { href: "/blog", text: "Blogs", className: "btnadd" },
  { href: "/careers", text: "Careers", className: "btnadd" },
  { href: "/contactus", text: "ContactUs" },
];

const createNavItem = ({ href, text, className, indexnav }) => (
  <NavItem className="nav-item-header" key={indexnav}>
    <Link href={href} className={className}>
      <a className="cool-link">{text}</a>
    </Link>
  </NavItem>
);

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      toggle: this.close,
      isOpenModal: false,
      searchClass: false,
    };
    this.toggle = this.toggle.bind(this);
  }
  toggleSearch() {
    this.setState({ searchClass: !this.state.searchClass });
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  onClickHandle = (i) => {
    console.log("onClick");
    this.setState({
      isOpenModal: true,
    });
    // setTimeout(() => {
    //   this.setState({
    //     isOpenModal: false
    //   })
    //   }, 5000);
  };

  close = () => {
    console.log("errtor ");
    this.setState({
      isOpenModal: false,
    });
    // setTimeout(() => {
    //   this.setState({
    //     isOpenModal: true
    //   })
    //   }, 1000);
  };
  render() {
    const { darkMode } = this.props;

    let barClass = ["navbar "];
    if (this.state.searchClass) {
      barClass.push("search-open ");
    }
    return (
      <div style={{ overflow: "hidden" }}>
        {/* <div className="overlay btn-close" /> */}

        <div 
        // className="bg-info" 
        {...{ darkMode }}>
          <Navbar
            className={barClass.join("")}
            // className="navbar-custom"
            color="light"
            light
            expand="md"
            sticky="top"
            style={{ width: "100%" }}
          >
            <NavbarBrand href="/">Rajeev Nayan</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="mr-auto" navbar>
                {links.map(createNavItem)}
              </Nav>

              <NavbarText>{/* <SunMoon {...{darkMode}} />      */}</NavbarText>
            </Collapse>
          </Navbar>
        </div>
        <style global jsx>
          {`
          .bg-light{
            background-color: #fff!important;
          }
            .navbar.navbar-custom {
              // padding: 0rem 1rem!important;
            }
            @media (max-width: 768px) {
              .navbar.navbar-custom {
                padding: 0.5rem 1rem !important;
              }
            }
            .nav-item-header {
              text-decoration: none !important;
              padding-left: 0.7rem;
              padding-right: 0.7rem;
            }
            .nav-item-header a {
              text-decoration: none !important;
              color: #666 !important;
            }
            .nav-item-header a:hover {
              color: #212529 !important;
            }
            @media (max-width: 768px) {
              .nav-item-header {
                padding-top: 0.5rem;
                padding-bottom: 0.5rem;
              }
            }
            .cool-link {
              display: inline-block;
              color: #000;
              text-decoration: none;
            }

            .cool-link::after { 
              content: "";
              display: block;
              width: 0;
              height: 2px;
              background: #C1DEBA;
              transition: width 0.3s;
            }

            .cool-link:hover::after {
              width: 100%;
            }
          `}
        </style>
      </div>
    );
  }
}

export default Header;
