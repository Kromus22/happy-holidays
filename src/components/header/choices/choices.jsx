import { useState } from 'react';
import style from './chioces.module.css'

const holidays = {
  newyear: 'Новый год',
  birthdayWoman: 'День рождения  Ж',
  birthdayMan: 'День рождения  М',
  womanday: '8 марта',
  knowledgeday: 'День знаний',
};

function Choices() {
  const [isOpenChoices, setIsOpenChoices] = useState(false);
  const [holiday, setHoliday] = useState('Выбрать праздник')

  const handleChangeChoices = () => {
    setIsOpenChoices(!isOpenChoices);
  };

  const handleChangeHoliday = (title) => {
    setHoliday(title);
    handleChangeChoices();
  };

  return (
    <div className={style.wrapper}>
      <button className={style.button} onClick={handleChangeChoices}>{holiday}</button>
      {isOpenChoices && (
        <ul className={style.list}>
          {Object.entries(holidays).map(item => (
            <li
              className={style.item}
              key={item[0]}
              onClick={() => {
                handleChangeHoliday(item[1])
              }}
            >
              {item[1]}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Choices;