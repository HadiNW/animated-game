import egg from '../assets/blue_egg.svg'

function ProgressBar({ progress }) {
	return (
		<div className='progress-bar'>
			<img src={egg} alt='' className='egg' />
			<div className='bar'>
				<div className="bar-filled" style={{width: progress +'%'}}></div>
			</div>
		</div>
	)
}

export default ProgressBar
