import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export default function Index() {
  const heroRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const textRef = useRef(null);
  const [displayText, setDisplayText] = useState('');
  const fullText = '개발을 알고, 기획을 사랑하는';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`index-page ${isVisible ? 'visible' : ''}`}>
      <section ref={heroRef} className="hero">
        <div className="hero-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="grid-overlay"></div>
        </div>

        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            PM · 서비스 기획 준비 중
          </div>

          <h1 className="hero-title">
            <span className="greeting">안녕하세요,</span>
            <span className="name">
              <span className="name-highlight">김수림</span>입니다.
            </span>
          </h1>

          <p className="hero-subtitle" ref={textRef}>
            <span className="typing-text">{displayText}</span>
            <span className="cursor">|</span>
          </p>

          <p className="hero-description">
            컴퓨터공학을 전공하며 백엔드 개발과 서비스 기획 역량을 함께 키워왔습니다.
            <br />
            4개 프로젝트에서 기획을 직접 맡으며 개발자에서 기획자로 전환했습니다.
          </p>

          <div className="hero-cta">
            <Link to="/projects" className="btn btn-primary">
              <span>프로젝트 보기</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </Link>
            <Link to="/about" className="btn btn-secondary">
              About Me
            </Link>
          </div>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">4</span>
            <span className="stat-label">프로젝트 기획 경험</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">2</span>
            <span className="stat-label">수상 경력</span>
          </div>
        </div>

        <div className="scroll-indicator">
          <span>Scroll</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      <section className="quick-info">
        <div className="container">
          <div className="info-grid">
            <div className="info-card">
              <div className="info-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                </svg>
              </div>
              <h3>Education</h3>
              <p>가천대학교</p>
              <p className="info-sub">컴퓨터공학과 졸업 (2025.02)</p>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10"/>
                  <polygon points="10 8 16 12 10 16 10 8"/>
                </svg>
              </div>
              <h3>Interest</h3>
              <p>서비스 기획 · PM</p>
              <p className="info-sub">데이터 분석 · B2C 서비스</p>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3>Tech Stack</h3>
              <p>Java · Spring Boot · SQL</p>
              <p className="info-sub">Python · ERD 설계 · Figma</p>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-preview">
        <div className="container">
          <div className="section-header">
            <h2>Featured Projects</h2>
            <Link to="/projects" className="view-all">
              전체 보기
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </Link>
          </div>

          <div className="featured-grid">
            <div className="featured-card">
              <div className="featured-number">01</div>
              <h3>iCatch — AI CCTV 케어 플랫폼</h3>
              <p>독거노인·반려동물 보호자 두 사용자군의 불안을 하나의 서비스로 해결</p>
              <div className="featured-tags">
                <span>팀장</span>
                <span>기획 리드</span>
                <span>Spring Boot</span>
                <span>IoT</span>
              </div>
            </div>

            <div className="featured-card">
              <div className="featured-number">02</div>
              <h3>스마트 주차 안내 시스템</h3>
              <p>현장 관찰로 문제를 발견하고 YOLO AI로 해결 — 최우수상·우수상 수상</p>
              <div className="featured-tags">
                <span>아이디어 기획</span>
                <span>YOLO</span>
                <span>Raspberry Pi</span>
                <span>수상</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}