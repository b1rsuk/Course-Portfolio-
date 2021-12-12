import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AboutIcon from './AboutIcon';

const AboutCourse = () => {
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
                    }} color='#05b1b1' gutterBottom>О КУРСЕ</Typography>
                </Grid>
            </Grid>
            <AboutIcon/>
        </Box>
    )
}
export default AboutCourse;