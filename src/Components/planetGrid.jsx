import React ,{useEffect} from "react"
export default function () {
    const [planets,setPlanets] = React.useState([])
    useEffect(() =>{
        fetch('https://anurella.github.io/json/planets.json')
        .then((res) => res.json())
        .then((data) => { 
            console.log('data' , data); 
            setPlanets(data)
    })
    .catch((err) => console.error(err));
   }, []);
       
 
    return (
        <section class="comparison-section">
            <h2>Visualizing the Differences Between Planets</h2>
            <p>Each planet in our solar system has unique physical characteristics. Visual comparisons help highlight
                how vastly different terrestrial planets are from gas giants and ice giants.</p>
            <div class="picture-comparison">
            {planets.map((planet)=>{
                return(
                    <div className="planet-card" key={planet.id}>
                        <img src={planet.image} alt={planet.name} />

                        <div className="planet-name">
                        <p>{planet.planet}</p>
                        <p>{planet.distanceFromSun}</p>
                        </div>

                    </div>
                )
            })}
            </div>
        </section>
    )
}