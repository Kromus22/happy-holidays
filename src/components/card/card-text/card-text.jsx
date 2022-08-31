import { useContext } from 'react';
import { textContext } from '../../../context/textContext';
import style from './card-text.module.css';


function CardText() {
  const { text } = useContext(textContext);

  return (
    <p className={style.felicitation}>
      {text}
    </p>
  );
};

export default CardText;