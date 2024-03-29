import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

function ImageGallery({ photos }) {
  return (
    <ul className={css.gallery}>
      {photos !== null &&
        Array.isArray(photos) &&
        photos.map((photo) => {
          return <ImageCard photo={photo} key={photo.id} />;
        })}
    </ul>
  );
}

export default ImageGallery;
