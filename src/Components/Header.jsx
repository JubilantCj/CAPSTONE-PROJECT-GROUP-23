import Logo from "../assets/Images/logo.png";
import PlanetImage from "../assets/Images/hero-section.png";


function Header() {
  return (
    <header className="header">
      {/* Logo */}
      <nav className="logo">
        <img src={Logo} alt="Logo" />{" "}
      </nav>

      {/* Hero section with two columns */}
      <section className="hero">
        {/* Left column */}
        <div className="hero-content">
          <h1>Explore Our Solar System Through Data</h1>
          <p>
            Understand the planets not just by name, but by measurable facts.
            From size and mass to gravity and density, this page breaks down the
            solar system in a clear, data-driven way.
          </p>

          <div className="Hero-buttons">
            <a href="#planetary-table-section" className="btn-primary ">
              Explore the Data
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Us
            </a>
          </div>
        </div>

        {/* Right column */}
        <div className="hero-image">
          <img src={PlanetImage} alt="Planet Image" />
        </div>
      </section>
    </header>
  );
}

export default Header;
