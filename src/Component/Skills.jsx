import { useMemo, useState, useRef, useEffect } from 'react';
import { useSkills } from '../hooks/useApi';

export default function Skills() {
  const { skills, loading } = useSkills();
  const [sortBy, setSortBy] = useState('default'); // 'default', 'proficiency', 'name'
  const skillsRef = useRef(null);
  const [visibleSkills, setVisibleSkills] = useState({});

  // Intersection Observer로 스킬 카드 애니메이션
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSkills((prev) => ({
              ...prev,
              [entry.target.dataset.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.skill-card');
    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, [skills, sortBy]);

  // ============================================
  // useMemo - 스킬 정렬 연산 최적화
  // sortBy가 변경될 때만 재계산
  // ============================================
  const sortedSkills = useMemo(() => {
    console.log('📊 Sorting skills... (useMemo 실행)');
    
    const skillsCopy = [...skills];
    
    switch (sortBy) {
      case 'proficiency':
        return skillsCopy.sort((a, b) => b.proficiency - a.proficiency);
      case 'name':
        return skillsCopy.sort((a, b) => a.category.localeCompare(b.category));
      default:
        return skillsCopy;
    }
  }, [skills, sortBy]);

  // ============================================
  // useMemo - 가장 숙련된 스킬 계산
  // ============================================
  const topSkill = useMemo(() => {
    if (skills.length === 0) return null;
    return skills.reduce((max, skill) => 
      skill.proficiency > max.proficiency ? skill : max
    , skills[0]);
  }, [skills]);

  // ============================================
  // useMemo - 평균 숙련도 계산
  // ============================================
  const averageProficiency = useMemo(() => {
    if (skills.length === 0) return 0;
    const total = skills.reduce((sum, skill) => sum + skill.proficiency, 0);
    return Math.round(total / skills.length);
  }, [skills]);

  const getCategoryIcon = (category) => {
    const icons = {
      'Backend': (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
      ),
      'Data Analysis & AI': (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
          <polyline points="7.5 4.21 12 6.81 16.5 4.21"/>
          <polyline points="7.5 19.79 7.5 14.6 3 12"/>
          <polyline points="21 12 16.5 14.6 16.5 19.79"/>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
          <line x1="12" y1="22.08" x2="12" y2="12"/>
        </svg>
      ),
      'Database': (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <ellipse cx="12" cy="5" rx="9" ry="3"/>
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
        </svg>
      ),
      'Languages': (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="16 18 22 12 16 6"/>
          <polyline points="8 6 2 12 8 18"/>
        </svg>
      ),
      'Frontend': (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
          <line x1="3" y1="9" x2="21" y2="9"/>
          <line x1="9" y1="21" x2="9" y2="9"/>
        </svg>
      ),
      'DevOps & Tools': (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3"/>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
        </svg>
      ),
      'Collaboration': (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
    };
    return icons[category] || icons['Languages'];
  };

  if (loading) {
    return (
      <div className="skills-page">
        <div className="container">
          <div className="loading-state">
            <div className="loading-spinner"></div>
            <p>스킬 정보를 불러오는 중...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="skills-page">
      <div className="container">
        {/* Page Header */}
        <header className="page-header">
          <h1>Skills</h1>
          <p className="page-subtitle">
            프로젝트와 공부를 통해 익힌 기술들입니다.
          </p>
        </header>

        {/* Skills Stats */}
        <div className="skills-stats">
          <div className="stat-card">
            <span className="stat-value">{skills.length}</span>
            <span className="stat-label">기술 분야</span>
          </div>
          <div className="stat-card highlight">
            <span className="stat-value">{topSkill?.category || '-'}</span>
            <span className="stat-label">가장 자신 있는 분야</span>
          </div>
          <div className="stat-card">
            <span className="stat-value">{averageProficiency}%</span>
            <span className="stat-label">평균 숙련도</span>
          </div>
        </div>

        {/* Sort Controls */}
        <div className="skills-controls">
          <span>정렬:</span>
          <div className="sort-buttons">
            <button
              className={sortBy === 'default' ? 'active' : ''}
              onClick={() => setSortBy('default')}
            >
              기본
            </button>
            <button
              className={sortBy === 'proficiency' ? 'active' : ''}
              onClick={() => setSortBy('proficiency')}
            >
              숙련도순
            </button>
            <button
              className={sortBy === 'name' ? 'active' : ''}
              onClick={() => setSortBy('name')}
            >
              이름순
            </button>
          </div>
        </div>

        {/* Skills Grid */}
        <div ref={skillsRef} className="skills-grid">
          {sortedSkills.map((skill, index) => (
            <div
              key={skill.id}
              data-id={skill.id}
              className={`skill-card ${visibleSkills[skill.id] ? 'visible' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="skill-header">
                <div className="skill-icon">
                  {getCategoryIcon(skill.category)}
                </div>
                <h3 className="skill-category">{skill.category}</h3>
              </div>
              
              <ul className="skill-items">
                {skill.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              <div className="skill-proficiency">
                <div className="proficiency-header">
                  <span>숙련도</span>
                  <span>{skill.proficiency}%</span>
                </div>
                <div className="proficiency-bar">
                  <div 
                    className="proficiency-fill"
                    style={{ width: `${skill.proficiency}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Skills */}
        <section className="skills-detail-section">
          <h2>상세 설명</h2>
          
          <div className="detail-card">
            <h3>가장 자신 있는 기술</h3>
            <h4>Spring Boot</h4>
            <p>
              백엔드 개발의 핵심 프레임워크로, RESTful API 설계 및 구현 경험이 있습니다.
              JPA를 활용한 데이터베이스 연동과 Spring Security를 통한 인증/인가 구현이 가능합니다.
              팀 프로젝트에서 백엔드 아키텍처 설계를 주도했습니다.
            </p>
          </div>

          <div className="detail-card">
            <h3>현재 공부 중인 기술</h3>
            <h4>데이터 분석 & AI/ML</h4>
            <p>
              백엔드 개발 경험을 바탕으로 데이터 분석과 인공지능 분야로 확장하고 있습니다.
              Python으로 데이터 전처리, 시각화, 머신러닝 모델 학습을 공부하고 있으며,
              실제 프로젝트에서 수집한 데이터를 분석하고 인사이트를 도출하는 것에 관심이 있습니다.
            </p>
          </div>

          <div className="detail-card">
            <h3>팀 리더로서의 역량</h3>
            <ul className="capability-list">
              <li>
                <strong>프로젝트 관리:</strong> Jira를 활용한 스프린트 계획 및 이슈 관리
              </li>
              <li>
                <strong>문서화:</strong> Notion으로 팀 위키 및 기술 문서 작성
              </li>
              <li>
                <strong>커뮤니케이션:</strong> 팀원들과의 일일 스탠드업 미팅 및 코드 리뷰 진행
              </li>
              <li>
                <strong>기술 공유:</strong> 팀 내 기술 세미나 주최 및 발표
              </li>
            </ul>
          </div>
        </section>

        {/* Learning Method */}
        <section className="learning-method-section">
          <h2>나의 학습 방법</h2>
          <div className="learning-methods">
            <div className="method-item">
              <div className="method-number">01</div>
              <p>공식 문서를 먼저 읽고, 실제 프로젝트에 적용하며 학습합니다</p>
            </div>
            <div className="method-item">
              <div className="method-number">02</div>
              <p>발생한 에러는 반드시 원인을 파악하고 해결 과정을 기록합니다</p>
            </div>
            <div className="method-item">
              <div className="method-number">03</div>
              <p>새로운 기술은 토이 프로젝트로 먼저 경험한 후 실전에 적용합니다</p>
            </div>
            <div className="method-item">
              <div className="method-number">04</div>
              <p>코드 리뷰를 통해 더 나은 코드 작성 방법을 배웁니다</p>
            </div>
            <div className="method-item">
              <div className="method-number">05</div>
              <p>기술 블로그와 컨퍼런스 영상을 통해 트렌드를 파악합니다</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}