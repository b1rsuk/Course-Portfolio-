import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import pattern from '../../img/pattern.png';

const Header = () => {
    return (
        <Box as='header' sx={{
            padding:  '150px 0',
            backgroundColor: '#05b1b1',
            backgroundImage: `url(${pattern})`,
          }}>
            <Container>
                  <Grid container>
                    <Grid item xs={12}>
                      <Typography variant="h4" component="h1" align='center' color='white' gutterBottom>Видео курс по вёрстке для начинающих HTML & CSS</Typography>
                      <Box sx={{
                        width: 70,
                        height: 70,
                        backgroundColor: '#52339a',
                        borderRadius: '50%',
                        margin: 'auto',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        cursor: 'pointer',
                        '&:hover': {
                          opacity: 0.9,
                        }      
                      }}>
                        <Box sx={{
                          borderStyle: 'solid',
                          borderWidth: '10px 0 10px 20px',
                          borderColor: 'transparent transparent transparent #fff',
                          marginRight: -0.5,
                        }}></Box>
                      </Box>
                      <Button sx={{
                        display: 'block',
                        margin: 'auto',
                        marginTop: 3,
                        color: '#fff',
                        width: 180,
                        height: 50,
                        fontSize: 18,
                      }} variant="contained" color='violet'>Заказать</Button>
      
                    </Grid>
                 </Grid>
            </Container>
          </Box>
    );
}
export default Header;