import { Container } from "react-bootstrap";
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Footer from "./components/Footer";
import Header from "./components/Header";
import Reserve from "./components/Reserve";
// import EventScreen from "./screens/EventScreen";
import EventScreen1 from "./screens/EventScreen1";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";

function App() {
  return (
    <>
    <Router>
    <Header/>
        
      <main className='py-3'>
   <Container>
     <Routes>
        <Route path='/' element= {<HomeScreen />} exact/>
        <Route path='/login' element={<LoginScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
              <Route path="/register" element={<RegisterScreen />} />
       <Route path= '/event/:id' element={<EventScreen1 />} />
       <Route path= '/reserve/:id' element={<Reserve />} />
       <Route path= '/cart/:id' element={<CartScreen />} />
       <Route path= '/tickets' element={<CartScreen />} />
        </Routes>
     </Container>
    </main>
    <Footer/>
    </Router>
    </>
  );
}

export default App;
