
import React from 'react'
import Layout from '../components/layout/Layout'
import useFetch from '../data/useFetch';
import '../styles/HomeStyles.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {Link} from 'react-router-dom';
import banner3 from '../images/pexels-pixabay-54455.jpg'
import banner4 from '../images/bane.jpg';
import banner5 from '../images/event.jpg';
import {Card, CardActionArea, CardMedia, } from '@mui/material';
import pic6 from '../images/1pic.jpg';
import banner6 from '../images/review.jpg';


const Home = () => {
  const restaurants = useFetch();
  const {menu}=restaurants;
  if (!menu) {
    return <div>Loading...</div>;
  }
  const {events}=restaurants;
  const {reviews}=restaurants;

  

  return (
    <>
     <Layout>
      <div className='home' style={{backgroundImage:`url(${banner3})`}}>
        <div className='headerContainer'>
          <h1>{restaurants.name}</h1>
          <p><LocationOnIcon/>
          {restaurants?.location?.address ?? 'Loading...'}

          </p>
          <Link to="/menu">
            <button>Order Now</button>

          </Link>


        </div>
      
    </div>
    <div className='home-menu' style={{backgroundImage:`url(${banner4})`}}>
      <h1>{menu.seasonal_menu.name}</h1>
        {menu.seasonal_menu.items.map(item => (
        <div key={item.name}>
          <Card sx={{width:"390px",m:2}}> 
            <CardActionArea>
              <CardMedia sx={{minHeight:'400px'}}
              component={"img"}
              src={pic6}
              alt={item.name}/>

            </CardActionArea>
          </Card>
          
          <p color="black">{item.description}</p>
          
          <p color='black'>${item.price}</p>
          
          <p color='black'>
            Calories: {item.nutritional_info.calories} | 
            Protein: {item.nutritional_info.protein}g |
            Carbs: {item.nutritional_info.carbohydrates}g |
            Fat: {item.nutritional_info.fat}g
          </p>
          
          <p color='black'>
            Seasonal Availability: {item.seasonal_availability.join(", ")}  
          </p>
        </div>
      ))}

      
      

            
    </div>
    <div className='events' style={{backgroundImage:`url(${banner5})`}}>
      <h1>Upcoming Events</h1>
      {
        events && 
        events.upcoming_events &&
        events.upcoming_events.length>0 &&(
          <ul className='nano'>
            {events.upcoming_events.map(events=>(
              <li key={events.name}>
                <p>{
                  events.date
                }</p>
                <b>
                  {events.name}
                </b>:
                <br/>
                {
                  events.description
                }

                
              </li>
          
            ))}
          </ul>
        )

      }
     
    </div>
    <div className='review' style={{backgroundImage:`url(${banner6})`}}>
      <h1>Reviews</h1>
      <p className='rev'>
          {reviews && reviews.length>0 && reviews.map(reviews=>(
        <li key={reviews.rating}>Name : 
           {reviews.customer_name}------------------------------------------------------------------------------------------------------------------Rating :{reviews.rating}<br/>Comment :  {reviews.comment}<br/>
        </li>
      ))}
      

      </p>
      <br/>
    
    </div>


    </Layout>
    </>
   
  )
}

export default Home