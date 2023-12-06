import React from 'react';

const Tag = ({ title, text, imageSrc }) => {
  return (
    <div className='ourServiceTag'>
      <div className='ourServiceImgBg'>
        <i className='ourServiceIcon'><img src={imageSrc} alt="" className="ourServiceImg"/></i>
      </div>
      <div className='ourServiceContentBox'>
        <h3 className='ourServiceContentTitle'>{title}</h3>
        <p className='ourServiceContent'>{text}</p>
      </div>
    </div>
  );
};

export default Tag;
