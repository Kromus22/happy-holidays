import { useContext, useState } from 'react';
import { holidaysContext } from '../../../context/holidaysContext';
import style from './chioces.module.css';


function Choices() {
  const [isOpenChoices, setIsOpenChoices] = useState(false);
  const { holidays, holiday, handleChangeHoliday } = useContext(holidaysContext);


  const handleChangeChoices = () => {
    setIsOpenChoices(!isOpenChoices);
  };


  return (
    <div className={style.wrapper}>
      <button className={style.button} onClick={handleChangeChoices}>
        {holidays[holiday] || 'Выбрать праздник'}
      </button>
      {isOpenChoices && (
        <ul className={style.list}>
          {Object.entries(holidays).map(item => (
            <li
              className={style.item}
              key={item[0]}
              onClick={() => {
                handleChangeHoliday(item[0]);
                handleChangeChoices();
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