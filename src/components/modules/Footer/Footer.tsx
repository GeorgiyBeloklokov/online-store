import { LINK_TO_THE_COURSE } from '../../utils/constants';
import style from './Footer.module.css';

export const develops = [
  {
    id: 1,
    name: 'Georgiy Beloklokov',
    link: 'https://github.com/georgiybeloklokov',
  },
  {
    id: 2,
    name: 'Natalya Polyakova',
    link: 'https://github.com/Skave-a',
  },
];

export const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.dev}>
        {develops.map((develop) => (
          <div key={develop.id}>
            <a className={style.github} href={develop.link} target="_blank" rel="noreferrer">
              {develop.name}
            </a>
          </div>
        ))}
      </div>
      <a className={style.rss} href={LINK_TO_THE_COURSE} target="_blank" rel="noreferrer">
        <span className={style.year}>2022</span>
      </a>
    </div>
  );
};
