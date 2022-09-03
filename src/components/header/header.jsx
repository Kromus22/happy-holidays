import Container from '../container/container';
import style from './header.module.css';
import Choices from './choices/choices';
import { useDispatch, useSelector } from 'react-redux';
import { fetchText } from '../../store/textSlice';

function Header() {
  const dispatch = useDispatch();
  const { holiday } = useSelector(state => state.holidays);

  return (
    <header className={style.header}>
      <Container>
        <div className={style.wrapper}>
          <div className={style.buttons}>
            <button
              className={style.button}
              disabled={!holiday}
              onClick={() => {
                dispatch(fetchText(holiday))
              }}
            >
              Поменять поздравление
            </button>
            <button className={style.button}>Поменять фон</button>
          </div>
          <Choices />
        </div>
      </Container>
    </header>
  );
};

export default Header;