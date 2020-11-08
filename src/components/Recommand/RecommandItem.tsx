import React, { FunctionComponent } from 'react';
import classnames from 'classnames';

interface recommandInfoType {
  name: string;
  genre: string;
  imageUrl: string;
}

const RecommandItem: FunctionComponent<recommandInfoType> = (props) => {
  const { name, genre, imageUrl } = props;

  return (
    <div className={classnames('c-recommand-item')}>
      <img
        className={classnames('c-recommand-item-image')}
        src={imageUrl}
        alt={name}
      />
      <div className={classnames('c-recommand-item-name')}>{name}</div>
      <div className={classnames('c-recommand-item-genre')}>{genre}</div>
    </div>
  );
};

export default RecommandItem;
