import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    
    constructor(props) {
        super(props);


        this.state = {
            
           
        }
    }

    renderDish(dish) {

        
        return (
                <div className='col-12 col-md-5 m-1'>
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />    
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                
                
                
            )

      
    }


    renderComments(comments) {
         if (comments != null) {
             return (
                <div className='col-12 col-md-5 m-1'>
                       <h4>Comments</h4>
                                              
                         {comments.map((comment) => { 
                             return (
                                <ul className='list-unstyled' key={comment.id}>
                                    <li>
                                    <p>{comment.comment}</p>
                                         <p>--{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))} </p>

                                    </li>
                                </ul> 
                                )
                                
                            })
                         }
                         
                        
                </div>
            )

        } else {
            return (
                <div></div>
            )
        }

     }


    render() {
        if (this.props.dish != null) {
            return (

                <div className='container'>
                    <div className='row'>
                        {this.renderDish(this.props.dish)}
                        {this.renderComments(this.props.dish.comments)}
                    </div>
                </div>
            )


        } else {
            return (
                <div></div>
            )
            
        }
    }
}
export default DishDetail;