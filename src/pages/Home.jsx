import Carousel from '../components/Home/Carousel';
import ContentSlider from '../components/Home/ContentSlider';
import Header from '../components/Home/Header';
import styles from '../styles/pages/Home.module.css';

function Home(){
    return (
        <div>
            <Carousel/>
            <Header/>
            <ContentSlider/>
        </div>
    )
}

export default Home;