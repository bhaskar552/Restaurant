import React from 'react'
import Layout from '../components/layout/Layout'
import { Box, Typography } from '@mui/material'
import useFetch from '../data/useFetch'

const About = () => {
    const restaurants = useFetch();
    const{awards}=restaurants;
    const {sustainability}=restaurants;



  return (
    <Layout>
        <Box sx={{
          my:7,
          textAlign:'center',
          "& h4":{
            fontWeight:'bold',
          }
        }}>
          <Typography>
           <h1>Welcome to Epicurean Symphony
</h1> 
          </Typography>
          <p className='chef'>
            <h2>Head Chef</h2>
            Name : {restaurants?.chef?.name ?? 'Loading...'}<br/>
            BIO : {restaurants?.chef?.bio ?? 'Loading...'}<br/>
            Signature Dish: {restaurants?.chef?.signature_dish ?? 'Loading'}




          </p>
          <p className='awards'>
            <ul>
              <h2>Awards</h2>
              {awards && awards.length > 0 && awards.map(award => (
                <li key={award.year}>
                  {award.year} - {award.organization} - {award.award}
                </li>
              ))}
            </ul>

          </p>
          <p className='ambiance'>
            <h2>Ambiance</h2>
            {restaurants?.ambiance?.description?? 'Loading..'}


          </p>
          <p className='sustainability'>
            <h2>Sustainability</h2>
            {
            sustainability && 
                sustainability.initiatives &&
                  sustainability.initiatives.length > 0 && (
            
                <ul>
                {sustainability.initiatives.map(initiative => (
                <li key={initiative.name}>
                  <b>{initiative.name}</b>: {initiative.description}  
                </li>  
              ))}
            </ul>
                  )}
              

          </p>

        </Box>
    </Layout>
  )
}

export default About