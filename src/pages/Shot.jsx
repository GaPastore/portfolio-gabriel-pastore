import Carousel from '../components/Shot/Carousel';
import ContentSlider from '../components/Shot/ContentSlider';
import Header from '../components/Shot/Header';
import styles from '../styles/pages/Home.module.css';

function Shot(){
    return (
        <div>
            <Carousel/>
            <Header/>
            <ContentSlider/>
        </div>
    )
}

export default Shot;