import './Banner.css'
import BannerImg from '../../images/banner.png'

export const Banner = () => {
    return (
        <header className="banner">
            <img src={BannerImg} alt="O banner principal da página do Organo"/>
        </header>
    )
}