import React from 'react';
import Shimmer from './Shimmer';
import SkeletonElement from './SkeletonElement';

const SkeletonRoundCard = ({ theme, avatar }) => {
  const themeClass = theme || 'light';

  return (
    <div className={`skeleton-wrapper ${themeClass}`}>
      <div className='skeleton-profile round-skeleton'>
        <div>
          <SkeletonElement type='avatar' />
        </div>
        <div className="round-spacing">
          <SkeletonElement type='title' />
          <SkeletonElement type='text' />
          <SkeletonElement type='text' />
          <SkeletonElement type='text' />
        </div>
      </div>
      <Shimmer />
    </div>
  );
};

export default SkeletonRoundCard;
