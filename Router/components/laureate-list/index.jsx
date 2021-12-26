import * as React from 'react';

import styles from './laureate-list.module.css';

import Avatar from '../avatar';
import { Prizes } from './prizes';
import { Link,useRouteMatch } from 'react-router-dom';

const LaureateList = ({ laureates }) => {
const { url } = useRouteMatch();
  
  return laureates.length > 0 ? (
    <ul>
      {laureates.map(({ id, firstname, surname, prizes }) => (
        <li key={id}>
          <Link to={`${url}/${id}`} className={styles.link}>

          <Avatar firstname={firstname} surname={surname} className={styles.avatar} />
          <div>
            <h3>
              {firstname} {surname}
            </h3>
            <Prizes prizes={prizes} />
          </div>

        </Link>
        </li>
      ))}
    </ul>
  ) : (
    <p className={styles.empty}>No results were found</p>
  );
};

export default LaureateList;