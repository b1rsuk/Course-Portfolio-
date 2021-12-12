import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import AppleIcon from '@mui/icons-material/Apple';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';

const AboutIcon = () => {
    const aboutIcon = [
        {ico: AccountBalanceIcon, title: 'Структурированный материал'},
        {ico: AccessTimeFilledIcon, title: 'Символическая цена'},
        {ico: AdminPanelSettingsIcon, title: 'Пожизненный доступ'},
        {ico: AppleIcon, title: 'Практические задания'},
        {ico: AutoStoriesIcon, title: '35 видео уроков (5 часов)'},
        {ico: AutoAwesomeMotionIcon, title: 'Просмотр со смартфона'},
    ];
    return (
            <Container maxWidth="lg">
                <Grid container spacing={8} mt={1}>
                            {
                                aboutIcon.map((e, index) => {
                                    return (  
                                        <Grid key={index} item xs={12} md={4}>
                                            <Box sx={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                            }}>
                                                <e.ico color='violet' sx={{
                                                    padding: 4,
                                                    border: '2px solid #52339a',
                                                    borderRadius: '50%',
                                                    fontSize: 40
                                                }}/>
                                            </Box>
                                            <Typography align='center' mt={1} sx={{
                                                fontSize: '1.25rem'
                                            }}>{e.title}</Typography>
                                            <Divider sx={{
                                                width: '50%',
                                                backgroundColor: '#52339a',
                                                margin: 'auto'
                                            }}/>
                                        </Grid>
                                    );
                             })
                            }
                </Grid>
            </Container>
    
    );
}

export default AboutIcon;