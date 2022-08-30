import Container from '../container/container';
import style from './footer.module.css';
import { ReactComponent as VKIcon } from '../../img/Vector-1.svg';
import { ReactComponent as TGIcon } from '../../img/Vector-2.svg';
import { ReactComponent as PIIcon } from '../../img/Vector.svg';
import { ReactComponent as STIcon } from '../../img/Group.svg';

function Footer() {
  return (
    <footer className={style.footer}>
      <Container>
        <div className={style.wrapper}>
          <div className={style.contacts}>
            <p>Design: <a href='https://t.me/Mrshmallowww'>Anastasia Ilina</a></p>
            <p>Сoder: <a href='https://t.me/Kromus275'>Kromus</a></p>
            <p>© HBCard, 2022</p>
          </div>
          <ul className={style.social}>
            <li className={style.item}>
              <a className={style.link} href='https://vk.com'>
                <VKIcon />
              </a>
            </li>
            <li className={style.item}>
              <a className={style.link} href='https://t.me'>
                <TGIcon />
              </a>
            </li>
            <li className={style.item}>
              <a className={style.link} href='https://pinterest.com'>
                <PIIcon />
              </a>
            </li>
            <li className={style.item}>
              <a className={style.link} href='https://stumbleupon.com'>
                <STIcon />
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  )
};

export default Footer;