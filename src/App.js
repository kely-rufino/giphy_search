import "./App.css";
import { useEffect, useState } from "react";

const API_KEY = process.env.REACT_APP_API_KEY;

function App() {
  const [gifList, setGifList] = useState([]);
  const [searchCriteria, setSearchCriteria] = useState("");

  useEffect(() => {
    const searchGiphy = async () => {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchCriteria}&limit=10&offset=0&rating=g&lang=en`
      );
      const data = await response.json();
      setGifList(data.data || []);
    };
    searchGiphy();
  }, [searchCriteria]);

  return (
    <div className="App">
      <header className="App-header">
        <input
          onChange={(e) => {
            setSearchCriteria(e.target.value);
          }}
          type="text"
          id="name"
          name="name"
        />
        <div className="searchResults">
          {gifList.map((gif) => {
            return <img src={gif.images.preview_gif.url} alt="" />;
          })}
        </div>
      </header>
    </div>
  );
}

export default App;
