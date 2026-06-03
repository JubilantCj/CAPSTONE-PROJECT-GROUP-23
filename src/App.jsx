import Header from './Components/Header';
import PlanetData from './Components/PlanetData';
import ContactForm from './Components/ContactForm';
import PlanetGrid from './Components/planetGrid'
import PlanetaryTable from './Components/PlanetaryTable';
import Footer from './Components/Footer';
import './App.css';

export default function App() {
  return (
    <>
      <Header />
      <PlanetData />
      <PlanetGrid />
      <PlanetaryTable />
      <ContactForm />
      <Footer />
    </>
  );
}


