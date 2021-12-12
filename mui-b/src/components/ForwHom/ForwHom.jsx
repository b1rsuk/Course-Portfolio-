import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ForwHomBox from './ForwHomBox';

const ForwHom = () => {
    return (
        <Box as='section' sx={{
            padding:  '150px 0',
        }}>
                <Grid container>
                    <Grid item xs={12}>
                        <Typography variant="h4" component="h4" align='center' sx= {{
                        fontStyle: '20px',
                        fontWeight: 'bold'
                        }} color='#52339a' gutterBottom>КУРС ДЛЯ ТЕХ, КТО</Typography>
                    </Grid>
                </Grid>
                <ForwHomBox/>
        </Box>
    );
}
export default ForwHom;