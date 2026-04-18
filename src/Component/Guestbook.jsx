import { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useGuestbook } from '../hooks/useApi';

export default function Guestbook() {
  const { entries, loading } = useSelector((state) => state.guestbook);
  const { createEntry, removeEntry } = useGuestbook();
  
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  
  const nameInputRef = useRef(null);
  const messageInputRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    if (submitStatus === 'success' && messageInputRef.current) {
      messageInputRef.current.focus();
    }
  }, [submitStatus]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!message.trim()) {
      setSubmitStatus('error');
      messageInputRef.current?.focus();
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    const result = await createEntry(name, message);

    if (result.success) {
      setName('');
      setMessage('');
      setSubmitStatus('success');
      setTimeout(() => setSubmitStatus(null), 3000);
    } else {
      setSubmitStatus('error');
    }

    setIsSubmitting(false);
  };

  const handleDelete = async (id) => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      await removeEntry(id);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="guestbook-page">
      <div className="container">
        {/* Page Header */}
        <header className="page-header">
          <h1>Guestbook</h1>
          <p className="page-subtitle">
            방문해주셔서 감사합니다. 한마디 남겨주세요! 💬
          </p>
        </header>

        {/* Entry Form */}
        <section className="guestbook-form-section">
          <form ref={formRef} onSubmit={handleSubmit} className="guestbook-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">이름 (선택)</label>
                <input
                  ref={nameInputRef}
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="익명"
                  maxLength={20}
                />
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="message">메시지 *</label>
              <textarea
                ref={messageInputRef}
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="응원의 메시지를 남겨주세요..."
                rows={4}
                maxLength={500}
                required
              />
              <span className="char-count">{message.length}/500</span>
            </div>

            <button 
              type="submit" 
              className="submit-btn"
              disabled={isSubmitting || !message.trim()}
            >
              {isSubmitting ? (
                <>
                  <span className="btn-spinner"></span>
                  작성 중...
                </>
              ) : (
                <>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="22" y1="2" x2="11" y2="13"/>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                  </svg>
                  남기기
                </>
              )}
            </button>

            {submitStatus === 'success' && (
              <div className="status-message success">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                메시지가 등록되었습니다!
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="status-message error">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="15" y1="9" x2="9" y2="15"/>
                  <line x1="9" y1="9" x2="15" y2="15"/>
                </svg>
                메시지를 입력해주세요.
              </div>
            )}
          </form>
        </section>

        {/* Entries List */}
        <section className="guestbook-entries-section">
          <div className="entries-header">
            <h2>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
              방명록 ({entries.length})
            </h2>
          </div>

          {loading ? (
            <div className="loading-state">
              <div className="loading-spinner"></div>
              <p>방명록을 불러오는 중...</p>
            </div>
          ) : entries.length === 0 ? (
            <div className="empty-state">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
              <p>아직 방명록이 없습니다.</p>
              <p className="empty-sub">첫 번째 메시지를 남겨주세요!</p>
            </div>
          ) : (
            <div className="entries-list">
              {entries.map((entry, index) => (
                <article 
                  key={entry.id} 
                  className="entry-card"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="entry-header">
                    <div className="entry-author">
                      <div className="author-avatar">
                        {(entry.name || '익명').charAt(0).toUpperCase()}
                      </div>
                      <span className="author-name">{entry.name || '익명'}</span>
                    </div>
                    <time className="entry-date">{formatDate(entry.createdAt)}</time>
                  </div>
                  <p className="entry-message">{entry.message}</p>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(entry.id)}
                    aria-label="Delete entry"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="3 6 5 6 21 6"/>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                    </svg>
                  </button>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}