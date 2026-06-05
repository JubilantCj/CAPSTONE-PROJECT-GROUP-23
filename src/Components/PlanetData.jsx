import PlanetVideo from '../assets/Videos/PlanetVideo.mp4';

function PlanetData() {
    return (
          <section className='data-section'>
            <div className='data-section-content'>
                
                {/* Left Side: Video Container */}
                <div className='video-container'>
                    <video src={PlanetVideo} controls autoPlay loop muted>
                        Your browser does not support the video tag.
                    </video>
                </div>

                {/* Right Side: Text Content */}
                <div className='data-section-text'>
                    <h2>How Planetary Data Helps Us <br className="desktop-only" /> Understand Space</h2>
                    <p>
                        Planetary science goes beyond images. Comparing{' '}
                        <span className="highlight">mass</span>,{' '}
                        <span className="highlight">diameter</span>,{' '}
                        <span className="highlight">gravity</span>, and{' '}
                        <span className="highlight">density</span>, we gain insight into how planets form,
                        behave, and interact within the solar system.
                    </p>
                </div>

            </div>
        </section>

    );
       
}
export default PlanetData;