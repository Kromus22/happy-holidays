import Container from '../container/container';
import style from './header.module.css';
import Choices from './choices/choices';

function Header() {
  return (
    <header className={style.header}>
      <Container>
        <div className={style.wrapper}>
          <div className={style.buttons}>
            <button className={style.button}>Поменять поздравление</button>
            <button className={style.button}>Поменять фон</button>
          </div>
          <Choices />
        </div>
      </Container>
    </header>
  );
};

export default Header;