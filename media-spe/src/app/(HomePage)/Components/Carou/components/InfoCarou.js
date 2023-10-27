import style from "../carousel.module.scss";

function InfoCarou({ article, index, currentCarou }) {
  return (
    <>
      <p className={index === currentCarou ? style.current : ""}></p>
    </>
  );
}

export default InfoCarou;
