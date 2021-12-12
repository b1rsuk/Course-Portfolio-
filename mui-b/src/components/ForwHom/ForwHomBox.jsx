import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const ForwHomBox = () => {
    const title = [
        'Хочет научиться создавать сайты своими силами',
        'Учится современным инструментам разработки',
        'Еще не знает язык HTML и CSS, но хочет выучить',
        'Хочет стать крутым мастером и зарабатывать деньги'
    ];

    return (
        <Container maxWidth="lg">
                <Grid container mt={8}>
                    {
                        title.map((e, index) => {
                            return <Grid key={index} item mb={1} xs={12} md={6} sx={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}>
                                <Box mr={1} sx={{
                                    border: '2px solid #05b1b1',
                                    maxWidth: 450,
                                    borderRadius: 2,
                                    padding: '30px 40px'
                                }}>
                                    <Typography align='center' variant='h6' component='h6'>{e}</Typography>
                                </Box>
                            </Grid>
                        })
                    }
                    <Grid item xs={12}>
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
    );
}
export default ForwHomBox;