// src/components/ReplyBox.js
import React, { useState } from 'react';
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './ReplyBox.css';

const ReplyBox = ({ threadId }) => {
  const [reply, setReply] = useState({ from: '', to: '', subject: '', body: '' });

  const handleReplySend = async () => {
    try {
      await axios.post(`/onebox/reply/${threadId}`, reply);
      // Handle successful reply, e.g., close the reply box or show a success message
      setReply({ from: '', to: '', subject: '', body: '' }); // Clear form after sending
    } catch (error) {
      console.error("Failed to send reply:", error);
    }
  };

  return (
    <div className="reply-box">
      <h2 className="reply-title">Reply to Thread</h2>
      <input
        type="email"
        placeholder="From"
        value={reply.from}
        onChange={(e) => setReply({ ...reply, from: e.target.value })}
        className="reply-input"
      />
      <input
        type="email"
        placeholder="To"
        value={reply.to}
        onChange={(e) => setReply({ ...reply, to: e.target.value })}
        className="reply-input"
      />
      <input
        type="text"
        placeholder="Subject"
        value={reply.subject}
        onChange={(e) => setReply({ ...reply, subject: e.target.value })}
        className="reply-input"
      />
      <ReactQuill
        value={reply.body}
        onChange={(content) => setReply({ ...reply, body: content })}
        className="reply-editor"
      />
      <button onClick={handleReplySend} className="send-button">Send Reply</button>
    </div>
  );
};

export default ReplyBox;
