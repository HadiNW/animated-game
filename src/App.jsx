import { useState } from 'react'

import background from './assets/background.jpg'
import board from './assets/board.png'
import windowImg from './assets/window.png'
import idleChar from './assets/char_idle.png'
import excitedChar from './assets/char_excited.png'
import egg from './assets/blue_egg.svg'
import nest from './assets/nest.svg'
import lamp from './assets/lamp.svg'
import leafLeft from './assets/leaf_left.svg'
import leafRight from './assets/leaf_right.svg'
import electric from './assets/electricity_big.png'
import headerIcons from './assets/header-icons.svg'

import Spritesheet from 'react-responsive-spritesheet'

import './styles/index.scss'

function App() {
	const [buttonClicked, setButtonClicked] = useState(false)
	const [number, setNumber] = useState(100)

	const clickButton = () => {
		setTimeout(() => {
			setNumber(60)
		}, 120)

		setTimeout(() => {
			setNumber(0)
			setButtonClicked(true)
		}, 440)
	}

	return (
		<div className='main-page'>
			<div className='main-bg'>
				<img src={background} alt='background' />
			</div>
			<div className="header">
				<div className="progress-bar">
					<img src={egg} alt="" className="egg" />
					<div className="bar"></div>
					<div className="bar-filled"></div>
				</div>
				<div className="icons">
					<img src={headerIcons} alt="img" />
				</div>
			</div>
			<div className='top'>
				<div className='board'>
					<img src={board} alt='board' />
				</div>
				<div className='board'>
					<img src={windowImg} alt='board' />
				</div>
			</div>
			{buttonClicked ? (
				<Spritesheet
					className='idle-char'
					image={excitedChar}
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
			) : (
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
			)}
			{buttonClicked && (
				<Spritesheet
					className='idle-char'
					image={electric}
					widthFrame={350}
					heightFrame={350}
					fps={10}
					loop={true}
					steps={8}
					autoplay={true}
					style={{
						position: 'absolute',
						zIndex: 10,
					}}
				/>
			)}
			<div className='egg-section'>
				<div>
					<img className='blue-egg' src={egg} alt='bluegg' />
				</div>
				<div>
					<img className='nest' src={nest} alt='nest' />
				</div>
				<div>
					<img className='lamp' src={lamp} alt='lamp' />
				</div>
			</div>

			<div className='bottom-section'>
				<div className='left-leaf'>
					<img src={leafLeft} alt='left grass' />
				</div>
				<div className='main-button'>
					<button
						className={`primary-button ${
							buttonClicked ? 'clicked-button-anim' : 'idle-button-anim'
						} ${number === 0 && 'bg-grayss'}`}
						onClick={clickButton}
					>
						{number}
					</button>
				</div>
				<div className='right-leaf'>
					<img src={leafRight} alt='right grass' />
				</div>
			</div>
		</div>
	)
}

export default App
