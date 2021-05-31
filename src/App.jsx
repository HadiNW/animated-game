import background from './assets/background.jpg'
import board from './assets/board.png'
import windowImg from './assets/window.png'
import idleChar from './assets/char_idle.png'
import egg from './assets/blue_egg.svg'
import nest from './assets/nest.svg'

import Spritesheet from 'react-responsive-spritesheet'

import './styles/index.scss'

function App() {
	return (
		<div className='main-page'>
			<div className='main-bg'>
				<img src={background} alt='background' />
			</div>
			<div className='top'>
				<div className='board'>
					<img src={board} alt='board' />
				</div>
				<div className='board'>
					<img src={windowImg} alt='board' />
				</div>
			</div>
			<Spritesheet
				className='idle-char'
				image={idleChar}
				widthFrame={300}
				heightFrame={300}
				fps={10}
				loop={true}
				steps={24}
				autoplay={true}
				style={{
					position: 'absolute',
					bottom: '24%',
					left: '-15%',
				}}
			/>
			<div className='egg-section'>
				<img className='blue-egg' src={egg} alt='bluegg' />
				<img src={nest} alt='nest' />
			</div>
		</div>
	)
}

export default App
