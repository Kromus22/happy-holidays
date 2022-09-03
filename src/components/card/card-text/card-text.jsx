import { useSelector } from 'react-redux';
import style from './card-text.module.css';


function CardText() {
  const { text, loading } = useSelector(state => state.text);

  return (
    <p className={style.felicitation}>
      {loading === 'loading' ? 'Загрузка...' :
        text === '' ? 'Выберите повод для поздравления!' : text}
    </p>
  );
};

export default CardText;