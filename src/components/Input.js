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
               <input type="text" name="fruit-filter" />
            </div>
        )
    }
}
