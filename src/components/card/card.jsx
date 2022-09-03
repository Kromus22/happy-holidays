import CardImg from './card-img/card-img';
import CardText from './card-text/card-text';
import style from './card.module.css';


function Card() {
  return (
    <div className={style.card}>
      <div className={style.wrapper}>
        <div className={style.image}>
          <CardImg />
          <CardText />
        </div>
      </div>
    </div>
  );
};

export default Card;