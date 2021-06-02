import Button from "./Button"
import ButtonLink from "./ButtonLink"

const Modal = ({ title, points }) => {
	return (
		<div className='modal'>
			<div className='form'>
				<div className='reward-box'>
					<h4>{title}</h4>
					<div className='points'>
						<h3>{points}</h3>
						<h3>TokoPoints</h3>
					</div>
				</div>
				<div className="buttons">
					<ButtonLink to="/" text="Hatch Another Egg" className="primary-button mr-top-2" />
					<Button text="Use TokoPoints" className="secondary-button mr-top-2" />
				</div>
			</div>
		</div>
	)
}

export default Modal
