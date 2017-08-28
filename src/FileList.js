import React from 'react';
import PropTypes from 'prop-types';
import FileListItem from './FileListItem';

function FileList({files}) {
  const fileListItems = files.map((file) => {
    return (
      <FileListItem key={file.id} file={file}/>
    );
  });
  return (
    <div className='filelist'>
      {fileListItems}
    </div>
  );
}

FileList.propTypes = {
  files: PropTypes.array
};

export default FileList;
