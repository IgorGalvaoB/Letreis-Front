import { styled } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'; 
import AnimatedItem from './AnimatedItem';


const ItemGrid = (value,stage,successAnimated,flipAnimated)=>{
    const items = []
    for(let i = 0;i<6;i++){
        const letter = value[i]||null
        items.push(<AnimatedItem id={i} key={i} stage={stage} value={letter} flipAnimated={flipAnimated} successAnimated={successAnimated}/>)
    }
    
    return(
        <Grid container spacing={1}>
            <Grid xs={2}>
                {items}
            </Grid>
        </Grid>
    )
}
export default ItemGrid