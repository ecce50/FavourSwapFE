import SearchBar from "../components/SearchBar";
import '../App.css';


function HomePage() {
  return (
    <div>

      <h1>Skill Ƨwap</h1>

      <h4>Find Your Next Skill</h4>
      <SearchBar/>

      <h4>Want to Teach Others?</h4>
      <a href="/profile">Get Started!</a>



    </div>
  );
}

export default HomePage;