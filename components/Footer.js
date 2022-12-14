import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { BsGeoAltFill } from "react-icons/bs";
import { BsTelephoneFill } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.css';

const Footer= () => {
    return (
        <>
        <div className="footer">
            <div className="container pt-5 pb-3 px-0">
                <div className="row rowFooter">
                    <div className="md-footer col-6 col-sm-4 divFooter mt-0">
                        <Image
                        className="pb-2 ml-3"
                        src="/images/logo/logo-footer.png"
                        width={65}
                        height={70}
                        alt="logo"
                        ></Image>
                        <p className="letra-footer"><BsGeoAltFill className="footer-icono"/><Link href="https://www.google.com/maps/place/Costa+98,+Ampliacion+Los+Alpes,+%C3%81lvaro+Obreg%C3%B3n,+01710+Ciudad+de+M%C3%A9xico,+CDMX,+M%C3%A9xico/@19.3573815,-99.2113039,17z/data=!3m1!4b1!4m5!3m4!1s0x85d20015a02cb75f:0x1cfb8a66e56d176a!8m2!3d19.3573815!4d-99.2091152"><a className="text-white" target="_blank"> Costa 98 Colonia Ampliación los Alpes - <br /> Alcaldia Álvaro Obregón-CP 01710- México</a></Link></p>
                        <p className="letra-footer"><BsTelephoneFill className="footer-icono"/><span> (52) 55 5084 0174</span></p>
                        <p className="letra-footer"><BsFillEnvelopeFill className="footer-icono"/><span> contacto@corresponsabilidadsocialmx.org</span></p>
                    </div>
                    <div className="md-contacto col-6 col-sm-4 divFooter">
                        <h5 className="letra-footer">Redes Sociales</h5>        
                        <p className="letra-footer fb"><BsFacebook className="footer-icono"/><span> Facebook:</span></p>
                        <p className="letra-footer"><a className="text-white" href="https://www.facebook.com/csm.org.mx" rel="noreferrer" target="_blank">facebook.com/csm.org.mx</a></p>
                        <p className="letra-footer ins"><BsInstagram className="footer-icono"/><span> Instagram:</span></p>
                        <p className="letra-footer"><a className="text-white" href="https://www.instagram.com/corresponsabilidadsocialmx" rel="noreferrer" target="_blank">corresponsabilidadsocialmx</a></p>
                        <p className="letra-footer yout"><BsYoutube className="footer-icono"/><span> Youtube:</span></p>
                        <p className="letra-footer"><a className="text-white" href="https://www.youtube.com/channel/UCh0vbe17E2RDE_FOVrSmf0w" rel="noreferrer" target="_blank">Corresponsabilidad Social Mexicana</a></p>
                    </div>
                    <div className="md-footer col-6 col-sm-4 divFooter">
                        <p className="letra-footer"><em>&quot;Nuestro propósito es instrumentar acciones que construyan una cultura dirigida a la corresponsabilidad y la paz, desde el desarrollo, la prevención y dignificación de los derechos de niñas, niños, adolescentes y las mujeres.&quot;</em></p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer;