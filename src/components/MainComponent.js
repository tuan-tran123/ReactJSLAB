import React, { Component } from 'react';
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes'; // Tại sao 2 dấu chấm 


class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
        dishes: DISHES,
        selectedDish: null
    };
  }

    
    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId });
    }
    
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className='container'>
            <NavbarBrand href="/">Brand name here</NavbarBrand>
          </div>
        </Navbar> {/*React call Menu component with  dishes={this.state.dishes as a props*/}
        <Menu dishes={this.state.dishes} onClick={(dishId)=> this.onDishSelect(dishId) }/> {/*React call Menu Component  duoc truyen 2 props la dishes va onClick */}

          
        <DishDetail dish = {this.state.dishes.filter((dish) => dish.id ===this.state.selectedDish ) [0]} />  {/*filter của Array dishes sẽ cho ra array thỏa điều kiện ở arrow function*/}
           {/* Vì filter trả về 1 mảng dish có id đã được chọn nên phải chọn index của giá trị đầu tiên của mảng đó là index 0 là id chứ không phải là các giá trị khác như name, description ...*/ } 
      </div>
    );
  }
}

export default Main ;