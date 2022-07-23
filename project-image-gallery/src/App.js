import { useState, useEffect } from "react";
import ImageCard from './components/ImageCard';

function App() {
  const [images, setImages] = useState([]);
  const [isLoadind, setIsLoadind] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
    .then(res => res.json())
    .then(data => {
      setImages(data.hits);
      setIsLoadind(false);
    })
    .catch(error => console.log(error));
  }, []);

  return (
    <div className="container mx-auto">
      {isLoadind ? <h1 className="text-6xl text-center mx-auto mt-2"></h1> : <div className="grid grid-cols-3 gap-4 bg-stone-100 rounded">
        {images.map(image => (
          <ImageCard key={image.id} image={image} />
        ))}
      </div>}
    </div>
  );
}

export default App;
