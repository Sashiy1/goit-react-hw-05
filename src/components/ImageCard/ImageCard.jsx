import { GrInstagram } from "react-icons/gr";
import css from "./ImageCard.module.css";



function ImageCard({ photo, openModal }) {
  return (
    <div>
      <img
        onClick={() => openModal(photo.urls.full)}
        src={photo.urls.small}
        width={300}
        height={200}
        alt={photo.alt_description}
      />
      <div className={css.galleryItemDesc}>
        <p>Автор: {photo.user.name}</p>
        <a
          href={`https://www.instagram.com/${photo.user.instagram_username}/`}
        >
          <GrInstagram className={css.cardSVG} />
        </a>
      </div>
    </div>
  );
}

export default ImageCard;
