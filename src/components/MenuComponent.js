import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
    
   function RenderMenuItem({dish}) {
       return (
           <Card>
               <Link to= {`/menu/${dish.id}`}>
                    <CardImg width="100%" src={dish.image} alt={dish.name}/>                 
                    <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
        
               </Link>
            </Card>
            
       )
   }
    
    const Menu = props => {
        const menu = props.dishes.map((dish) => {
            //Map dish to work with every dish and return the layout for every dish below
            
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1"> 
                  <RenderMenuItem  dish={dish} />
                    
                </div>
            ) // key define every item 
        });
        return (
            <div className="container">
                <div className='row'>
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className='col-12'>
                        <h3>Menu</h3>
                        <hr />
                    </div>
                </div>
                <div className='row'>

                        {menu}

                </div>
               
            </div>
        );
    }

        
    


export default Menu;