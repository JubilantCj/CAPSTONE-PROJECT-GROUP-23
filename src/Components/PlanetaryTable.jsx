import '../App.css';

export default function PlanetaryTable() {
  return (
    <div className="table-data">
      <h2>Planetary Facts at a Glance</h2>
      <p>Below is a comparison table of major planets showing key metrics.</p>

      <table border="1" cellSpacing="0" cellPadding="8">
        <tbody>
          <tr>
            <th colSpan="2"></th>
            <th>Name</th>
            <th>Mass (10 24kg)</th>
            <th>Diameter (km)</th>
            <th>Density (kg/m3)</th>
            <th>Gravity (m/s2)</th>
          </tr>

          {/* Terrestrial Planets */}
          <tr>
            <td rowSpan="4" colSpan="2" className="category-header">Terrestrial Planets</td>
            <td>Mercury</td>
            <td>0.330</td>
            <td>4,878</td>
            <td>5427</td>
            <td>3.7</td>
          </tr>
          <tr>
            <td>Venus</td>
            <td>0.330</td>
            <td>4,878</td>
            <td>5427</td>
            <td>3.7</td>
          </tr>
          <tr>
            <td>Earth</td>
            <td>0.330</td>
            <td>4,878</td>
            <td>5427</td>
            <td>3.7</td>
          </tr>
          <tr>
            <td>Mars</td>
            <td>0.330</td>
            <td>4,878</td>
            <td>5427</td>
            <td>3.7</td>
          </tr>

          {/* Jovian Planets */}
          <tr>
            <td rowSpan="4" className="category-header">Jovian Planets</td>
            <td rowSpan="2" className="subcategory">Gas Giants</td>
            <td>Jupiter</td>
            <td>0.330</td>
            <td>4,878</td>
            <td>5427</td>
            <td>3.7</td>
          </tr>
          <tr>
            <td>Saturn</td>
            <td>0.330</td>
            <td>4,878</td>
            <td>5427</td>
            <td>3.7</td>
          </tr>
          <tr>
            <td rowSpan="2" className="subcategory">Ice Giants</td>
            <td>Uranus</td>
            <td>0.330</td>
            <td>4,878</td>
            <td>5427</td>
            <td>3.7</td>
          </tr>
          <tr>
            <td>Neptune</td>
            <td>0.330</td>
            <td>4,878</td>
            <td>5427</td>
            <td>3.7</td>
          </tr>

          {/* Dwarf Planets */}
          <tr>
            <td colSpan="2" className="category-header">Dwarf Planets</td>
            <td>Pluto</td>
            <td>0.330</td>
            <td>4,878</td>
            <td>5427</td>
            <td>3.7</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}