import Grid from '@mui/material/Grid';
import people from '../../img/people.jpg';
import Typography from '@mui/material/Typography';

const Comment = () => {
    return (
        <Grid container justifyContent='center' mt={5}>
            <Grid item xs={12} sx={{
                display: 'flex',
                justifyContent: 'center',
            }}>
                <img src={people} style={{
                    border: '2px solid #05b1b1',
                    borderRadius: '50%'
                }} alt='Кристина Трибой'/>
                
                <Typography variant='h6' component='h6' sx={{
                    fontWeight: 10
                }}>
                </Typography>
            </Grid>

            <Grid item xs={12} sm={5} mt={2}>
              <Typography variant='h6' align='center' component='h6' sx={{
                    fontWeight: 10,
                }}>
                    Исмаил, спасибо Вам большое! Очень толковый курс у Вас получился, обучение прошло легко и интересно. Узнала много нового, отдельное спасибо за большое количество полезной информации в конце, очень пригодится в работе и сэкономит много времени. Очень рада, что открыла для себя Ваш канал.
              </Typography>
                <br/>
                <Typography variant='h6' align='center' component='h6' sx={{
                    fontWeight: 10,
                }}>
                    Мне есть с чем сравнить, т.к. начала обучение с 0 по книгам и другим источникам в интернете 6 месяцев назад и уроки на канале ITDoctor могу смело назвать лучшими для новичков. Пересмотрела уже почти все, они очень качественные, хорошо продуманные, не затянутые. Автор всегда на связи, отвечает на вопросы, помогает - просто фантастика! ITDoctor - это уже бренд! С чем Вас, Исмаил и поздравляю!
                </Typography>
            </Grid>
        </Grid>
    );
}

export default Comment;