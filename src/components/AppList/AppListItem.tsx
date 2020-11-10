import React, { FunctionComponent, useEffect, useState } from 'react';
import { Rating } from '@material-ui/lab';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import classnames from 'classnames';
import { getAppDetail } from '@api';
import { isEven } from '@util';
import { AppInfoType } from '@types';

const AppListItem: FunctionComponent<AppInfoType> = (props) => {
  const { name, genre, imageUrl, ranking, id } = props;
  const [appInfo, setAppInfo] = useState({
    name,
    genre,
    ranking,
    imageUrl,
    rating: 0,
    reviews: 0,
  });
  useEffect(() => {
    const fetchData = async (appId: string) => {
      const response = await getAppDetail({ appId });
      const { results } = response;
      const { averageUserRating, userRatingCount } = results[0];
      setAppInfo({
        ...appInfo,
        rating: averageUserRating,
        reviews: userRatingCount,
      });
    };
    fetchData(id);
  }, [id, appInfo]);
  return (
    <li className={classnames('c-applist-item')}>
      <div className={classnames('c-applist-item-ranking')}>
        {appInfo.ranking}
      </div>
      <img
        className={classnames('c-applist-item-image', {
          'app-even-ranking': isEven(ranking),
        })}
        src={appInfo.imageUrl}
        alt={appInfo.name}
      ></img>
      <div className={classnames('c-applist-item-info')}>
        <div className={classnames('c-applist-item-name')}>{appInfo.name}</div>
        <div className={classnames('c-applist-item-genre')}>
          {appInfo.genre}
        </div>
        <div className={classnames('c-applist-item-rating')}>
          <Rating
            name="read-only"
            size="small"
            value={appInfo.rating}
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
          >{`(${appInfo.reviews})`}</div>
        </div>
      </div>
    </li>
  );
};

export default AppListItem;
