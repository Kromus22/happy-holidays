import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchHolidays, setHoliday } from '../../../store/holidaysSlice';
import { fetchText } from '../../../store/textSlice';
import style from './chioces.module.css';


function Choices() {
  const [isOpenChoices, setIsOpenChoices] = useState(false);
  const { holiday, holidays, loading } = useSelector(state => state.holidays);
  const dispatch = useDispatch();


  const handleChangeChoices = () => {
    if (loading !== 'success') return
    setIsOpenChoices(!isOpenChoices);
  };

  useEffect(() => {
    dispatch(fetchHolidays());
  }, [dispatch]);

  return (
    <div className={style.wrapper}>
      <button className={style.button} onClick={handleChangeChoices}>
        {loading !== 'success' ?
          'Загрузка...' :
          holidays[holiday] || 'Выбрать праздник'}
      </button>
      {isOpenChoices && (
        <ul className={style.list}>
          {Object.entries(holidays).map(item => (
            <li
              className={style.item}
              key={item[0]}
              onClick={() => {
                dispatch(setHoliday(item[0]));
                dispatch(fetchText(item[0]));
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