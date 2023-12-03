import React, { useState } from 'react'
import {AppBar, Box, IconButton, Toolbar, Typography,Drawer, Divider} from '@mui/material'
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import {Link} from 'react-router-dom';
import '../../styles/HeaderStyles.css';
import ListIcon from '@mui/icons-material/List';
import useFetch from '../../data/useFetch';

const Header = () => {
    const[mobileOpen,setMobileOpen]=useState(false)
    const handledradwerToggle=()=>{
        setMobileOpen(!mobileOpen)

    }
        const restaurants = useFetch();

    const drawer=(
        <Box onClick={handledradwerToggle} sx={{textAlign:"center"}}>
            <Typography color={"#ee9b00"} variant='h6' component="div" sx={{flexGrow:1,my:2}}>
                <LocalDiningIcon/>
                {restaurants.name}
            </Typography>
            <Divider/>
             <ul className='mobile-navigation'>
                        <li>
                           <Link to={'/'}>Home</Link> 
                        </li>
                        <li>
                           <Link to={'/menu'}>Menu</Link> 
                        </li>
                        <li>
                           <Link to={'/about'}>About</Link> 
                        </li>
                        <li>
                           <Link to={'/contact'}>Contact</Link> 
                        </li>
                    </ul>

        </Box>
    )

  return (
    <>
    <Box>
        <AppBar component={'nav'} sx={{ bgcolor: 'black' }}>
            <Toolbar>
                <IconButton color="inherit" aria-label="open drawer" edge="start" sx={{mr:2,display:{sm:"none"},}}onClick={handledradwerToggle}>
                    
                    <ListIcon/>

                </IconButton>
            <Typography className='head' color={"#ee9b00"} variant="h6" component={"div"} sx={{flexGrow:1}}>
                <LocalDiningIcon/>
                {restaurants.name}</Typography>
                <Box sx={{display:{xs:'none',sm:'block'}}}>
                    <ul className='navigation-menu'>
                        <li>
                           <Link to={'/'}>Home</Link> 
                        </li>
                        <li>
                           <Link to={'/menu'}>Menu</Link> 
                        </li>
                        <li>
                           <Link to={'/about'}>About</Link> 
                        </li>
                        <li>
                           <Link to={'/contact'}>Contact</Link> 
                        </li>
                    </ul>
                </Box>
            </Toolbar>

        </AppBar>
        <Box component="nav">
            <Drawer variant="temporary" open={mobileOpen}
            onClose={handledradwerToggle}
            sx={{display:{xs:'block',sm:'none'},"@ .MuiDrawer-paper":{
                boxSizing:"border-box",
                width:"240px",
            }}}>
                {drawer}

            </Drawer>
             
        </Box>
        <Box>
            <Toolbar/>

        </Box>
        

    </Box>
    </>
    )
}

export default Header