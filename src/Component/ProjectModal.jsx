import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../store/store';

export default function ProjectModal() {
  const dispatch = useDispatch();
  const { selectedProject } = useSelector((state) => state.ui);
  
  // useRef - 모달 컨텐츠 참조 (외부 클릭 감지)
  const modalRef = useRef(null);
  const contentRef = useRef(null);

  // ESC 키로 모달 닫기
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        dispatch(closeModal());
      }
    };

    document.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [dispatch]);

  // 모달 외부 클릭 시 닫기
  const handleBackdropClick = (e) => {
    if (contentRef.current && !contentRef.current.contains(e.target)) {
      dispatch(closeModal());
    }
  };

  if (!selectedProject) return null;

  return (
    <div 
      ref={modalRef} 
      className="modal-backdrop"
      onClick={handleBackdropClick}
    >
      <div ref={contentRef} className="modal-content">
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-title-section">
            <span className="modal-category">{selectedProject.category.toUpperCase()}</span>
            <h2>{selectedProject.title}</h2>
            <p className="modal-meta">
              {selectedProject.period} · {selectedProject.role}
            </p>
          </div>
          <button 
            className="modal-close"
            onClick={() => dispatch(closeModal())}
            aria-label="Close modal"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          {/* Summary */}
          <section className="modal-section">
            <p className="project-description">{selectedProject.summary}</p>
            <div className="modal-tags">
              {selectedProject.tags.map((tag, idx) => (
                <span key={idx} className="tag">{tag}</span>
              ))}
            </div>
          </section>

          {/* Background */}
          <section className="modal-section">
            <h3>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 16v-4"/>
                <path d="M12 8h.01"/>
              </svg>
              프로젝트 배경
            </h3>
            <p>{selectedProject.background}</p>
          </section>

          {/* Features */}
          <section className="modal-section">
            <h3>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
              주요 기능
            </h3>
            <div className="features-grid">
              {selectedProject.features.map((feature, idx) => (
                <div key={idx} className="feature-item">
                  <h4>{feature.name}</h4>
                  <p>{feature.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* My Role */}
          <section className="modal-section">
            <h3>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
              나의 역할
            </h3>
            <ul className="role-list">
              {selectedProject.myRole.map((role, idx) => (
                <li key={idx}>{role}</li>
              ))}
            </ul>
          </section>

          {/* Challenge */}
          <section className="modal-section challenge-section">
            <h3>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
              </svg>
              기술적 도전과 해결
            </h3>
            <div className="challenge-content">
              <div className="challenge-item problem">
                <span className="challenge-label">문제</span>
                <p>{selectedProject.challenge.problem}</p>
              </div>
              <div className="challenge-item solution">
                <span className="challenge-label">해결</span>
                <p>{selectedProject.challenge.solution}</p>
              </div>
              <div className="challenge-item result">
                <span className="challenge-label">결과</span>
                <p>{selectedProject.challenge.result}</p>
              </div>
            </div>
          </section>

          {/* Achievements */}
          <section className="modal-section">
            <h3>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 15l-2 5l9-9l-9-9l2 5"/>
                <circle cx="12" cy="12" r="10"/>
              </svg>
              성과 및 배운 점
            </h3>
            <ul className="achievements-list">
              {selectedProject.achievements.map((achievement, idx) => (
                <li key={idx}>{achievement}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
