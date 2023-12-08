import React from 'react';

const MyMessage = ({ message, imageStyle, messageStyle, messageClass, imageClass }) => {
  if (message?.attachments?.length > 0) {
    return (
      <img
        src={message.attachments[0].file}
        alt='message-attachments'
        className={`message-image ${imageClass || ''}`}
        style={{ float: 'right', ...imageStyle }}
      />
    );
  }

  return (
    <div
      className={`message ${messageClass || ''}`}
      style={{ float: 'right', marginRight: '18px', color: 'white', backgroundColor: '#3B2A50', ...messageStyle }}
      dangerouslySetInnerHTML={{ __html: message.text }}
    />
  );
};

export default MyMessage;
