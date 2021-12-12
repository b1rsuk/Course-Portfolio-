import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import PlaneAccardion from './PlaneAccardion';

const PlaneCourse = () => {
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
                        }} color='#05b1b1' gutterBottom>ПРОГРАММА КУРСА</Typography>
                    </Grid>
                </Grid>
                <Container maxWidth='lg'>
                  <Grid container justifyContent='center' mt={2}>
                      <Grid item md={3} mt={2} mr={2}>
                          <PlaneAccardion/>
                      </Grid>

                      <Grid item md={3} mt={2} mr={2}>
                          <PlaneAccardion/>
                      </Grid>

                      <Grid item md={3} mt={2} mr={2}>
                          <PlaneAccardion/>
                      </Grid>
                  </Grid>
                </Container>
        </Box>
    );
}

export default PlaneCourse;