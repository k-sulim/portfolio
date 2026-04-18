import { useMemo, useState, useRef, useEffect } from 'react';
import { useSkills } from '../hooks/useApi';

export default function Skills() {
  const { skills, loading } = useSkills();
  const [sortBy, setSortBy] = useState('default');
  const skillsRef = useRef(null);
  const [visibleSkills, setVisibleSkills] = useState({});

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
    return () => { cards.forEach((card) => observer.unobserve(card)); };
  }, [skills, sortBy]);

  const sortedSkills = useMemo(() => {
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

  const topSkill = useMemo(() => {
    if (skills.length === 0) return null;
    return skills.reduce((max, skill) =>
      skill.proficiency > max.proficiency ? skill : max, skills[0]);
  }, [skills]);

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
      '데이터 & 분석': (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="18" y1="20" x2="18" y2="10"/>
          <line x1="12" y1="20" x2="12" y2="4"/>
          <line x1="6" y1="20" x2="6" y2="14"/>
        </svg>
      ),
      '서비스 기획': (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/>
        </svg>
      ),
      'Database': (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <ellipse cx="12" cy="5" rx="9" ry="3"/>
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
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
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
        </svg>
      ),
      '협업 도구': (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
    };
    return icons[category] || icons['협업 도구'];
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
        <header className="page-header">
          <h1>Skills</h1>
          <p className="page-subtitle">
            프로젝트와 공부를 통해 익힌 기술들입니다.
          </p>
        </header>

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

        <div className="skills-controls">
          <span>정렬:</span>
          <div className="sort-buttons">
            <button className={sortBy === 'default' ? 'active' : ''} onClick={() => setSortBy('default')}>기본</button>
            <button className={sortBy === 'proficiency' ? 'active' : ''} onClick={() => setSortBy('proficiency')}>숙련도순</button>
            <button className={sortBy === 'name' ? 'active' : ''} onClick={() => setSortBy('name')}>이름순</button>
          </div>
        </div>

        <div ref={skillsRef} className="skills-grid">
          {sortedSkills.map((skill, index) => (
            <div
              key={skill.id}
              data-id={skill.id}
              className={`skill-card ${visibleSkills[skill.id] ? 'visible' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="skill-header">
                <div className="skill-icon">{getCategoryIcon(skill.category)}</div>
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
                  <div className="proficiency-fill" style={{ width: `${skill.proficiency}%` }}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 상세 설명 */}
        <section className="skills-detail-section">
          <h2>상세 설명</h2>

          <div className="detail-card">
            <h3>가장 자신 있는 기술</h3>
            <h4>Java · Spring Boot</h4>
            <p>
              백엔드 개발의 핵심 프레임워크로, RESTful API 설계 및 구현 경험이 있습니다.
              JPA를 활용한 데이터베이스 연동, DB 설계(ERD)를 직접 담당하며
              데이터 구조를 이해하는 기획자로 성장했습니다.
            </p>
          </div>

          <div className="detail-card">
            <h3>집중적으로 키우고 있는 역량</h3>
            <h4>서비스 기획 · 데이터 분석</h4>
            <p>
              구름톤 유니브 기획 파트에서 서비스 기획서, Figma 프로토타입, API 명세서 작성을 직접 경험했습니다.
              SQL과 Python(pandas, matplotlib)을 활용한 데이터 분석 역량을 키우고 있으며,
              ADSP 자격증을 준비 중입니다.
            </p>
          </div>

          <div className="detail-card">
            <h3>팀 리더로서의 역량</h3>
            <ul className="capability-list">
              <li>
                <strong>프로젝트 관리:</strong> Notion으로 팀 일정, 회의록, 기획 문서를 통합 관리
              </li>
              <li>
                <strong>문서화:</strong> 기획서·API 명세서·ERD를 직접 작성해 팀원들과 공유
              </li>
              <li>
                <strong>커뮤니케이션:</strong> 팀원 역량을 파악해 역할을 분담하고, 막히는 지점에서 대안 방향 제안
              </li>
              <li>
                <strong>기획 리드:</strong> 4개 프로젝트에서 기획 방향 설정 및 기능 우선순위 결정 주도
              </li>
            </ul>
          </div>
        </section>

        {/* 학습 방법 */}
        <section className="learning-method-section">
          <h2>나의 학습 방법</h2>
          <div className="learning-methods">
            <div className="method-item">
              <div className="method-number">01</div>
              <p>실제 프로젝트에 적용하면서 배웁니다. 이론만으로는 감이 안 오기 때문입니다.</p>
            </div>
            <div className="method-item">
              <div className="method-number">02</div>
              <p>발생한 문제는 반드시 원인을 파악하고 해결 과정을 노션에 기록합니다.</p>
            </div>
            <div className="method-item">
              <div className="method-number">03</div>
              <p>개발자, 디자이너와 함께 일하면서 각 직군의 언어를 이해하려고 노력합니다.</p>
            </div>
            <div className="method-item">
              <div className="method-number">04</div>
              <p>서비스를 직접 써보고 "왜 이렇게 만들었을까"를 생각하는 습관을 갖고 있습니다.</p>
            </div>
            <div className="method-item">
              <div className="method-number">05</div>
              <p>PM·기획 관련 아티클과 케이스 스터디를 꾸준히 읽으며 트렌드를 파악합니다.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}