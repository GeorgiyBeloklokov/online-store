import { Link } from 'react-router-dom';
import style from './Page404.module.css';
import { PAGE_NOT_FOUND } from '../../utils/constants';

const Page404 = () => {
  return (
    <div className={style.page}>
      <div className={style.notFound}>
        <div className={style.notFoundTitle}>
          <h1>{PAGE_NOT_FOUND.title}</h1>
          <h2>{PAGE_NOT_FOUND.subTitle}</h2>
        </div>
        <Link className={style.link} to="/">
          {PAGE_NOT_FOUND.linkTitle}
        </Link>
      </div>
    </div>
  );
};

export default Page404;
