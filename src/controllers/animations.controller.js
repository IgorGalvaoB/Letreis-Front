const animationController = async (backWords, setBackWords, rotation, setRotation, setWord, current, setCurrent, returned,setWon) => {
    if (current > 7) return
    let cur = current
    const success = returned[1] === 12
    
    const firstStep = async () => {
        let auxBackWords = [...backWords]
        auxBackWords[current] = [...returned[0], success]
        setBackWords([...auxBackWords])
        let auxRotation = [...rotation]
        if(!success&&cur<7){

            setWord(['', '', '', '', '', ''])
            auxRotation[current] += 90
            auxRotation[current+1]+=90
            setRotation([...auxRotation])
            setCurrent(current+1)
            
        }else{
            setWord(['', '', '', '', '', ''])
            auxRotation[current] += 90
            setRotation([...auxRotation])
            setCurrent(current+1)
            setWon(true)
        }

    }
    console.log(returned,backWords)
    
    await firstStep()

}
export default animationController