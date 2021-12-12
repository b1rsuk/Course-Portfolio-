import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import preview from '../../img/preview.png';

const BuyCourse = () => {
    const list = [
        '35 практических уроков',
        'Продолжительность 5 часов',
        'Готовые примеры кода',
        'Никаких ограничений по времени',
        '7 домашних заданий'
    ];
    const buttonList = [
        'НА UDEMY',
        'НА STEPIK'
    ];
    return (
        <Box as='section' sx={{
            padding:  '150px 0',
        }}>
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant="h4" component="h4" align='center' sx= {{
                                    fontStyle: '20px',
                                    fontWeight: 'bold'
                    }} color='#05b1b1' gutterBottom>КУПИТЬ КУРС ПО HTML & CSS</Typography>
                </Grid>
                <Grid item xs={12} md={7}>
                    <img src={preview} alt="book" style={{
                            width: '90%',
                            height: 'auto',
                    }}/>
                </Grid>
                <Grid item xs={12} md={5} mt={7}>
                    <Typography variant='h6' align='center' component='h6' sx={{
                            fontWeight: 10
                    }}>
                        Обучающий курс по изучению языка гипертекстовой разметки HTML и каскадных таблиц стилей CSS от автора образовательного канала ITDoctor. Это практический видеокурс: в каждой главе теоретический материал будет закрепляться множеством наглядных примеров кода.
                    </Typography>
                    <Typography variant='ul' component='ul' mt={8}>
                        {
                            list.map((e, index) => <Typography key={index} variant='li' component='li' sx={{
                                fontWeight: 550,
                            }}>{e}</Typography>)
                        }
                    </Typography>
                    {
                        buttonList.map((e, index) =>
                        <Button key={index} sx={{
                            display: 'block',
                            margin: 'auto',
                            marginTop: 3,
                            color: '#fff',
                            width: 180,
                            height: 50,
                            fontSize: 18,
                          }} variant="contained" color='violet'>{e}</Button>
                          )
                    }
                </Grid>
            </Grid>
        </Box>
    );
}
export default BuyCourse;