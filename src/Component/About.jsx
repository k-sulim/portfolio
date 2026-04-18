import { useRef, useEffect, useState } from 'react';

export function About() {
  const introRef = useRef(null);
  const valuesRef = useRef(null);
  const whyMeRef = useRef(null);
  const [visibleSections, setVisibleSections] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleSections((prev) => ({
                ...prev,
                [entry.target.id]: true,
              }));
            }
          });
        },
        {threshold: 0.1}
    );

    const sections = [introRef.current, valuesRef.current, whyMeRef.current];
    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
      <div className="about-page">
        <div className="container">
          {/* Page Header */}
          <header className="page-header">
            <h1>About Me</h1>
            <p className="page-subtitle">
              개발을 알고, 기획을 사랑하는 PM
            </p>
          </header>

          {/* Introduction Section */}
          <section
              ref={introRef}
              id="intro"
              className={`about-section ${visibleSections.intro ? 'visible' : ''}`}
          >
            <div className="section-content">
              <div className="intro-text">
                <h2>소개</h2>
                <p>
                  안녕하세요, <strong>개발자로 시작해 기획자로 성장한 김수림</strong>입니다.
                </p>
                <p>
                  컴퓨터공학을 전공하며 Java, Spring Boot, React 등 다양한 기술 스택을 다뤄왔습니다.
                  하지만 프로젝트를 이끌면서 <em>'왜 이 기능이 필요한가'</em>, <em>'사용자에게 어떤 가치를 줄 수 있는가'</em>를
                  고민하는 것이 더 맞는다는 걸 알게 됐습니다.
                </p>
                <p>
                  당근은 중고거래와 부동산까지 일상적으로 사용하는 유저로서,
                  서비스를 쓰는 사람의 시선으로 문제를 바라보는 게 자연스럽습니다.
                  기술을 이해하면서도 사용자와 비즈니스 관점에서 생각할 수 있는 것이 저의 강점입니다.
                </p>
              </div>

              <div className="profile-card">
                <div className="profile-image">
                  <div className="profile-placeholder">
                    <span>KSL</span>
                  </div>
                </div>
                <div className="profile-info">
                  <h3>김수림</h3>
                  <p>가천대학교 컴퓨터공학과 졸업 (2025.02)</p>
                  <p className="profile-tag">서비스 기획 · PM · 데이터 분석</p>
                  <div className="profile-links">
                    <a href="mailto:joy06270@naver.com">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                        <polyline points="22,6 12,13 2,6"/>
                      </svg>
                      Email
                    </a>
                    <a href="https://github.com/k-sulim" target="_blank" rel="noopener noreferrer">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path
                            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section
              ref={valuesRef}
              id="values"
              className={`about-section ${visibleSections.values ? 'visible' : ''}`}
          >
            <h2>가치관</h2>
            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 8v4l3 3"/>
                  </svg>
                </div>
                <h3>빠른 실행과 반복</h3>
                <p>
                  완벽한 기획보다 빠른 가설 검증이 더 효과적이라는 것을 프로젝트를 통해 배웠습니다.
                  빠르게 실행하고, 빠르게 배우고, 빠르게 개선합니다.
                </p>
              </div>

              <div className="value-card">
                <div className="value-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <h3>사용자 중심</h3>
                <p>
                  기술은 수단이며, 진짜 목표는 사용자에게 실질적인 가치를 전달하는 것입니다.
                  4년간의 카페 경험으로 현장에서 유저를 이해하는 시각을 키웠습니다.
                </p>
              </div>

              <div className="value-card">
                <div className="value-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                    <path d="M2 17l10 5 10-5"/>
                    <path d="M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <h3>데이터 기반 의사결정</h3>
                <p>
                  감이 아닌 데이터로 문제를 정의하고, 지표로 결과를 검증합니다.
                  ERD 설계부터 SQL 분석까지, 데이터 구조를 이해하는 기획자입니다.
                </p>
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section className="about-section education-section">
            <h2>Education</h2>
            <div className="education-card">
              <div className="edu-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                </svg>
              </div>
              <div className="edu-content">
                <h3>가천대학교 컴퓨터공학과</h3>
                <p className="edu-period">2024.03 – 2025.02 (학사 졸업 · 편입)</p>
                <ul className="edu-details">
                  <li>
                    <strong>주요 과목:</strong> 고급 웹 프로그래밍(React), 데이터 처리 프로그래밍(Python), 운영체제
                  </li>
                  <li>
                    <strong>활동:</strong> 코드인 개발 동아리, 구름톤 유니브 4기 기획 파트
                  </li>
                  <li>
                    <strong>수상:</strong> P-학기제 최우수상, P-학기제 학생경진대회 우수상
                  </li>
                </ul>
              </div>
            </div>
            <div className="education-card">
              <div className="edu-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                </svg>
              </div>
              <div className="edu-content">
                <h3>한양여자대학교 스마트IT과</h3>
                <p className="edu-period">2020.03 – 2023.01 (전문학사 졸업)</p>
                <ul className="edu-details">
                  <li>
                    <strong>주요 과목:</strong> 자료구조, 알고리즘, 데이터베이스, 네트워크
                  </li>
                  <li>
                    <strong>자격증:</strong> 네트워크관리사 2급 취득, GTQ 포토샵 1급 취득
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Why Me Section */}
          <section
              ref={whyMeRef}
              id="whyMe"
              className={`about-section ${visibleSections.whyMe ? 'visible' : ''}`}
          >
            <h2>Why Me?</h2>
            <div className="why-me-grid">
              <div className="why-card">
                <span className="why-number">01</span>
                <h3>데이터 구조를 이해하는 기획자</h3>
                <p>
                  4개 프로젝트 모두 DB 설계(ERD, 테이블 관계·PK·타입)를 직접 담당했습니다.
                  SQL 쿼리 작성과 ADSP 자격증 준비를 통해 데이터를 기획에 연결하는 역량을 키우고 있습니다.
                  <strong>테이블 구조를 이해하는 기획자</strong>로서 개발팀과 데이터 기반으로 소통할 수 있습니다.
                </p>
              </div>

              <div className="why-card">
                <span className="why-number">02</span>
                <h3>B2C 양면 시장 기획 경험</h3>
                <p>
                  Farm2you(생산자-소비자)와 iCatch(독거노인·반려동물 보호자)에서
                  두 사용자군의 니즈를 동시에 분석하고 기능 구조를 설계한 경험이 있습니다.
                  <strong>당근 Local Deal의 사장님-이웃 연결 구조</strong>와 동일한 양면 시장을 직접 기획해본 기획자입니다.
                </p>
              </div>

              <div className="why-card">
                <span className="why-number">03</span>
                <h3>현장에서 배운 유저 공감력</h3>
                <p>
                  4년간 카페 파트타임을 하며 수백 명의 고객을 응대하고 그들의 니즈를 파악하는 법을 배웠습니다.
                  <strong>서비스를 쓰는 사람의 시선으로 문제를 바라보는 것</strong>이 자연스러운 기획자입니다.
                </p>
              </div>
            </div>
          </section>

          {/* Personal Story */}
          <section className="about-section story-section">
            <h2>기획자가 된 계기</h2>
            <div className="story-content">
              <p>
                처음에는 백엔드 개발자가 되고 싶었습니다. Java와 Spring Boot로 API를 만들고,
                DB를 설계하는 일이 좋았습니다.
              </p>
              <p>
                그런데 프로젝트를 이끌면서 생각이 바뀌었습니다.
                스마트 주차 시스템을 기획할 때, <strong>"이 기능이 왜 필요한가"</strong>를 가장 먼저 고민한 사람이 저였고,
                그 질문이 프로젝트의 방향을 결정했습니다.
              </p>
              <p>
                개발보다 그 방향을 결정하는 일이 더 재미있었습니다.
                그때부터 기획자로서의 길을 명확히 정하게 됐고,
                구름톤 유니브 기획 파트에 들어가 본격적으로 서비스 기획을 배웠습니다.
              </p>
              <p>
                개발을 알기 때문에 실현 가능한 기획을 할 수 있고,
                유저를 알기 때문에 필요한 기획을 할 수 있습니다.
                그것이 저의 강점입니다.
              </p>
            </div>
          </section>
        </div>
      </div>
  );
}