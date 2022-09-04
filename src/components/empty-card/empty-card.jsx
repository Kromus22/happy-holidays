import style from './empty-card.module.css';


function EmptyCard() {
  return (
    <div className={style.card}>
      <p>Выберите повод для поздравления!</p>
    </div>
  );
};

export default EmptyCard;