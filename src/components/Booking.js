import React from 'react';
import '../App.js';
import { Button } from './Button';
import './Booking.css';

class Booking extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			weddingDate: '',
            name: '',
            namePartner: '',            
			email: '',
			phone: '',
            locations: '',
		};
	}

	componentDidMount(){

		// Prevents picking day in past
		var today = new Date();
		var dd = today.getDate();
		var mm = today.getMonth()+1; //January is 0!
		var yyyy = today.getFullYear();
		 if(dd<10){
				dd='0'+dd
			} 
			if(mm<10){
				mm='0'+mm
			} 
		today = yyyy+'-'+mm+'-'+dd;
		document.getElementById("weddingDate").setAttribute("min", today);
	}


	render() {
		return (
			<div className='booking__container'>
                <h1>Availability</h1>
                <h1>Enquire</h1>
                <h2>Currently booking dates for 2021 & 2022</h2>
				<form
					id='contact-form'
					onSubmit={this.handleSubmit.bind(this)}
					method='POST'
				>
					<div className='form-group'>
						<label htmlFor='weddingDate'>Wedding Date</label>
						<input 
							id="weddingDate"
							type='date'
							required min='1899-01-01' max='2022-12-12'
							className='form-control'
							value={this.state.weddingDate}
							onChange={this.onweddingDateChange.bind(this)}
						/>
					</div>                   
					<div className='form-group'>
						<label htmlFor='name'>Full Name</label>
						<input
							type='text'
							required
							className='form-control'
							value={this.state.name}
							onChange={this.onNameChange.bind(this)}
						/>
					</div>
					<div className='form-group'>
						<label htmlFor='exampleInputEmail1'>Email address</label>
						<input
							type='email'
							required
							className='form-control'
							aria-describedby='emailHelp'
							value={this.state.email}
							onChange={this.onEmailChange.bind(this)}
						/>
					</div>
					<div className='form-group'>
						<label htmlFor='message'>Message</label>
						<textarea
							className='form-control'
							rows='5'
							value={this.state.message}
							onChange={this.onMessageChange.bind(this)}
						/>
					</div>
					<Button
						type='submit'
						className='btns'
						buttonStyle='btn--primary'
						buttonSize='btn--large'
					>
						Submit
					</Button>
				</form>
			</div>
		);
	}

	
	onweddingDateChange(event) {
		this.setState({ weddingDate: event.target.value });
	}
	
	onNameChange(event) {
		this.setState({ name: event.target.value });
	}

	onEmailChange(event) {
		this.setState({ email: event.target.value });
	}

	onMessageChange(event) {
		this.setState({ message: event.target.value });
	}

	handleSubmit(event) {
		event.preventDefault();
		console.log(event);
	}
}

export default Booking;