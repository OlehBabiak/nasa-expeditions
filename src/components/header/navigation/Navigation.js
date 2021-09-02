import React from 'react';
import {logo, urls} from "../../../constants"
import {Link, NavLink} from "react-router-dom";
import {DeskTopMenu, LogoContainer, MobileMenu, NavigationContent} from "../HeaderStyled";
import {Menu, MenuItem} from "@material-ui/core";
import Button from "@material-ui/core/Button";



function Navigation() {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <NavigationContent>
            <Link style={{position: 'relative'}} to='/'>
                <LogoContainer src={logo} alt="Nasa"/>
            </Link>
            <MobileMenu>
                <Button
                    style={{
                        color: 'floralwhite',
                        fontSize: '1em'
                    }}
                    aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                    Open Menu
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    {
                        urls.map(item => (
                            <MenuItem onClick={handleClose}><NavLink style={{margin: 'auto'}} to={item.url} exact>{item.title}</NavLink></MenuItem>
                        ))
                    }
                </Menu>
            </MobileMenu>
            <DeskTopMenu>
                {
                    urls.map(item => (
                        <NavLink style={{margin: 'auto'}} to={item.url} exact>{item.title}</NavLink>
                    ))
                }
            </DeskTopMenu>
        </NavigationContent>
    );
}

export default Navigation;