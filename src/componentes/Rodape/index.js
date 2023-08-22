import './rodape.css'
import Fb from '../../images/fb.png'
import Tw from '../../images/tw.png'
import Ig from '../../images/ig.png'
import Logo from '../../images/logo.png'

const Rodape = () => {
return (
<footer className="footer">
    <section>
        <ul>
            <li>
                <a href="facebook.com" target="_blank">
                    <img src={Fb} alt="" />
                </a>
            </li>
            <li>
                <a href="twitter.com" target="_blank">
                    <img src={Tw} alt="" />
                </a>
            </li>
            <li>
                <a href="instagram.com" target="_blank">
                    <img src={Ig} alt="" />
                </a>
            </li>
        </ul>
    </section>
    <section>
        <img src={Logo} alt="" />
    </section>
    <section>
        <p>
            Desenvolvido por Alura.
        </p>
    </section>
</footer>)
}

export default Rodape