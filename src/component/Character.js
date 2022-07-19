import React from 'react'
import './Character.css'

class Character extends React.Component {
	render() {
		return(
            <div className='container'>
                <img src={this.props.image} />
                <div className='card-body'>
                    <h4>{this.props.name}</h4>
                    <p>{this.props.title}</p>
                </div>
            </div>
		)
	}
}

export default Character