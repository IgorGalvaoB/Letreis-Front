import dicio from '../data/dicio';
import Axios from 'axios';
const validateWord = async (word) => {
    
    if (word.length !== 6) return false
    const compare = async (word2) => {
        const wordLowerCase = word2.toLowerCase()
        const dic = await fetch(dicio).then(r => r.text())
        const charsToReplace = { 'a': '(á|à|â|a|ã)', 'c': '(c|ç)', 'i': '(í|i|ì|î)', 'e': '(e|é|è|ê)', 'o': '(ó|ò|o)' }
        const palavra = `\n${wordLowerCase}\n`
        const regex = palavra.replace(/[aiceo]/gi, c => charsToReplace[c])
        const teste = dic.match(regex)
        if (!teste) {
            return false
        } else {
            return teste[0].slice(1, -1)
        }
    }
    
    const isThere = await compare(word)

    if (isThere) {
        
        
        const requesting = async ()=>{
            try{
                
                const {data} = await Axios.get(`https://termix-back.herokuapp.com/${isThere.toUpperCase()}`,{},{
                headers:{
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                }})
                
                return data

            }catch(error){
                
                return false
            }
        }


        const answer = await requesting(isThere)
       
        let reducer = await answer.map(element=>element[1]).reduce((prev,current)=>{
            return prev+current
        })
      
        
        return answer?[answer,reducer]:false
    }

    return false
}
export default validateWord 