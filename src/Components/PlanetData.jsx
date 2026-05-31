import PlanetVideo from '../assets/Videos/PlanetVideo.mp4';

function PlanetData() {
    return (
        <section className='data-section'>
            <div className='data-section-text'>
                <h2> How Planetary Data Helps Us Understand Space</h2>
                <p>
                    Planetary science goes beyond images. Comparing
                     <strong> mass, diameter, gravity</strong> and 
                    <strong>density,</strong> we gain insight into how planets form,
                    behave, and interact within the solar system.
                </p>
            </div>

            <div className='video-container'>
                <video
                    src={PlanetVideo}

                    controls autoPlay loop muted>

                    Your browser does not support the video tag.
                    </video>
            </div>
        </section>
    );
}
export default PlanetData;