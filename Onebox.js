// src/components/Onebox.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Onebox.css';
import ReplyBox from './ReplyBox';

const Onebox = () => {
  const [threads, setThreads] = useState([]);
  const [selectedThread, setSelectedThread] = useState(null);

  useEffect(() => {
    fetchThreads();
  }, []);

  const fetchThreads = async () => {
    try {
      const response = await axios.get('/onebox/list');
      setThreads(response.data);
    } catch (error) {
      console.error("Failed to fetch threads:", error);
    }
  };

  const handleDelete = async (threadId) => {
    try {
      await axios.delete(`/onebox/${threadId}`);
      setThreads(threads.filter(thread => thread.id !== threadId));
    } catch (error) {
      console.error("Failed to delete thread:", error);
    }
  };

  const handleReset = async () => {
    try {
      await axios.get('/onebox/reset');
      fetchThreads(); // Refresh the thread list after reset
    } catch (error) {
      console.error("Failed to reset onebox:", error);
    }
  };

  return (
    <div className="onebox-container">
      <h1 className="onebox-title">Onebox</h1>
      <button onClick={handleReset} className="reset-button">Reset</button>
      <div className="thread-list">
        {threads.length > 0 ? (
          threads.map(thread => (
            <div key={thread.id} className="thread-item">
              <div className="thread-info">
                <span className="thread-subject">{thread.subject}</span>
                <span className="thread-date">{new Date(thread.date).toLocaleDateString()}</span>
              </div>
              <div className="thread-actions">
                <button onClick={() => handleDelete(thread.id)} className="delete-button">Delete</button>
                <button onClick={() => setSelectedThread(thread)} className="reply-button">Reply</button>
              </div>
            </div>
          ))
        ) : (
          <p className="no-threads">No threads available</p>
        )}
      </div>
      {selectedThread && <ReplyBox threadId={selectedThread.id} />}
    </div>
  );
};

export default Onebox;
