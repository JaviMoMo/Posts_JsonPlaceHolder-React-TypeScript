import "./Footer.scss";

const Footer = () => {
    return (
        <div className="footer-contain">
            <ul className="contact-contain">
                <li className="card-contact">
                    <a href="mailto:javimorenomontejo@gmail.com">
                        <img src="https://cdn-icons-png.flaticon.com/512/80/80599.png" alt="email" />
                    </a>
                </li>
                <li className="card-contact">
                    <a href="tel:+34616938533">
                        <img src="https://cdn-icons-png.flaticon.com/512/159/159052.png" alt="phone" />
                    </a>
                </li>
                <li className="card-contact">
                    <a href="https://www.linkedin.com/in/javier-moreno-montejo-9a1442185/">
                        <img src="https://cdn-icons-png.flaticon.com/512/61/61109.png" alt="linkedin" />
                    </a>
                </li>
                <li className="card-contact">
                    <a href="https://github.com/javike19">
                        <img src="https://cdn-icons-png.flaticon.com/512/733/733609.png" alt="github" />
                    </a>
                </li>
            </ul>
            <div className="footer-text">
                <p>© 2021 - <b>Javier Moreno Montejo</b></p>
            </div>
            
        </div>
    )
}

export default Footer
