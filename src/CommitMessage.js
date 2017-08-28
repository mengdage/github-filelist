import React from 'react';
import PropTypes from 'prop-types';

function CommitMessage({commit}) {
  return (
    <span className='commit-message'>{commit.message}</span>
  );
}

CommitMessage.propTypes = {
  commit: PropTypes.shape({
    message: PropTypes.string
  })
};

export default CommitMessage;
