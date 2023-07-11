import './Main.css';
import Header from "../Header/Header";
import Promo from "../Promo/Promo";
import AboutMe from "../AboutMe/AboutMe";
import Footer from "../Footer/Footer";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import Portfolio from "../Portfolio/Portfolio";

export default function Main() {
    return (
        <main className='main'>
            <div className="main__green">
                <Header color='green'/>
                <Promo/>
            </div>
            <AboutProject/>
            <Techs/>
            <AboutMe/>
            <Portfolio/>
            <Footer/>
        </main>
    );
}
