import React, {Components} from 'react'

export default class Input extends Components {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return(
            <div>
               <label htmlFor="fruit-filter">Filter these Fruits: </label>
               <input type="text" value={this.props.value} onChange={this.props.onChange} name="fruit-filter" />
            </div>
        )
    }
}
