import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchImageId } from '../../store/imgSlice';
import { fetchTextId } from '../../store/textSlice';
import CardImg from './card-img/card-img';
import CardText from './card-text/card-text';
import style from './card.module.css';


function Card() {
  const { idText, idImg } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (idText && idImg) {
      dispatch(fetchTextId(idText));
      dispatch(fetchImageId(idImg));
    }
  });

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