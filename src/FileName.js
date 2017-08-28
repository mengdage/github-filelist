import React from 'react';
import PropTypes from 'prop-types';

function FileName({name}) {
  return (
    <span className='file-name'>name: {name}</span>
  );
}

FileName.propTypes = {
  name: PropTypes.string.isRequired
};

export default FileName;
