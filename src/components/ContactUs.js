import React from 'react';

export default class extends React.Component {
	constructor(props) {
		super(props);
		this.state = { feedback: '', name: 'Name', email: 'email@example.com' };
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	render() {
		return (
			<form className='test-mailing'>
				<h1>Does email work</h1>
				<div>
					<textarea
						id='test-mailing'
						name='test-mailing'
						onChange={this.handleChange}
						placeholder='Post some lorem ipsum here'
						required
						value={this.state.feedback}
						style={{ width: '100%', height: '150px' }}
					/>
				</div>
				<input
					type='button'
					value='Submit'
					className='btn btn--submit'
					onClick={this.handleSubmit}
				/>
			</form>
		);
	}

	handleChange(event) {
		this.setState({ feedback: event.target.value });
	}

	handleSubmit(event) {
		const serviceId = 'service_jkxydkj';
		const templateId = 'template_5asj0na';

		this.sendFeedback(serviceId, templateId, {
			message_html: this.state.feedback,
			from_name: this.state.name,
			reply_to: this.state.email,
		});
	}
	// ('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
	sendFeedback(serviceId, templateId, variables) {
		window.emailjs
			.send(serviceId, templateId, variables)
			.then((res) => {
				console.log('Email successfully sent!');
			})
			.catch((err) =>
				console.error(
					'FAILED. Here some thoughts on the error that occured:',
					err
				)
			);
	}
}
