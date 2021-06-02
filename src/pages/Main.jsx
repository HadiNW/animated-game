import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Spritesheet from 'react-responsive-spritesheet'

import background from '../assets/background.jpg'
import board from '../assets/board.png'
import windowImg from '../assets/window.png'
import idleChar from '../assets/char_idle.png'
import excitedChar from '../assets/char_excited.png'
import egg from '../assets/blue_egg.svg'
import nest from '../assets/nest.svg'
import lamp from '../assets/lamp.svg'
import leafLeft from '../assets/leaf_left.svg'
import leafRight from '../assets/leaf_right.svg'
import electric from '../assets/electricity_big.png'
import headerIcons from '../assets/header-icons.svg'


import ProgressBar from '../components/ProgressBar'
import Button from '../components/Button'

const Main = ({ showFade, setShowFade}) => {
	const [buttonClicked, setButtonClicked] = useState(false)
	const [buttonNumber, setButtonNumber] = useState(100)
	const [progress, setProgress] = useState(0)

	const history = useHistory()

	const clickButton = () => {
		setTimeout(() => {
			setButtonNumber(60)
		}, 120)

		setTimeout(() => {
			setButtonNumber(0)
			setButtonClicked(true)
		}, 440)
	}

	useEffect(() => {
		setTimeout(() => {
			setProgress(100 - buttonNumber)
		}, 1500)
		if (progress === 100) {
			setTimeout(() => {
				setShowFade(true)
				setTimeout(() => {
					history.push('/egg-hatching')
					setShowFade(false)
				}, 1000)
			}, 2000)
		}
	}, [buttonNumber, progress, history, buttonClicked, setShowFade])

	return (
		<div className='main-page'>
			<div className='main-bg'>
				<img src={background} alt='background' />
			</div>
			<div className='header'>
				<ProgressBar progress={progress} />
				<div className='icons'>
					<img src={headerIcons} alt='img' />
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
			{progress === 100 ? (
				<Spritesheet
					className='excited-char'
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
					isResponsive={true}
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
					isResponsive={true}
				/>
			)}
			{buttonClicked && (
				<Spritesheet
					className='idle-char'
					image={electric}
					widthFrame={350}
					heightFrame={350}
					fps={10}
					steps={8}
					autoplay={true}
					style={{
						position: 'absolute',
						zIndex: 10,
					}}
					isResponsive={true}
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
					<Button
						className={`primary-button ${
							buttonClicked ? 'clicked-button-anim' : 'idle-button-anim'
						} ${buttonNumber === 0 && 'bg-grayss'}`}
						onClick={clickButton}
						text={buttonNumber}
					/>
				</div>
				<div className='right-leaf'>
					<img src={leafRight} alt='right grass' />
				</div>
			</div>
		</div>
	)
}

export default Main
