import React from 'react'
import Layout from '../components/layout/Layout'
import { Box, Card, CardActionArea, CardMedia ,Typography,CardContent} from '@mui/material'
import '../styles/MenuStyles.css';

import useFetch from '../data/useFetch'
import pic1 from '../images/1pic.jpg';
import pic2 from '../images/2pic.jpg';
import pic3 from '../images/3pic.jpg';
import pic4 from '../images/4pic.jpg';
import pic5 from '../images/5pic.jpg';
import pic6 from '../images/6pic.jpg';
const images = [pic1, pic2, pic3, pic4, pic5, pic6];





const Menu = () => {

    const restaurants = useFetch();
    const {menu} =restaurants;
    if (!menu) {
    return <div>Loading...</div>;
  }
  const i=0;


  return (
    <Layout>
      <div className='menu'>
      <h1 >Menu</h1>
      <h2>Categories</h2>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {menu.categories.map(category => (
          <Card sx={{ width: "390px", m: 2 }}>
            <CardContent>
              <Typography variant="h5">{category.name}</Typography>

              {category.items.map(item => (
                <div key={item.name}>
                  <Card>
                    <CardActionArea>
                      <CardMedia
                      sx={{minHeight:'400px'}}
                      component={"img"}
                      src={images[i]}
                      alt={item.name}
                      
                      />
                      
                      
                      
                    </CardActionArea>
                

                  </Card>
                  <Typography variant="body1">{item.name}</Typography>
                  <Typography variant="body2">Description :{item.description}</Typography>
                  <Typography variant="body2">Price :
                    ${item.price}<br/>Ingredients :{item.ingredients.join(", ")}
                  </Typography>
                  <Typography>Calories :{item.nutritional_info.calories}<br/>
                  Protein :{item.nutritional_info.protein}<br/>
                  Carbohydrates:{item.nutritional_info.carbohydrates}<br/>
                  Fat :{item.nutritional_info.fat}</Typography>
                  <Typography>Availability: {item.seasonal_availability}</Typography>
                
                  
                </div>
                
              ))}

            </CardContent>
          </Card>
        ))}
      </Box>
      </div>
    </Layout>

        )

}

export default Menu