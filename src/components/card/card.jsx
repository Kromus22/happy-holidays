import CardImg from './card-img/card-img';
import CardText from './card-text/card-text';
import style from './card.module.css';
import CardBG from '../../img/card-bg.jpg';

function Card() {
  return (
    <div className={style.card}>
      <div className={style.wrapper}>
        <div className={style.image}>
          <CardImg img={CardBG} />
          <CardText />
        </div>
      </div>
    </div>
  );
};

export default Card;