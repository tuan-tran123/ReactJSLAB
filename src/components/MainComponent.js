import React, { Component } from 'react';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'; //withRouter is used to configure React component to Redux
import { connect } from 'react-redux';



const mapStatetoProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders

  }
}


class Main extends Component {

  constructor(props) {
    super(props);
    
  }

  

    
    // onDishSelect(dishId) {
    //     this.setState({ selectedDish: dishId });
    // }
    
  render() {

    const HomePage = () => {
      return (
        <Home dish={this.props.dishes.filter((dish) => dish.featured)[0]} 
        promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
        leader={this.props.leaders.filter((leader) => leader.featured)[0]}
        />
      )
    }

    const DishWithId = ({match }) => {
      return (
        <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
          comments ={this.props.comments.filter((comment) =>comment.dishId === parseInt(match.params.dishId, 10))} 
        />
        )
    }

    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path='/home' component={HomePage} />
          <Route exact path='/menu' component= {() => <Menu dishes ={this.props.dishes} />} />  {/* Truyền cho Menu props */}
          <Route path='/menu/:dishId' component={DishWithId} />
          <Route exact path='/contactus' component={Contact} />
          <Redirect to='/home' />
        
        </Switch>
        <Footer />

      </div>
    );
  }
}

export default withRouter(connect(mapStatetoProps) (Main)) ; //Connect component to react router =withRouter , connect Redux Store to Component = connect(mapStatetoProps) (Main)