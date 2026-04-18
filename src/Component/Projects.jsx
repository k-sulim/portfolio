import { useMemo, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter, setSearchQuery, openModal } from '../store/store';
import { useProjects } from '../hooks/useApi';

export default function Projects() {
  const dispatch = useDispatch();
  const { items: projects, loading, filter, searchQuery } = useSelector((state) => state.projects);
  const searchInputRef = useRef(null);
  
  // REST API로 프로젝트 데이터 fetch
  useProjects();

  // useRef - 검색 입력창에 포커스
  useEffect(() => {
    if (searchInputRef.current) {
      // 페이지 로드 시 검색창에 포커스하지 않음 (UX 고려)
    }
  }, []);

  // ============================================
  // useMemo - 프로젝트 필터링 연산 최적화
  // 의존성(projects, filter, searchQuery)이 변경될 때만 재계산
  // ============================================
  const filteredProjects = useMemo(() => {
    console.log('🔄 Filtering projects... (useMemo 실행)');
    
    let result = [...projects];

    // 카테고리 필터링
    if (filter !== 'all') {
      result = result.filter((project) => project.category === filter);
    }

    // 검색어 필터링
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (project) =>
          project.title.toLowerCase().includes(query) ||
          project.summary.toLowerCase().includes(query) ||
          project.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    return result;
  }, [projects, filter, searchQuery]);

  // ============================================
  // useMemo - 카테고리별 프로젝트 수 계산
  // ============================================
  const categoryCounts = useMemo(() => {
    console.log('🔢 Counting categories... (useMemo 실행)');
    return {
      all: projects.length,
      ai: projects.filter((p) => p.category === 'ai').length,
      web: projects.filter((p) => p.category === 'web').length,
      app: projects.filter((p) => p.category === 'app').length,
    };
  }, [projects]);

  // ============================================
  // useMemo - Featured 프로젝트 분리
  // ============================================
  const { featuredProjects, regularProjects } = useMemo(() => {
    const featured = filteredProjects.filter((p) => p.featured);
    const regular = filteredProjects.filter((p) => !p.featured);
    return { featuredProjects: featured, regularProjects: regular };
  }, [filteredProjects]);

  const handleProjectClick = (project) => {
    dispatch(openModal(project));
  };

  const filterButtons = [
    { key: 'all', label: '전체' },
    { key: 'ai', label: 'AI/ML' },
    { key: 'web', label: 'Web' },
    { key: 'app', label: 'App' },
  ];

  if (loading) {
    return (
      <div className="projects-page">
        <div className="container">
          <div className="loading-state">
            <div className="loading-spinner"></div>
            <p>프로젝트를 불러오는 중...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="projects-page">
      <div className="container">
        {/* Page Header */}
        <header className="page-header">
          <h1>Projects</h1>
          <p className="page-subtitle">
            실제 문제를 해결하기 위해 기획하고 팀을 이끌며 진행한 프로젝트들입니다.
          </p>
        </header>

        {/* Filter & Search Section */}
        <div className="projects-controls">
          {/* Category Filter */}
          <div className="filter-buttons">
            {filterButtons.map((btn) => (
              <button
                key={btn.key}
                className={`filter-btn ${filter === btn.key ? 'active' : ''}`}
                onClick={() => dispatch(setFilter(btn.key))}
              >
                {btn.label}
                <span className="filter-count">{categoryCounts[btn.key]}</span>
              </button>
            ))}
          </div>

          {/* Search Input - useRef 활용 */}
          <div className="search-box">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <input
              ref={searchInputRef}
              type="text"
              placeholder="프로젝트 검색..."
              value={searchQuery}
              onChange={(e) => dispatch(setSearchQuery(e.target.value))}
            />
            {searchQuery && (
              <button 
                className="search-clear"
                onClick={() => dispatch(setSearchQuery(''))}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Results Count */}
        <div className="results-info">
          <p>
            {filteredProjects.length === 0 
              ? '검색 결과가 없습니다.'
              : `${filteredProjects.length}개의 프로젝트`
            }
          </p>
        </div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <section className="featured-section">
            <h2 className="section-title">
              <span className="title-icon">⭐</span>
              Featured Projects
            </h2>
            <div className="featured-projects-grid">
              {featuredProjects.map((project) => (
                <article
                  key={project.id}
                  className="project-card featured"
                  onClick={() => handleProjectClick(project)}
                >
                  <div className="project-card-header">
                    <span className="project-category">{project.category.toUpperCase()}</span>
                    <span className="project-period">{project.period}</span>
                  </div>
                  
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-role">{project.role}</p>
                  <p className="project-summary">{project.summary}</p>
                  
                  <div className="project-tags">
                    {project.tags.slice(0, 4).map((tag, idx) => (
                      <span key={idx} className="tag">{tag}</span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="tag more">+{project.tags.length - 4}</span>
                    )}
                  </div>

                  <div className="project-card-footer">
                    <span className="view-detail">
                      자세히 보기
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="5" y1="12" x2="19" y2="12"/>
                        <polyline points="12 5 19 12 12 19"/>
                      </svg>
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Regular Projects */}
        {regularProjects.length > 0 && (
          <section className="regular-section">
            {featuredProjects.length > 0 && (
              <h2 className="section-title">Other Projects</h2>
            )}
            <div className="projects-grid">
              {regularProjects.map((project) => (
                <article
                  key={project.id}
                  className="project-card"
                  onClick={() => handleProjectClick(project)}
                >
                  <div className="project-card-header">
                    <span className="project-category">{project.category.toUpperCase()}</span>
                    <span className="project-period">{project.period}</span>
                  </div>
                  
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-role">{project.role}</p>
                  <p className="project-summary">{project.summary}</p>
                  
                  <div className="project-tags">
                    {project.tags.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className="tag">{tag}</span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="tag more">+{project.tags.length - 3}</span>
                    )}
                  </div>

                  <div className="project-card-footer">
                    <span className="view-detail">
                      자세히 보기
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="5" y1="12" x2="19" y2="12"/>
                        <polyline points="12 5 19 12 12 19"/>
                      </svg>
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* What I Learned Section */}
        <section className="learnings-section">
          <h2>프로젝트를 통해 배운 것</h2>
          <div className="learnings-grid">
            <div className="learning-card">
              <div className="learning-icon">🔍</div>
              <h3>문제 발견 능력</h3>
              <p>일상에서 불편한 점을 발견하고 이를 기술로 해결하는 것을 좋아합니다.</p>
            </div>
            <div className="learning-card">
              <div className="learning-icon">👥</div>
              <h3>리더십</h3>
              <p>4개 프로젝트 모두 팀장을 맡으며, 팀을 이끄는 방법을 배웠습니다.</p>
            </div>
            <div className="learning-card">
              <div className="learning-icon">📋</div>
              <h3>기획력</h3>
              <p>단순히 코드를 짜는 것이 아니라, "왜 이 기능이 필요한가?"를 먼저 고민합니다.</p>
            </div>
            <div className="learning-card">
              <div className="learning-icon">🚀</div>
              <h3>실행력</h3>
              <p>아이디어를 실제로 작동하는 프로덕트로 만들어내는 과정을 즐깁니다.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}