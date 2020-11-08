import React, { FunctionComponent } from 'react';
import { Rating } from '@material-ui/lab';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import classnames from 'classnames';
import { isEven } from '@util';

interface appInfoType {
  name: string;
  genre: string;
  imageUrl: string;
  ranking: number;
}

const AppListItem: FunctionComponent<appInfoType> = (props) => {
  const { name, genre, imageUrl, ranking } = props;
  return (
    <li className={classnames('c-applist-item')}>
      <div className={classnames('c-applist-item-ranking')}>{ranking}</div>
      <img
        className={classnames('c-applist-item-image', {
          'app-even-ranking': isEven(ranking),
        })}
        src={imageUrl}
        alt={name}
      ></img>
      <div className={classnames('c-applist-item-info')}>
        <div className={classnames('c-applist-item-name')}>{name}</div>
        <div className={classnames('c-applist-item-genre')}>{genre}</div>
        <div className={classnames('c-applist-item-rating')}>
          <Rating
            name="read-only"
            size="small"
            value={3}
            readOnly
            emptyIcon={
              <StarBorderIcon
                className={classnames('c-applist-item-empty-star')}
                fontSize="inherit"
              />
            }
          />
          <div
            className={classnames('c-applist-item-reviews')}
          >{`(${70})`}</div>
        </div>
      </div>
    </li>
  );
};

export default AppListItem;
