import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


class Menu extends Component {
    
    constructor(props) {
        super(props);
        

    }
    
    
   
    
    render() {

        const menu = this.props.dishes.map((dish) => {
            //Map dish to work with every dish and return the layout for every dish below
            
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1"> 
                    <Card onClick={() => this.props.onClick(dish.id) }>
                        <CardImg width="100%" src={dish.image} alt={dish.name}/> 
                            
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>

                        </CardImgOverlay>
                    </Card>
                    
                </div>
            ) // key define every item 
        });
        return (
            <div className="container">
                <div className='row'>

                        {menu}

                </div>
               
            </div>
        );
    }
}

export default Menu;