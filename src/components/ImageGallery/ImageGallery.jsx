import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

function ImageGallery({ photos, openModal}) {
  // console.log(photos);
  return (
    <ul className={css.gallery}>
      {photos !== null &&
        Array.isArray(photos) &&
        photos.map((photo) => {
          return (
            <li  className={css.galleryItem} key={photo.id}>
              <ImageCard photo={photo} key={photo.id}  openModal={openModal}/>
            </li>
          );
        })}
    </ul>
  );
}

export default ImageGallery;
