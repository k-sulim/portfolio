import { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../store/store';

export default function ProjectModal() {
  const dispatch = useDispatch();
  const { selectedProject } = useSelector((state) => state.ui);
  const modalRef = useRef(null);
  const contentRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') dispatch(closeModal());
    };
    document.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [dispatch]);

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [selectedProject]);

  const handleBackdropClick = (e) => {
    if (contentRef.current && !contentRef.current.contains(e.target)) {
      dispatch(closeModal());
    }
  };

  if (!selectedProject) return null;

  const images = selectedProject.images || [];
  const links = selectedProject.links || [];

  return (
    <div ref={modalRef} className="modal-backdrop" onClick={handleBackdropClick}>
      <div ref={contentRef} className="modal-content">
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-title-section">
            <span className="modal-category">{selectedProject.category.toUpperCase()}</span>
            <h2>{selectedProject.title}</h2>
            <p className="modal-meta">{selectedProject.period} · {selectedProject.role}</p>
          </div>
          <button className="modal-close" onClick={() => dispatch(closeModal())} aria-label="Close modal">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        <div className="modal-body">
          {/* 이미지 갤러리 */}
          {images.length > 0 && (
            <section className="modal-section modal-gallery">
              <div className="gallery-main">
                <img
                  src={images[currentImageIndex]}
                  alt={`${selectedProject.title} ${currentImageIndex + 1}`}
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>
              {images.length > 1 && (
                <div className="gallery-thumbnails">
                  {images.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`thumbnail ${idx + 1}`}
                      className={`gallery-thumb ${idx === currentImageIndex ? 'active' : ''}`}
                      onClick={() => setCurrentImageIndex(idx)}
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                  ))}
                </div>
              )}
            </section>
          )}

          {/* Summary + Tags */}
          <section className="modal-section">
            <p className="project-description">{selectedProject.summary}</p>
            <div className="modal-tags">
              {selectedProject.tags.map((tag, idx) => (
                <span key={idx} className="tag">{tag}</span>
              ))}
            </div>
          </section>

          {/* 링크 */}
          {links.length > 0 && (
            <section className="modal-section modal-links">
              <h3>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                </svg>
                관련 링크
              </h3>
              <div className="links-grid">
                {links.map((link, idx) => (
                  <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className="project-link">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15 3 21 3 21 9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                    {link.label}
                  </a>
                ))}
              </div>
            </section>
          )}

          {/* 배경 */}
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

          {/* 주요 기능 */}
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

          {/* 나의 역할 */}
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

          {/* 도전과 해결 */}
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

          {/* 성과 */}
          <section className="modal-section">
            <h3>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
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