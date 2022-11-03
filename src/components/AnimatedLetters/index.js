import './index.scss'


const AnimatedLetters = ({letterClass, strArray, idx}) => { //this comp receives 3 arg the letterClass, the strArray and the idx which states how long the effect will delay
    return (
        <span>
            {
                strArray.map((char, i) => (
                    <span key ={char + i} className={`${letterClass} _${i + idx}`}>
                        {char}
                    </span>
                ))
            }
        </span>
    )

}

export default AnimatedLetters
