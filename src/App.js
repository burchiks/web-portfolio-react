import styles from "./styles/main.css"
import Navbar from "./components/nav/Navbar";
import Footer from "./components/footer/Footer";
import ProjectBig from "./pages/ProjectBig";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import ScrollToTop from "./utils/scrollToTop";
function App() {
    return (
        <div className="App">
            <Router>
                <ScrollToTop/>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                    <Route path="/contacts" element={<Contacts/>}/>
                    <Route path="/projectBig/:id" element={<ProjectBig/>}/>
                </Routes>
                <Footer/>

            </Router>

            <script src="./js/main.js"></script>

        </div>
    );
}

export default App;
