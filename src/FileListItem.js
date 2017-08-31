import React from 'react';
import PropTypes from 'prop-types';
import FileIcon from './FileIcon';
import FileName from './FileName';
import CommitMessage from './CommitMessage';
import Time from './Time';

function FileListItem({file}) {
  return(
    <div className='filelist-item'>
      <div className='name-icon'>
        <FileIcon type={file.type}/>
        <FileName name={file.name}/>
      </div>
      <div className='message-body'>
        <CommitMessage commit={file.latestCommit}/>
      </div>
      <div className='time-tag'>
        <Time time={file.updated_at} />
      </div>
    </div>
  );
}

FileListItem.propTypes = {
  file: PropTypes.object.isRequired
};

export default FileListItem;
