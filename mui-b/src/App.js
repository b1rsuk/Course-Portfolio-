import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import 'normalize.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './components/Header/Header';
import AboutCourse from './components/AboutCourse/AboutCourse';
import ForwHom from './components/ForwHom/ForwHom';
import PlaneCourse from './components/PlaneCourse/PlaneCourse';
import Author from './components/Author/Author';
import Reviews from './components/Reviews/Reviews';
import BuyCourse from './components/BuyCourse/BuyCourse';
import BottomBar from './components/BottomBar/BottomBar';

const theme = createTheme({
  palette: {
    violet: {
      main: '#52339a',
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header/>
      <AboutCourse/>
      <ForwHom/>
      <PlaneCourse/>
      <Author/>
      <Reviews/>
      <BuyCourse/>
      <BottomBar/>
    </ThemeProvider>
  );
}

export default App;
