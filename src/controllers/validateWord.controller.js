
const validateWord = (rotation,setPosition) => {
    if (rotation !== 90) return
    let counter = 0
    const interval = setInterval(() => {
        counter++
        if (counter % 2 === 0) {
            setPosition(7)
        } else {
            setPosition(-7)
        }

        if (counter === 15) {
            setPosition(0)
            clearInterval(interval)
        }
    }, 20)
}
export default validateWord 