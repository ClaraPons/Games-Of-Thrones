import React from 'react'
import "./Continent.css"

class Continent extends React.Component {
	render() {
		return(
            <div className='container-continent'>
                <h4>{this.props.continent}</h4>
            </div>
		)
	}
}

export default Continent