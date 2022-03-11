import { Container } from "react-bootstrap";
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Footer from "./components/Footer";
import Header from "./components/Header";
// import EventScreen from "./screens/EventScreen";
import EventScreen1 from "./screens/EventScreen1";
//import HomePageImg from "./components/HomePageImg";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <>
    <Router>
    <Header/>
        {/* <HomePageImg/> */}
      <main className='py-3'>
   <Container>
     <Routes>
       < Route path='/' element={<HomeScreen />} exact />
       <Route path= '/event/:id' element={<EventScreen1 />} />
     </Routes>
     </Container>
    </main>
    <Footer/>
    </Router>
    </>
  );
}

export default App;
