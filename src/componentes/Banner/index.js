import './banner.css'
import BannerImg from '../../images/banner.png'

const Banner = () => {
    return (<header className="cabecalho">
        <img src={BannerImg} alt='Logo do Organo'/>
    </header>)
}

export default Banner