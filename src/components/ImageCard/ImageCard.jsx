import { GrInstagram } from "react-icons/gr";
import css from "./ImageCard.module.css";

function ImageCard({ photo }) {
  // console.log(photo);
  return (
    <li className={css.galleryItem} key={photo.id}>
      <img
        src={photo.urls.small}
        width={300}
        height={200}
        alt={photo.alt_description}
      />
      <div className={css.galleryItemDesc}>
        <p>Author: {photo.user.name}</p>
        <a href={`https://www.instagram.com/${photo.user.instagram_username}/`}>
          <GrInstagram />
        </a>
      </div>
    </li>
  );
}

export default ImageCard;
