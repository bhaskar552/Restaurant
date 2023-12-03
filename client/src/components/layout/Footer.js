import React from 'react'
import {Box, Typography} from '@mui/material'
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
const Footer = () => {
  return (
    <>
    <Box sx={{textAlign:"center",bgcolor:"black",color:"white",p:3}}>
        <Box sx={{my:3,"& svg":{
            fontSize:"60px",
            cursor:"pointer",
            color:"white",
            mr:2,
        },
        "& svg:hover":{
            color:'goldenrod',
            transform:'translateX(5px)',
            transition:'all 400ms',
        }
        }}>

            <a href='https://www.epicureansymphony.com' target='_blank' rel='noreferrer'>
                <OpenInNewIcon/>
            </a>
            <a href='https://www.facebook.com/epicureansymphony' target='_blank' rel='noreferrer'>
                <FacebookIcon/>
            </a>
            <a href='https://www.instagram.com/epicureansymphony' target='_blank' rel='noreferrer'>
                <TwitterIcon/>
            </a>
            <a href='https://www.twitter.com/epicureansymph' target='_blank' rel='noreferrer'>
                <InstagramIcon/>
            </a>
            
            
            

        </Box>
        <Typography variant='h5' sx={{"@media(max-width:600px)":{
            fontSize:'1rem',
        }}}>
            All rights reserved
        </Typography>

    </Box>
    </>
  )
}

export default Footer