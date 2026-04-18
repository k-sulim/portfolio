import { useRef, useEffect, useState } from 'react';
import { useTimeline } from '../hooks/useApi';

export default function Timeline() {
  const { timeline, loading } = useTimeline();
  const timelineRef = useRef(null);
  const [visibleItems, setVisibleItems] = useState({});

  // Intersection Observer로 타임라인 아이템 애니메이션
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => ({
              ...prev,
              [entry.target.dataset.id]: true,
            }));
          }
        });
      },
      { threshold: 0.2 }
    );

    const items = document.querySelectorAll('.timeline-item');
    items.forEach((item) => observer.observe(item));

    return () => {
      items.forEach((item) => observer.unobserve(item));
    };
  }, [timeline]);

  const getTypeIcon = (type) => {
    switch (type) {
      case 'current':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <polyline points="12 6 12 12 16 14"/>
          </svg>
        );
      case 'project':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
          </svg>
        );
      case 'activity':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
          </svg>
        );
      case 'education':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
            <path d="M6 12v5c3 3 9 3 12 0v-5"/>
          </svg>
        );
      default:
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="4"/>
          </svg>
        );
    }
  };

  const getTypeLabel = (type) => {
    switch (type) {
      case 'current': return '진행 중';
      case 'project': return '프로젝트';
      case 'activity': return '활동';
      case 'education': return '교육';
      default: return '';
    }
  };

  if (loading) {
    return (
      <div className="timeline-page">
        <div className="container">
          <div className="loading-state">
            <div className="loading-spinner"></div>
            <p>타임라인을 불러오는 중...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="timeline-page">
      <div className="container">
        {/* Page Header */}
        <header className="page-header">
          <h1>Timeline</h1>
          <p className="page-subtitle">
            지금까지의 여정을 시간순으로 정리했습니다.
          </p>
        </header>

        {/* Timeline */}
        <div ref={timelineRef} className="timeline-container">
          <div className="timeline-line"></div>
          
          {timeline.map((item, index) => (
            <div
              key={item.id}
              data-id={item.id}
              className={`timeline-item ${item.type} ${visibleItems[item.id] ? 'visible' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="timeline-marker">
                <div className={`marker-dot ${item.type}`}>
                  {getTypeIcon(item.type)}
                </div>
              </div>
              
              <div className="timeline-content">
                <div className="timeline-header">
                  <span className="timeline-date">{item.date}</span>
                  <span className={`timeline-type ${item.type}`}>
                    {getTypeLabel(item.type)}
                  </span>
                </div>
                
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-description">{item.description}</p>
                
                {item.details && item.details.length > 0 && (
                  <ul className="timeline-details">
                    {item.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* 기억에 남는 순간 */}
        <section className="memorable-section">
          <h2>기억에 남는 순간</h2>
          <div className="memorable-content">
            <div className="quote-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" opacity="0.1">
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
              </svg>
            </div>
            <p>
              P실무 프로젝트에서 우리 팀이 만든 스마트 주차장 시스템이 실제로 작동하는 것을 
              처음 봤을 때의 감동을 잊을 수 없습니다.
            </p>
            <p>
              4주라는 짧은 시간 동안 밤새 작업하고, 수많은 에러와 씨름하며 만들어낸 결과물이
              화면에 나타났을 때, "아, 이래서 개발을 하는구나"라는 생각이 들었습니다.
            </p>
            <p>
              그리고 그 프로젝트로 1등과 우수상을 받았을 때, 팀원들과 함께 기뻐하던 순간은
              대학 생활에서 가장 값진 경험이었습니다.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}