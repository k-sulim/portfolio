import { useMemo, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter, setSearchQuery, openModal } from '../store/store';
import { useProjects } from '../hooks/useApi';

export default function Projects() {
  const dispatch = useDispatch();
  const { items: projects, loading, filter, searchQuery } = useSelector((state) => state.projects);
  const searchInputRef = useRef(null);

  useProjects();

  const filteredProjects = useMemo(() => {
    let result = [...projects];
    if (filter !== 'all') {
      result = result.filter((project) => project.category === filter);
    }
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

  const categoryCounts = useMemo(() => ({
    all: projects.length,
    ai: projects.filter((p) => p.category === 'ai').length,
    web: projects.filter((p) => p.category === 'web').length,
    app: projects.filter((p) => p.category === 'app').length,
  }), [projects]);

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
        <header className="page-header">
          <h1>Projects</h1>
          <p className="page-subtitle">
            실제 문제를 발견하고 기획부터 개발까지 직접 참여한 프로젝트들입니다.
          </p>
        </header>

        <div className="projects-controls">
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
              <button className="search-clear" onClick={() => dispatch(setSearchQuery(''))}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            )}
          </div>
        </div>

        <div className="results-info">
          <p>{filteredProjects.length === 0 ? '검색 결과가 없습니다.' : `${filteredProjects.length}개의 프로젝트`}</p>
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
                  {/* 프로젝트 이미지 */}
                  {project.image && (
                    <div className="project-card-image">
                      <img
                        src={project.image}
                        alt={project.title}
                        onError={(e) => { e.target.style.display = 'none'; }}
                      />
                    </div>
                  )}
                  <div className="project-card-body">
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
                  {/* 프로젝트 이미지 */}
                  {project.image && (
                    <div className="project-card-image">
                      <img
                        src={project.image}
                        alt={project.title}
                        onError={(e) => { e.target.style.display = 'none'; }}
                      />
                    </div>
                  )}
                  <div className="project-card-body">
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
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        <section className="learnings-section">
          <h2>프로젝트를 통해 배운 것</h2>
          <div className="learnings-grid">
            <div className="learning-card">
              <div className="learning-icon">🔍</div>
              <h3>문제 발견 능력</h3>
              <p>현장 관찰로 불편한 점을 발견하고 이를 서비스로 해결하는 것을 좋아합니다.</p>
            </div>
            <div className="learning-card">
              <div className="learning-icon">📊</div>
              <h3>데이터 기반 기획</h3>
              <p>DB 설계부터 지표 모니터링까지, 데이터 구조를 이해하는 기획자입니다.</p>
            </div>
            <div className="learning-card">
              <div className="learning-icon">👥</div>
              <h3>양면 시장 이해</h3>
              <p>B2C 서비스에서 두 사용자군의 니즈를 동시에 풀어가는 기획 경험을 쌓았습니다.</p>
            </div>
            <div className="learning-card">
              <div className="learning-icon">⚡</div>
              <h3>빠른 실행과 반복</h3>
              <p>완벽한 기획보다 빠른 가설 검증과 반복이 더 효과적임을 체득했습니다.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}