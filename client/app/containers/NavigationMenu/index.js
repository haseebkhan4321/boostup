/**
 *
 * NavigationMenu
 *
 */

import React from "react";

import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { Container } from "reactstrap";
import actions from "../../actions";

import Button from "../../components/Common/Button";
import { CloseIcon } from "../../components/Common/Icon";
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

class NavigationMenu extends React.PureComponent {
  render() {
    const { history, authenticated, isMenuOpen, categories, toggleMenu, user, signOut } = this.props;

    const handleCategoryClick = () => {
      this.props.toggleMenu();
    };

    return (
      <div className="navigation-menu">
        <div className="menu-header">
          {isMenuOpen && (
            <Button borderless variant="empty" ariaLabel="close the menu" icon={<CloseIcon />} onClick={toggleMenu} />
          )}
        </div>
        <div className="menu-body">
          <Container>
            <h3 className="menu-title">Shop By Category</h3>
            {authenticated ? (
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav>
                  {user.firstName ? user.firstName : "Welcome"}
                  <span className="fa fa-chevron-down dropdown-caret"></span>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem
                    onClick={() => {
                      toggleMenu();
                      history.push("/dashboard");
                    }}>
                    Dashboard
                  </DropdownItem>
                  <DropdownItem
                    onClick={() => {
                      toggleMenu();
                      signOut();
                    }}>
                    Sign Out{" "}
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            ) : (
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav>
                  Welcome!
                  <span className="fa fa-chevron-down dropdown-caret"></span>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem
                    onClick={() => {
                      toggleMenu();
                      history.push("/login");
                    }}>
                    Login
                  </DropdownItem>
                  <DropdownItem
                    onClick={() => {
                      toggleMenu();
                      history.push("/register");
                    }}>
                    Sign Up
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            )}
            <nav role="navigation">
              <ul className="menu-list">
                {categories.map((link, index) => (
                  <li key={index} className="menu-item">
                    <NavLink
                      onClick={handleCategoryClick}
                      to={"/shop/category/" + link.slug}
                      activeClassName="active-link"
                      exact>
                      {link.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </Container>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.account.user,
    authenticated: state.authentication.authenticated,
    isMenuOpen: state.navigation.isMenuOpen,
    categories: state.category.storeCategories,
  };
};

export default connect(mapStateToProps, actions)(NavigationMenu);
