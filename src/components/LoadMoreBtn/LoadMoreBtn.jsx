import css from "./LoadMoreBtn.module.css";

function LoadMoreBtn({ handleLoadPhotos }) {
  
  return (
    <button className={css.loadButton} onClick={handleLoadPhotos} type="submit">
      Load More
    </button>
  );
}

export default LoadMoreBtn;
