
function Footer() {
    return (
        <footer className="main-footer">
            <div className="footer-container">

                {/* Top Section: About */}
                <div className="footer-top">
                    <h3 className="footer-heading">About</h3>
                    <p className="footer-text">
                        Crafted with passion by TSAcademy Group23; Efeadi, Moremi, Geralds, Chris Morgan, Manny, Kollins , ife , Jane, Akogun, Asaolu, Brian. This project stands as a testament to transforming ideas into functional software.
                    </p>
                </div>

                <hr className="footer-divider" />

                {/* Bottom Section: Copyright & Links */}
                <div className="footer-bottom">
                    <div className="footer-left">
                        <p>
                            &copy;2026 Design by{' '}
                            <a href="https://amakandukwu.com/" target="_blank" rel="noopener noreferrer" className="footer-link">
                                Amaka
                            </a>{' '}
                            &amp;{' '}
                            <a href="https://www.linkedin.com/in/ifeomaokocha" target="_blank" rel="noopener noreferrer" className="footer-link">
                                Ifeoma A.
                            </a>
                        </p>
                        <p>
                            Built by{' '}
                            <a href="https://github.com/JubilantCj/CAPSTONE-PROJECT-GROUP-23" target="_blank" rel="noopener noreferrer" className="footer-link">
                                Group23
                            </a>
                            . All rights reserved
                        </p>
                    </div>

                    <div className="footer-right">
                        <a href="https://tsacademyonline.com/" target="_blank" rel="noopener noreferrer" className="footer-logo-link">
                            TSAcademy
                        </a>
                    </div>
                </div>

            </div>
        </footer>


    );
}
export default Footer;
