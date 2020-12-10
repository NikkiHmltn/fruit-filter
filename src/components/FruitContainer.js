import React, {Component} from 'react'
import List from './List'
import Input from './Input'

export default class FruitContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            //initialize the fruit listto the full list passed into props
            fruitsToDisplay: props.fruits,
            //initialize the filter value to empty string
            filterValue: " ", 
        }
    }

    handleFilterChange = (e) => {
        e.preventDefault();
        let filterValue = e.target.value;
        // remove the fruits that dont contain the filter value
        const filteredFruitList = this.props.fruits.filter(fruit => {
            return fruit.toLowerCase().includes(filterValue.toLowerCase())
        })

        this.setState({fruitsToDisplay: filteredFruitList, filterValue})
    }

    render() {
        console.log('---- state ----');
        console.log(this.state.fruitsToDisplay);
        console.log('---- props ----');
        console.log(this.props.fruits);
        //here is here you can do console.log
        // inside of Input Components, to access props, I will say props.value
        // inside of List Components, to access props, I will say props.fruits
        return(
            <div>
                <Input value={this.state.filterValue} onChange={this.handleFilterChange} />
                <List fruits={this.state.fruitsToDisplay}/>
            </div>
        )
    }
}
