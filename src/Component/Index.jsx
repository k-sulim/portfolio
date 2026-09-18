import { useEffect, useState } from "react";

const PROJECTS = [
  {
    num: "01",
    title: "iCatch — AI CCTV 케어 플랫폼",
    tags: ["팀장", "기획 리드", "Spring Boot", "IoT"],
    to: "#icatch",
  },
  {
    num: "02",
    title: "스마트 주차 안내 시스템",
    tags: ["아이디어 기획", "YOLO", "Raspberry Pi", "수상"],
    to: "#parking",
  },
  {
    num: "03",
    title: "Farm2You — 농수산물 직거래 플랫폼",
    tags: ["기획", "UI 설계", "Spring Boot"],
    to: "#farm2you",
  },
  {
    num: "04",
    title: "GrowMe — 식물 관리 앱",
    tags: ["기획", "Android", "IoT 센서"],
    to: "#growme",
  },
];

export default function Index() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className={`index-page ${visible ? "visible" : ""}`}>

      {/* Giant PORTFOLIO banner */}
      <section className="hero-banner">
        <span className="hero-giant-title">PORTFOLIO</span>
        <div className="hero-tagline">
          <span className="hero-tagline-star">✻</span>
          <span className="hero-tagline-text">
            개발을 알고, 기획을 사랑하는 서비스 기획자
          </span>
        </div>
      </section>

      {/* Intro — text left, photo right */}
      <section className="intro-section">
        <div className="intro-left">
          <p className="intro-greeting">안녕하세요,</p>

          <div className="intro-role-line">
            <span className="intro-badge">성장하는</span>
            <p className="intro-role-text">서비스 기획자</p>
          </div>

          <h1 className="intro-name">
            <em>김수림</em>입니다.
          </h1>

          <p className="intro-desc">
            컴퓨터공학을 전공하며 백엔드 개발과 서비스 기획 역량을 함께
            키워왔습니다. 4개 프로젝트에서 기획을 직접 맡으며 개발자에서
            기획자로 전환했습니다.
          </p>

          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              프로젝트 보기
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
            <a href="#about" className="btn btn-secondary">
              About Me
            </a>
          </div>
        </div>

        <div className="intro-right">
          <div className="profile-photo-frame">
            <img
              src={process.env.PUBLIC_URL + "/images/증명사진.jpg"}
              alt="김수림 프로필"
            />
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <div className="hero-stats-bar">
        <div className="stats-inner">
          <div className="stat-item">
            <span className="stat-number">4</span>
            <span className="stat-label">프로젝트 기획 경험</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">2</span>
            <span className="stat-label">수상 경력</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">584+</span>
            <span className="stat-label">봉사 시간</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">4년+</span>
            <span className="stat-label">카페 현장 경험</span>
          </div>
        </div>
      </div>

      {/* Featured projects */}
      <section className="featured-section">
        <div className="featured-section-header">
          <h2>Featured Projects</h2>
          <a href="#projects" className="btn btn-secondary" style={{ fontSize: 13, padding: "6px 16px" }}>
            전체 보기 →
          </a>
        </div>

        <div className="featured-list">
          {PROJECTS.map((p) => (
            <a key={p.num} href={p.to} className="featured-list-item">
              <span className="feat-num">{p.num}</span>
              <div className="feat-body">
                <div className="feat-title">{p.title}</div>
                <div className="feat-tags">
                  {p.tags.map((t) => (
                    <span key={t} className="feat-tag">{t}</span>
                  ))}
                </div>
              </div>
              <svg className="feat-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
