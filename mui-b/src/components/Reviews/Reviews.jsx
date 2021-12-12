import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Comment from './Comment';

const Reviews = () => {
    return (
        <Box as='section' sx={{
            padding:  '150px 0',
            backgroundColor: '#eee'
        }}>
                <Grid container>
                    <Grid item xs={12}>
                        <Typography variant="h4" component="h4" align='center' sx= {{
                            fontStyle: '20px',
                            fontWeight: 'bold'
                        }} color='#52339a' gutterBottom>ОТЗЫВЫ О КУРСЕ</Typography>
                    </Grid>
                </Grid>
                <Comment/>
        </Box>
    );
}

export default Reviews;