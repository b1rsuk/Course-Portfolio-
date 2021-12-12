import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import author from '../../img/author.png';

const About = () => {
    return (
    <Container maxWidth='lg'>
        <Grid container alignItems='center'>
            <Grid item xs={12}>
                <Typography  variant='h5' component='h5'>Исмаил Усеинов</Typography>
            </Grid>
            <Grid item md={8} xs={12}>
                <Typography variant='h6' component='h6' sx={{
                    fontWeight: 10
                }}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut quibusdam assumenda, fuga eum magni id ipsam ducimus recusandae nostrum doloribus quisquam laboriosam quidem in vitae explicabo dolore? Distinctio, quidem tenetur.
                    <br/>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut quibusdam assumenda, fuga eum magni id ipsam ducimus recusandae nostrum doloribus quisquam laboriosam quidem in vitae explicabo dolore? Distinctio, quidem tenetur.
                    <br/>
                    <br/>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium fugit possimus vitae molestiae, ut eum nisi. Quam amet at dolorem rerum eum! Fuga ad labore numquam optio dolore nam qui.
                </Typography>
            </Grid>
            <Grid item md={4} xs={12}>
                <img src={author} alt="Исмаил Усеинов" width={300}/>
            </Grid>
        </Grid>
    </Container>
    );
}
export default About;