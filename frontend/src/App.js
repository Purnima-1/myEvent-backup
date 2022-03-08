import { Container } from "react-bootstrap";
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Footer from "./components/Footer";
import Header from "./components/Header";
//import HomePageImg from "./components/HomePageImg";
import HomeScreen from "./screens/HomeScreen";


function App() {
  return (
    <>
    <Router>
    <Header/>
        {/* <HomePageImg/> */}
      <main>
   <Container>
     <Routes>
       < Route path='/' element={<HomeScreen />} />
     </Routes>
     </Container>
    </main>
    <Footer/>
    </Router>
    </>
  );
}

export default App;
