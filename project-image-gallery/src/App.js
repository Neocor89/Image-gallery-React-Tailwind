import { useState, useEffect } from "react";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";

function App() {
  const [images, setImages] = useState([]);
  const [isLoadind, setIsLoadind] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoadind(false);
      })
      .catch((error) => console.log(error));
    // Pour rappeler à nouveau la fetch request utilisation du useState term
  }, [term]);

  return (
    <div className="container mx-auto">
      <ImageSearch searchText={(text) => setTerm(text)} />

      {!isLoadind && images.length === 0 && <h1 className="text-4xl h-96 flex justify-center items-center text-red-400 font-mono">Not images available</h1>}

      {isLoadind ? (
        <h1 className="text-6xl text-center mx-auto mt-2">Loading...</h1>
      ) : (
        <div className="grid grid-cols-3 gap-4 bg-stone-100 rounded">
          {images.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
