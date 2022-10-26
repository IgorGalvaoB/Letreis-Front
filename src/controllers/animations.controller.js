const animationController = async (backWords, setBackWords, rotation, setRotation, word, setWord, current, setCurrent, returned) => {
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
        }

    }
    
    
    await firstStep()
  
    





    /*  if(current>8)return
     let auxBack = [...backWords]
     auxBack[current]=[...returned[0],returned[1]===12]
     setBackWords([...returned])
     let auxRotation = [...rotation]
     auxRotation[current] = auxRotation[current]+90
     setRotation([...auxRotation])
     setWord(['','','','','',''])
     if(current<8){
         auxRotation = [...rotation]
         auxRotation[current+1] = auxRotation[current+1]+90
         setRotation([...auxRotation])
     } */

}
export default animationController