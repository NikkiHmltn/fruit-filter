import React, {Components} from 'react'

export default class List extends Components {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        const fruitItems = this.props.fruits.map((eachFruit, idx) => {
            return <li>{eachFruit}</li>
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

