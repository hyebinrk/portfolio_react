import React from 'react';
import './Project.css';

const Project = () => {
  const projects = [
    {
      id: 1,
      title: "자격증 정보 커뮤니티",
      description: `IT 및 전문 자격증 정보를 한눈에 조회하고, 시험 일정, 커뮤니티, 통계 자료 등을 종합적으로 제공하는 풀스택 웹 애플리케이션입니다.
자격증 검색 기능은 물론, 통계 시각화, 캘린더 기능, 게시판/댓글 기능 등을 구현하여 사용자들이 효율적으로 시험을 준비할 수 있게 했습니다.

프로젝트에서는 자격증 검색 페이지와 커뮤니티 게시판 일부를 개발하고, 공식 사이트에서 시험 데이터 및 자격 통계를 크롤링하여 APEX Chart로 시각화하는 작업을 맡았습니다.
정보가 흩어져 있어 불편했던 기존 문제점을 해결하고자, 사용자가 필요한 정보를 직관적으로 접근할 수 있도록 UX에도 신경썼습니다.`,
      tech: ["React", "Node.js", "Java", "Spring Boot", "Oracle", "DBeaver", "ApexChart"],
      github: "https://github.com/hyebinrk/ecommerce",
      image: "img/메인페이지.png"
    },
    {
      id: 2,
      title: "랜덤번호 출결 시스템",
      description: `교사용 출결 시스템으로, 교사가 발급한 랜덤번호를 학생이 입력하면 출석이 자동 기록되는 구조로 개발된 프로젝트입니다.
매번 무작위 번호를 사용함으로써 무단출석/대리출석을 방지하고, 교사와 학생 모두의 출결 관리를 간편하게 할 수 있도록 설계했습니다.

UI 구현과 DB 연동을 맡아, 파이썬 기반으로 설계된 UI(디자이너툴)와 Oracle DB를 효과적으로 연결하여 데이터가 원활히 저장되고 조회되도록 처리했습니다.
처음 진행한 팀 프로젝트로, 조장 역할을 맡아 팀원 간 협업을 조율하며 전체 진행을 리드하였고, 많은 시행착오를 통해 실질적인 UI + DB 연동 경험을 쌓았습니다.`,
      tech: ["Python", "Qt Designer", "Oracle", "DBeaver"],
      github: "https://github.com/hyebinrk/task-manager",
      image: "img/교사로그인진입.png"
    }
  ];

  return (
    <section className="projects">
      <div className="projects-container">
        <h2 className="projects-title">Projects</h2>
        <div className="projects-list">
          {projects.map((project, index) => (
            <div key={project.id} className={`project-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-links">
                    <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                    </a>
                  </div>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
