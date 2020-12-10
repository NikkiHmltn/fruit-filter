import React, {Component} from 'react'

export default class List extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        const fruitItems = this.props.fruits.map((eachFruit, idx) => {
            return <li key={idx}>{eachFruit}</li>
        })

        return(
            <div>
                <ul>
                    {fruitItems}
                </ul>
            </div>
        )
    }
}

