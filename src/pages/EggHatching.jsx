import { useState } from 'react'


import background from '../assets/egg_crack_background.png'
import nest from '../assets/nest.svg'
import eggCrack from '../assets/egg_crack.png'
import eggHatch from '../assets/egg_hatch.png'
import shine from '../assets/shine.png'

import Spritesheet from 'react-responsive-spritesheet'

import '../styles/egg-hatching.scss'

const EggHatching = () => {

	const [showCrackingEgg, setShowCrackingEgg] = useState(true)
	const [showHatchingEgg, setShowHatchingEgg] = useState(false)
	const [showShine, setShowShine] = useState(true)

	return (
		<div className='egg-hatching-page'>
			<div className='egg-hatching-bg'>
				<img src={background} alt='background' />
			</div>
			<div className="dialog-box">WOW! The egg is hatching...</div>
			<div className="hatching-egg">
				{showCrackingEgg && <Spritesheet
						className='egg-crack'
						image={eggCrack}
						widthFrame={340}
						heightFrame={340}
						fps={10}
						steps={90}
						style={{
							position: 'absolute',
							bottom: '2%',
							left: '50%',
							zIndex: 10,
							transform: 'translateX(-50%)'
						}}
						loop={true}
						isResponsive={true}
						onLoopComplete={() => {
							setShowHatchingEgg(true)
						}}
					/>}
					{showHatchingEgg && <Spritesheet
						className='egg-crack'
						image={eggHatch}
						widthFrame={340}
						heightFrame={340}
						fps={10}
						steps={30}
						style={{
							position: 'absolute',
							bottom: '2%',
							left: '50%',
							zIndex: 10,
							transform: 'translateX(-50%)'
						}}
						loop={true}
						isResponsive={true}
						onLoopComplete={(spritesheet) => {
							console.log({spritesheet})
							spritesheet.pause()
							setShowShine(false)
						}}
						onPlay={() => {
							setShowCrackingEgg(false)
						}}
					/>}
					{showShine && <div className="shine">
						<img src={shine} alt="shine" />
					</div>}
			</div>
			<div className="hatching-nest">
				<img src={nest} alt='nest' />
			</div>
		</div>
	)
}

export default EggHatching
