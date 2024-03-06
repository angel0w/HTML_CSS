import './App.css';
import Blockquote from './Components/Blockquote.js';
import Content from './Components/Content.js';
import Copyright from './Components/Copyright.js';
import Footer from './Components/Footer.js';
import Header from './Components/Header.js';
import LastestWork from './Components/LastestWork.js';
import Nav from './Components/Nav.js';
import Slider from './Components/Slider.js';

function App() {
    return (
        <div>
            <Header />
            <Nav />
            <Slider />
            <Blockquote />
            <LastestWork />
            <Content />
            <Footer />
            <Copyright />
        </div>
    );
}

export default App;
