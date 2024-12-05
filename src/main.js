import React, { useState } from 'react';
import Projects from './components/Projects';
import Skills from './components/Skills';

const Main = () => {
  const [mode, setMode] = useState('sun'); // Example theme toggle state
  const theme = mode === 'sun' ? 'light' : 'dark';

  return (
    <div className={`min-vh-100  bg-${theme} text-${theme === 'light' ? 'dark' : 'light'}`}>
      <header className="container text-center py-5">
        <div className="d-flex justify-content-end gap-2 mb-4">
          <button className={`btn btn-${mode === 'sun' ? 'dark' : 'light'}`}
            onClick={() => setMode(mode === 'sun' ? 'moon' : 'sun')}
          >
            <i className={`fas fa-${mode} me-1`}></i>
            {mode === 'sun' ? 'Dark' : 'Light'} Mode
          </button>
          <button className="btn btn-primary">Contact Me</button>
        </div>
        <div className="d-flex gap-5 align-items-center justify-content-center flex-wrap py-3">
              
          <div className='col-md-4'>
            <img
              src="photo.jpg"
              alt="Profile"
              className="img-fluid rounded-circle shadow mb-4"
              style={{ maxWidth: '200px' }} 
            />
            <h1>
              Hi, I'm <span className="text-primary">Betelhem Yimam</span>
            </h1>
            <p className="fs-5">Full Stack Developer</p>
            </div>
          <div className='align-items-center col-md-6'>
          <p className='mt-2'> I'm <span className='text-primary'>software engineering </span> a student at Addis Ababa University.
                  I am in my 5th year of study. I can work on both frontend and backend 
                  technologies. Additionally, I would like to work on AI/ML research and projects.</p>
          
            
            <div className="mt-3 border rounded-5">
              <Skills />
            </div>
             
            <div className="mx-5 d-flex gap-3 mt-4 ">
              <a href="mailto:betelhemyimamd@gmail.com" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-envelope fs-4 text-primary"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/betelhem-yimam-98a266241/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin fs-4 text-primary"></i>
              </a>
              <a href="https://t.me/BBI6m" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-telegram fs-4 text-primary"></i>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Education & Experience Section */}
      <div className="container py-5">
        <div className="row g-4">
          <div className="col-md-6">
            <h2 className="mb-4 text-primary">Education</h2>
            <div className="card border-0 shadow">
              <div className="card-body">
                <h4 className="card-title">Addis Ababa University</h4>
                <small className="text-muted">Bachelors in Software Engineering (2021 - 2025)</small>
                <p className="mt-2">
                  I'm attending my Bachelor's degree at Addis Ababa University. Currently, I'm in my 5th year of study.
                </p>
              </div>
            </div>
            <div className="card border-0 shadow mt-3">
              <div className="card-body">
                <h4 className="card-title">A2SV</h4>
                <small className="text-muted">Data Structure and Algorithm (Nov 2023 - Nov 2024)</small>
                <p className="mt-2">
                  Completed a 1-year data structure and algorithm course at A2SV, dedicated to training high-potential
                  African university students.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <h2 className="mb-4 text-primary ">Experience</h2>
            <div className="card border-0 shadow">
              <div className="card-body">
                <h4 className="card-title">Intern</h4>
                <small className="text-muted">Backend Developer (Feb 2024 - Jul 2024)</small>
                <p className="mt-2">
                  Interned at A2SV || African to Silicon Valley, worked on a project, and gained hands-on experience in backend development.
                </p>
              </div>
            </div>
            <div className="card border-0 mt-3 shadow">
              <div className="card-body">
                <h4 className="card-title">Intern</h4>
                <small className="text-muted">Backend Developer (Feb 2024 - Jun 2024)</small>
                <p className="mt-2">
                  Interned at Addis Ababa University (AAiT), worked on a project with my lecturers, and gained hands-on experience in backend development.
                </p>
              </div>
            </div>
            <div className="card border-0 shadow mt-3">
              <div className="card-body">
                <h4 className="card-title">Freelancer</h4>
                <small className="text-muted">Web Developer (Sep 2024 - Oct 2024)</small>
                <p className="mt-2">
                  Worked as Frontend developer, implemnt Frontend pages and write tests for the pages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="projects" className="container py-5 align-items-center justify-content-center">
        <h2 className="text-center text-primary mb-4">Projects</h2>
        <div className='w-75 ml-5 projects-container'>
          <Projects />
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-3 bg-dark text-light">
        <p>© 2024 Betelhem Yimam. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Main;
