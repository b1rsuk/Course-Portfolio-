import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import About from './About';

const Author = () => {
    return (
        <Box as='section' sx={{
            padding:  '150px 0',
        }}>
                <Grid container>
                    <Grid item xs={12}>
                        <Typography variant="h4" component="h4" align='center' sx= {{
                            fontStyle: '20px',
                            fontWeight: 'bold'
                        }} color='#05b1b1' gutterBottom>ОБ АВТОРЕ</Typography>
                    </Grid>
                </Grid>
                <About/>
        </Box>
    );
}
export default Author;