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
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPhotoUrl, setSelectedPhotoUrl] = useState(null); 

  useEffect(() => {
    if (!searchQuery) return;

    async function fetchData(query, pageNum) {
      try {
        setIsLoading(true);
        setIsError(false);
        const data = await fetchPhotoByQuery(query, pageNum);
        setPhotos((prevPhotos) => [...prevPhotos, ...data.results]);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData(searchQuery, page);
  }, [searchQuery, page]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    setPage(1);
    setPhotos([]); // Reset photos state to clear previous search results
  };

  const handleLoadPhotos = (fetchData) => {
    setPage((prevPage) => prevPage + 1);
    fetchData(searchQuery, page + 1);
  };

  

  const openModal = (photoUrl) => {
    setSelectedPhotoUrl(photoUrl) 
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };


  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {isError && <Error />}

      <ImageGallery photos={photos} openModal={openModal} />
      {isLoading && <Loader />}
      {photos.length > 0 && <LoadMoreBtn handleLoadPhotos={handleLoadPhotos} />}
      <ImageModal isOpen={isOpen} closeModal={closeModal} photoUrl={selectedPhotoUrl} />
    </>
  );
}

export default App;
