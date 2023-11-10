import React, { useState } from "react";

import {BsCart2} from "react-icons/bs"
import {HiOutlineBars3} from "react-icons/hi2"
import {Box, Drawer,List,ListItem, ListItemButton, ListItemIcon, ListItemText}  from "@mui/material"
import HomeIcon from '@mui/icons-material/Home'
import InfoIcon from '@mui/icons-material/Info'
import ContactSupportRoundedIcon from '@mui/icons-material/ContactSupportRounded';
import CommentRoundedIcon from '@mui/icons-material/CommentRounded'
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded'

import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded'
import Logo from '../Assets/Logo_1.jpg'
import { HashLink as Link} from 'react-router-hash-link';
const Navbar = () => {
    const [openMenu,setOpenMenu] = useState(false)
    const menuOptions =[
        {
            text:'Home',
            icon:<HomeIcon/>
        },{
            text:'About',
            icon:<InfoIcon/>
        },{
            text:"Contact",
            icon:<ContactSupportRoundedIcon/>

        }
    ]
    return (
        <>
        <nav>
            <div className="nav-logo-container">
         <img src={Logo} height={300} width={300} alt='' />  
            </div>
            <div className="navbar-links-container">
                <Link smooth to='#home'>Home</Link>

                <Link smooth to='#about'>About</Link>
                <Link smooth to='#contact'>Contact</Link>
                
            </div>
            <div className="navbar-menu-container">
              <HiOutlineBars3 onClick={() => setOpenMenu(true)}/>
            </div>
            <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor='left'>
                <Box sx={{
                    width:250
                }}
                role='presentation'
                onClick={() => setOpenMenu(false)}
                onKeyDown={() => setOpenMenu(false)}
                >
                  <List>
                     {menuOptions.map((item) => (
                        <ListItem key={item.text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.text}/>
                            </ListItemButton>

                        </ListItem>
                     ))
                     
                      

                     }
                  </List>
                </Box>

            </Drawer>
        </nav>
        </>
    );
};
 
export default Navbar;