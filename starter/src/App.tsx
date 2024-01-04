import Banner from "./components/Banner";
import DetailsBlock from "./components/DetailsBlock";
import Footer from "./components/Footer";
import PlacesContainer from "./components/PlacesContainer";
import "./css/main.scss";

const App: React.FC = () => {
  return (
    <div className="App">
      < Banner />
      < DetailsBlock 
        title="Stores of Adventure"
        src="https://thebornwanderess.com/wp-content/uploads/2022/09/TBW-Blog-Feature-Image-BEST-WATERFALLS-IN-BALI-600x600.jpg"
       />
      < PlacesContainer />
      < DetailsBlock 
        title="Popular Adventures"
        src="https://picsum.photos/seed/picsum/600/600"
       />
       < Footer />
    </div>
  );
};

export default App;

