import ImageModal from "../ImageModal/ImageModal";
import Loader from "../Loader/Loader";
import ImageGallery from "../ImageGallery/ImageGallery";
import SearchBar from "../SearchBar/SearchBar";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import { useEffect, useState } from "react";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { fetchPhotoByQuery } from "../services/api";

function App() {
  const [photos, setPhotos] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); 

  useEffect(() => {
    if (!searchQuery) return; 
    async function fetchData(query) {
      try {
        setIsLoading(true);
        setIsError(false);

        const data = await fetchPhotoByQuery(query); 

        setPhotos(data.results);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData(searchQuery); // 
  }, [searchQuery]);
  

  const handleSearch = (query) => {
    setSearchQuery(query); 
  };


  return (
    <>
      <SearchBar onSubmit={handleSearch}  /> 
      {/* <ImageModal /> */}
      {isError && <ErrorMessage />}
      {isLoading && <Loader />}
      <ImageGallery photos={photos} />

      {/* <LoadMoreBtn /> */}
    </>
  );
}

export default App;
