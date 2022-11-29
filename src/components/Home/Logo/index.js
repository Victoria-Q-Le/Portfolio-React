import './index.scss'
import LogoV from '../../../assets/images/logo-v.png'
import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'

const Logo = () => {
    
    const bgRef = useRef()
    const outlineLogoRef = useRef()
    const solidLogoRef = useRef()

    useEffect (() => {
        gsap.registerPlugin(DrawSVGPlugin)
        gsap.timeline()
            .to(bgRef.current, {
                duration: 1,
                opacity: 1,
            })
            .from(outlineLogoRef.current, {
                drawSVG: 0,
                duration: 20,
            })

            gsap.fromTo(
                solidLogoRef.current, 
                {
                    opacity: 0, //the starting point of the animation, which is the opacity. 
                }, 
                {
                    opacity: 1, //the third arg of the function is the end state
                    delay: 4,
                    duration: 4,
                }
            )
    },[]) //want it to refresh only once

    return (
        <div className='logo-container' ref={bgRef}>
            <img ref={solidLogoRef} className='solid-logo' src={LogoV} alt='V' /> 
            {/* The Solid logo will be displayed after the animation is done */}

            <svg width="97" height="103" viewBox="0 0 97 103" fill="none" xmlns="http://www.w3.org/2000/svg">
<path 
ref = {outlineLogoRef}
d="M47.4453 78.8828L68.75 0.625H96.3828L61.8594 103H44L47.4453 78.8828ZM28.1094 0.625L49.4141 78.8828L53 103H34.9297L0.617188 0.625H28.1094Z"/>
</svg>

        </div>
    )
}

export default Logo
