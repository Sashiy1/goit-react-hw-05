import ImageModal from "../ImageModal/ImageModal";
import Loader from "../Loader/Loader";
import ImageGallery from "../ImageGallery/ImageGallery";
import SearchBar from "../SearchBar/SearchBar";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import { useEffect, useState } from "react";

import { fetchPhotoByQuery } from "../services/api";
import Error from "../Error/Error";

function App() {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (!searchQuery) return;

    console.log(photos)

    async function fetchData(query, pageNum) {
      try {
        setIsLoading(true);
        setIsError(false);
        const data = await fetchPhotoByQuery(query, pageNum);
        setPhotos(prevPhotos => [...prevPhotos, ...data.results]);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    

    fetchData(searchQuery, page);
  }, [searchQuery, page, ]);

  const handleSearch = query => {
    setSearchQuery(query);
    setPage(1); 
    setPhotos([]); // Reset photos state to clear previous search results
  };

  const handleLoadPhotos = () => {
    setPage(prevPage => prevPage + 1); // Increment page number
    fetchData(searchQuery, page + 1); // Fetch data for the next page
  };

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {isError && <Error />}

      <ImageGallery photos={photos} />
      {isLoading && <Loader />}
      {photos.length > 0 &&  <LoadMoreBtn  handleLoadPhotos={handleLoadPhotos} />}
     
    </>
  );
}

export default App;
