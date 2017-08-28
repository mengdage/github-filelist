import React from 'react';
import PropTypes from 'prop-types';

function FileIcon({type}) {
  let icon = '';
  switch(type) {
    case 'folder':
      icon = 'fa fa-folder-o';
      break;
    default:
      icon = 'fa fa-file-text-o';
  }

  return (
    <span className='file-icon'><i className={icon}/></span>
  );

};

FileIcon.propTypes = {
  type: PropTypes.string
};

export default FileIcon;
