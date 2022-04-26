import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Modal, ModalHeader, ModalBody, Button, Row, Label, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors  } from 'react-redux-form';


function RenderDish({ dish }) {

        
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


function RenderComments({ comments }) {
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
                         
                    <CommentForm />    
                </div>
            )

        } else {
            return (
                <div></div>
            )
        }

     }


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len); //not val or val.length is less than or equal to length
const minLength = (len) => (val) => (val)  && (val.length >= len);

class CommentForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isModalOpen: false
        }
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
         }
         
    
    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
        
    }
    handleSubmit(values) {
        this.toggleModal();
        alert("Rating: " + JSON.stringify(values));
        
    }
      
    render() {
        return(
            <div>
                <Button outline onClick={this.toggleModal}>
                    <span className='fa fa-pencil fa-lg'></span> Submit Comments
                                     </Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comments</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) =>this.handleSubmit(values)}>
                            <Row className='form-group'>
                                <Col>
                                <Label htmlFor='rating'>Rating:</Label>
                                <Control.select
                                    model='.rating'
                                    className='form-control'
                                    id='rating'
                                    name='rating'
                                    >
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Control.select>
                               </Col>
                                    
                            </Row>
                            <Row className='form-group'>
                                <Col>
                                <Label htmlFor="username">Your Name</Label>
                                <Control.text
                                    model='.username'
                                        className='form-control' id='username' name='username' placeholder='Your name' validators={{ required, minLength: minLength(2), maxLength: maxLength(15) }} />
                                    <Errors
                                        className="text-danger" 
                                        model=".username"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 character or less'
                                        }}
                                    />

                                </Col>
                            </Row>
                            <Row className='form-group'>
                                <Col>
                                <Label htmlFor='message'>Comments:</Label>
                                <Control.textarea
                                    model='.textarea'
                                        className='form-control' id='message' name='message' rows='6' /> 
                                </Col>
                            </Row>
                            <Row className='form-group'>
                                <Col>
                                    <Button type='submit' color='primary'>Submit</Button>                
                                </Col>    
                            </Row>
                        </LocalForm>
                    </ModalBody>
                    
            
                </Modal>
            </div>
            
        )
    

    }
        
    
    
     }





    const DishDetail = (props)  => {
        if (props.dish != null) {
            return (

                <div className='container'>
                    <div className='row'>
                        <Breadcrumb>
                            <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                            <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                    <div className='col-12'>
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                    </div>
                    <div className='row'>
                        <RenderDish dish= {props.dish} />
                        <RenderComments comments={props.comments} />
                        
                    </div>
                    
                </div>
            )


        } else {
            return (
                <div></div>
            )
            
        }
    }

export default DishDetail;