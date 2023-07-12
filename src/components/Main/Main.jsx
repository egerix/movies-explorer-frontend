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
            <AboutProject/>
            <Techs/>
            <AboutMe/>
            <Portfolio/>
        </main>
    );
}
