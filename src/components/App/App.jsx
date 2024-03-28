// import { Formik ErrorMessage } from "formik"
import ImageModal from "../ImageModal/ImageModal"
import Loader from "../Loader/Loader"
import ImageGallery from "../ImageGallery/ImageGallery"
import SearchBar from "../SearchBar/SearchBar"
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn"


function App() {
  return (
    <>
    <ImageModal />
    {/* <ErrorMessage  /> */}
    <Loader />
    <ImageGallery />
    <SearchBar />
    <LoadMoreBtn />

    </>
  )
}

export default App
