import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowDown, ArrowUpRight, Award, BriefcaseBusiness, CheckCircle2, ChevronDown,
  Code2, Download, ExternalLink, FileText, GraduationCap, Mail, MapPin,
  Menu, Phone, Send, Sparkles, UserRound, X, Wrench, Globe2, Layers3
} from 'lucide-react';
import './styles.css';

const profile = {
  name: 'Kamal Goyal',
  role: 'WordPress Developer',
  location: 'Kurukshetra, Haryana, India',
  phone: '+91 8816888347',
  email: 'kamal.goyal.2910@gmail.com',
  cv: '/kamal-cv.png',
  image: '/kamal-goyal-professional-hero.jpg'
};

const skills = [
  { name: 'WordPress', level: 95, icon: '/icons/wordpress.svg' },
  { name: 'Elementor / Elementor Pro', level: 93, icon: '/icons/elementor.svg' },
  { name: 'WooCommerce', level: 88, icon: '/icons/woocommerce.svg' },
  { name: 'HTML', level: 92, icon: '/icons/html-svgrepo-com.svg' },
  { name: 'CSS', level: 90, icon: '/icons/css3-logo-svgrepo-com.svg' },
  { name: 'JavaScript', level: 78, icon: '/icons/javascript.svg' },
  { name: 'React', level: 72, icon: '/icons/react-js-icon.svg' },
  { name: 'PHP', level: 76, icon: '/icons/php.svg' },
  { name: 'Node.js', level: 70, icon: '/icons/node-js-icon.svg' },
  { name: 'Wix Studio', level: 84, icon: '/icons/wix-svgrepo-com.svg' },
  { name: 'Squarespace', level: 80, icon: '/icons/squarespace.svg' },
  { name: 'Advanced Excel', level: 86, icon: '/icons/excel-app.svg' },
  { name: 'PowerPoint', level: 88, icon: '/icons/powerpoint.svg' },
  { name: 'Microsoft Word', level: 88, icon: '/icons/microsoft-word.svg' },
  { name: 'Git / GitHub', level: 78, icon: '/icons/github.svg' },
  { name: 'REST API', level: 75, icon: '/icons/rest-api.svg' }
];

const experience = [
  {
    period: '29 Jan 2024 — Present',
    company: 'Spiderweb Technologies',
    title: 'WordPress Developer',
    text: 'Building responsive, conversion-focused WordPress websites, custom Elementor layouts, WooCommerce experiences, performance improvements and client-ready web solutions.'
  },
  {
    period: '01 Sep 2022 — 30 Nov 2023',
    company: 'Big Byte Innovations',
    title: 'Web / WordPress Development',
    text: 'Worked on website development, CMS updates, responsive layouts and day-to-day web implementation tasks.'
  }
];

const education = [
  ['Master of Computer Applications (M.C.A.)', 'Kurukshetra University, Kurukshetra', 'Online Education · 2026 · 2322/3100'],
  ['Bachelor of Arts (B.A.)', 'Guru Jambheshwar University of Science & Technology, Hisar', 'Distance Education · 2023 · 676/1300'],
  ['Senior Secondary (12th)', 'Board of School Education Haryana', '2019 · 277/500'],
  ['Secondary (10th)', 'Board of School Education Haryana', '2016 · 261/500']
];

const certifications = [
  ['ADCA — Advanced Diploma in Computer Application', 'All Solutions Computer Education', 'May 2019 – Apr 2020 · 82% · Grade A'],
  ['Basic Computer Course (BCC)', 'NIELIT', 'Feb 2020 · D Grade'],
  ['Basic Learning Practice — Spoken English', 'British Council / English Strokes', 'Jul 2020 – Jan 2021 · Completed'],
  ['National Service Scheme (NSS)', 'Govt. of India, Ministry of Youth Affairs & Sports', '2017–18 to 2018–19 · Social service / camp']
];

const stack = [
  ['React', 'JavaScript framework', Code2],
  ['Node.js', 'Runtime / backend', Code2],
  ['Express', 'Web server', Globe2],
  ['Lucide', 'Icon library', Sparkles],
  ['WordPress', 'CMS development', Layers3]
];

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [dark, setDark] = React.useState(() => {
    const saved = localStorage.getItem('kg-theme');

    if (saved === 'light') return false;

    return true;
  });
  const [sent, setSent] = React.useState(false);

  React.useEffect(() => {
    const items = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    try {
      localStorage.setItem('kg-theme', dark ? 'dark' : 'light');
    } catch { }
  }, [dark]);

  const closeMenu = () => setMenuOpen(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3500);
  };

  return (
    <div className={dark ? 'app dark' : 'app'}>
      <header className="nav-wrap">
        <nav className="nav container">
          <a className="brand" href="#home" onClick={closeMenu} aria-label="Kamal Goyal — home">
            <img
              className="brand-logo"
              src={dark ? '/logos/kamal-goyal-logo-dark.png' : '/logos/kamal-goyal-logo-light.png'}
              alt="Kamal Goyal — WordPress Developer"
            />
          </a>
          <button className="mobile-menu" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <div className={menuOpen ? 'nav-links open' : 'nav-links'}>
            {['About', 'Skills', 'Experience', 'Education', 'Contact'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
            ))}
            <button className="theme-btn" onClick={() => setDark(!dark)} aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'} aria-pressed={dark}>{dark ? '☀' : '☾'}</button>
            <a className="nav-cta" href={`mailto:${profile.email}`}>Let's Talk <ArrowUpRight size={16} /></a>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-grid-lines" />
          <div className="hero-orb orb-one" /><div className="hero-orb orb-two" />
          <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
          <div className="container hero-grid">
            <div className="hero-copy reveal is-visible">
              <div className="eyebrow"><span className="pulse" /> Available for web projects <span className="eyebrow-arrow">↗</span></div>
              <div className="hero-kicker">WORDPRESS · REACT · WEB DEVELOPMENT</div>
              <h1>Building modern websites <span>that make an impact.</span></h1>
              <p className="hero-lead">I'm <strong>Kamal Goyal</strong>, a WordPress Developer specializing in modern, responsive websites using WordPress, Elementor, WooCommerce, CPT, UI design, All CMS platforms, and modern web technologies.</p>
              <div className="hero-actions">
                <a className="btn primary magnetic" href="#contact">Start a Project <ArrowUpRight size={18} /></a>
                <a className="btn ghost magnetic" href={profile.cv} download="Kamal-Goyal-CV.png"><Download size={17} /> Download CV</a>
              </div>
              <div className="hero-meta">
                <span><MapPin size={16} /> {profile.location}</span>
                <span><Mail size={16} /> {profile.email}</span>
              </div>
              <div className="hero-trust">
                <span className="trust-dot" /> <b>Focused on</b> clean UI, responsive builds & reliable delivery
              </div>
              <div className="hero-tech-strip" aria-label="Core technologies">
                <img src="/icons/wordpress.svg" alt="WordPress" />
                <img src="/icons/elementor.svg" alt="Elementor" />
                <img src="/icons/woocommerce.svg" alt="WooCommerce" />
                <img src="/icons/react-js-icon.svg" alt="React" />
                <img src="/icons/node-js-icon.svg" alt="Node.js" />
                <img src="/icons/javascript.svg" alt="JavaScript" />
              </div>
            </div>
            <div className="hero-visual reveal is-visible">
              <div className="visual-label label-one"><Code2 size={15} /> Clean code</div>
              <div className="visual-label label-two"><Sparkles size={15} /> Modern UI</div>
              <div className="profile-card">
                <div className="profile-glow" />
                <div className="profile-topline"><span>KG</span><span>WEB DEVELOPER</span></div>
                <div className="profile-image-wrap"><img src={profile.image} alt="Kamal Goyal professional profile" /></div>
                <div className="profile-caption"><div><small>Specialization</small><strong>WordPress & Web Development</strong></div><span className="verified"><CheckCircle2 size={18} /></span></div>
              </div>
              <div className="float-card top"><span className="float-icon"><Code2 size={19} /></span><div><b>14+</b><small>Core skills</small></div></div>
              <div className="float-card bottom"><span className="float-icon"><Sparkles size={19} /></span><div><b>3+ yrs</b><small>Professional experience</small></div></div>
            </div>
          </div>
          <a className="scroll-cue" href="#about"><span className="scroll-line" /><span>Scroll to explore</span><ArrowDown size={15} /></a>
        </section>

        <section id="about" className="section about about-premium reveal">
          <div className="about-backdrop about-backdrop-one" />
          <div className="about-backdrop about-backdrop-two" />
          <div className="container about-shell">
            <div className="about-intro">
              <div className="about-kicker-row"><span className="section-kicker">ABOUT</span><span className="about-kicker-line" /></div>
              <h2>I build websites with <em>purpose and attention to detail.</em></h2>
              <p className="about-intro-copy">I’m a WordPress Developer focused on creating modern, responsive and user-friendly websites that combine clean design, smooth performance and practical functionality.</p>
              <div className="about-stack">
                <span><Code2 size={15} /> WordPress</span>
                <span><Layers3 size={15} /> CMS & UI</span>
                <span><Wrench size={15} /> Custom Web Solutions</span>
              </div>
            </div>

            <div className="about-panel">
              <div className="about-panel-top">
                <div className="about-panel-icon"><UserRound size={20} /></div>
                <div><span>MY APPROACH</span><strong>From idea to a polished digital experience.</strong></div>
                <div className="about-panel-number">KG</div>
              </div>

              <p className="about-panel-copy">I turn ideas and designs into professional websites using WordPress, Elementor, WooCommerce, CMS platforms and modern web technologies. My focus is on creating websites that are fast, easy to use and built around real business needs.</p>

              <div className="about-process">
                <div className="about-process-item"><b>01</b><span>Understand</span><small>Understand the goals, requirements and design direction.</small></div>
                <div className="about-process-connector" />
                <div className="about-process-item"><b>02</b><span>Build</span><small>Develop a clean, responsive and functional website.</small></div>
                <div className="about-process-connector" />
                <div className="about-process-item"><b>03</b><span>Refine</span><small>Test, improve and deliver a polished final experience.</small></div>
              </div>

              <div className="about-facts premium-facts">
                <div><span className="fact-icon"><GraduationCap size={17} /></span><strong>M.C.A.</strong><small>Master of Computer Applications</small></div>
                <div><span className="fact-icon"><BriefcaseBusiness size={17} /></span><strong>Experience</strong><small>WordPress & Web Development</small></div>
                <div><span className="fact-icon"><MapPin size={17} /></span><strong>Haryana, India</strong><small>Based in Kurukshetra, Haryana</small></div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section skills-section skills-premium reveal">
          <div className="skills-glow skills-glow-one" /><div className="skills-glow skills-glow-two" />
          <div className="container">
            <div className="skills-head">
              <div className="section-heading">
                <div className="about-kicker-row"><span className="section-kicker">SKILLS</span><span className="about-kicker-line" /></div>
                <h2>Tools I use to <em>build.</em></h2>
                <p>From WordPress and visual builders to modern web technologies, these are the tools I use to turn ideas into polished, responsive websites.</p>
              </div>
              <div className="skills-head-badge"><span className="skills-live-dot" /> <b>Always learning</b><small>Modern web stack</small></div>
            </div>

            <div className="skills-grid skills-grid-premium">{skills.map((skill, i) => <article className="skill-card skill-card-premium" key={skill.name} style={{ '--delay': `${i * 70}ms` }}>
              <div className="skill-card-shine" />
              <div className="skill-card-top">
                <span className="skill-number">{String(i + 1).padStart(2, '0')}</span>
                <span className="skill-logo-wrap skill-logo-wrap-premium">
                  <img src={skill.icon} alt={skill.name} className="skill-logo" />
                  {skill.secondaryIcon && <img src={skill.secondaryIcon} alt="" className="skill-logo secondary" />}
                </span>
                <span className="skill-percent">{skill.level}%</span>
              </div>
              <div className="skill-card-copy">
                <strong>{skill.name}</strong>
                <span>{skill.level >= 90 ? 'Advanced' : skill.level >= 80 ? 'Proficient' : 'Working knowledge'}</span>
              </div>
              <div className="bar bar-premium"><i style={{ width: `${skill.level}%` }} /></div>
            </article>)}</div>

            <div className="tech-marquee" aria-label="Technology stack">
              <div className="tech-marquee-track">
                {[...skills, ...skills].map((skill, i) => <div className="tech-chip" key={`${skill.name}-${i}`}><span><img src={skill.icon} alt="" />{skill.secondaryIcon && <img src={skill.secondaryIcon} alt="" />}</span><b>{skill.name}</b></div>)}
              </div>
            </div>

            <div className="stack-row stack-row-premium">{stack.map(([name, sub, Icon]) => <div className="stack-pill" key={name}><Icon size={19} /><span><b>{name}</b><small>{sub}</small></span></div>)}</div>
          </div>
        </section>

        <section id="experience" className="section experience experience-premium reveal">
          <div className="experience-bg-orb experience-bg-orb-one" />
          <div className="experience-bg-orb experience-bg-orb-two" />
          <div className="container">
            <div className="experience-head">
              <div className="section-heading">
                <div className="about-kicker-row"><span className="section-kicker">EXPERIENCE</span><span className="about-kicker-line" /></div>
                <h2>Work shaped by <em>real projects.</em></h2>
                <p>Professional experience focused on practical website development, client requirements and continuous improvement.</p>
              </div>
              <div className="experience-badge">
                <span className="experience-live-dot" />
                <div><b>Professional journey</b><small>Web development & CMS</small></div>
              </div>
            </div>

            <div className="experience-track">
              <div className="experience-line" />
              {experience.map((item, i) => <article className="experience-card" key={item.company} style={{ '--experience-delay': `${i * 180}ms` }}>
                <div className="experience-marker">
                  <span>{String(i + 1).padStart(2, '0')}</span>
                </div>
                <div className="experience-card-inner">
                  <div className="experience-card-top">
                    <span className="experience-period">{item.period}</span>
                    {i === 0 && <span className="experience-current"><i /> Current role</span>}
                  </div>
                  <div className="experience-main">
                    <div className="experience-icon"><BriefcaseBusiness size={22} /></div>
                    <div className="experience-copy">
                      <h3>{item.title}</h3>
                      <h4>{item.company}</h4>
                      <p>{item.text}</p>
                      <div className="experience-tags">
                        {(i === 0 ? ['WordPress', 'Elementor', 'WooCommerce'] : ['Web Development', 'CMS', 'Responsive UI']).map(tag => <span key={tag}>{tag}</span>)}
                      </div>
                    </div>
                  </div>
                </div>
              </article>)}
            </div>
          </div>
        </section>

        <section id="education" className="section education education-premium reveal">
          <div className="education-glow education-glow-one" />
          <div className="education-glow education-glow-two" />
          <div className="container">
            <div className="education-head">
              <div className="section-heading">
                <div className="about-kicker-row"><span className="section-kicker">EDUCATION</span><span className="about-kicker-line" /></div>
                <h2>Education that built my <em>foundation.</em></h2>
                <p>A focused academic journey backed by computer training, practical learning and continuous skill development.</p>
              </div>
              <div className="education-stat">
                <span className="education-stat-icon"><GraduationCap size={20} /></span>
                <div><strong>Academic journey</strong><small>2016 — 2026</small></div>
              </div>
            </div>

            <div className="edu-timeline">
              <div className="edu-timeline-line" />
              {education.map((row, i) => (
                <article className="edu-card-premium" key={row[0]} style={{ '--edu-delay': `${i * 120}ms` }}>
                  <div className="edu-number">{String(i + 1).padStart(2, '0')}</div>
                  <div className="edu-card-inner">
                    <div className="edu-card-top">
                      <span className="edu-period">{row[1]}</span>
                      <span className="edu-status">Completed</span>
                    </div>
                    <div className="edu-main">
                      <div className="edu-icon-premium"><GraduationCap size={22} /></div>
                      <div className="edu-copy">
                        <h3>{row[0]}</h3>
                        <p>{row[1]}</p>
                        <span className="edu-line" />
                        <small>Academic qualification</small>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="cert-heading-premium">
              <div className="cert-heading-icon"><Award size={19} /></div>
              <div><span>CONTINUOUS LEARNING</span><h3>Certifications & Training</h3></div>
            </div>
            <div className="cert-grid-premium">
              {certifications.map((row, i) => (
                <article className="cert-card-premium" key={row[0]} style={{ '--cert-delay': `${i * 100}ms` }}>
                  <div className="cert-card-icon"><Award size={19} /></div>
                  <div className="cert-copy">
                    <span className="cert-index">0{i + 1}</span>
                    <h3>{row[0]}</h3>
                    <p>{row[1]}</p>
                    <small>{row[2]}</small>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section id="contact" className="section contact contact-premium reveal">
          <div className="contact-orb contact-orb-one" />
          <div className="contact-orb contact-orb-two" />
          <div className="contact-grid container">
            <div className="contact-intro">
              
              <div className="contact-kicker-row">
                <span className="contact-status"><i /> Available for projects</span>
              </div>
              
              <h2>Have a website idea?<br /><em>Let's build it.</em></h2>
              <p>Tell me what you need — a WordPress website, redesign, Elementor build, WooCommerce setup or another web project.</p>

              <div className="contact-info-grid">
                <a className="contact-info-card" href={`mailto:${profile.email}`}>
                  <span className="contact-info-icon"><Mail size={20} /></span>
                  <span><small>Email</small><strong>{profile.email}</strong></span>
                  <ArrowUpRight className="contact-info-arrow" size={17} />
                </a>
                <a className="contact-info-card" href={`tel:${profile.phone.replaceAll(' ', '')}`}>
                  <span className="contact-info-icon"><Phone size={20} /></span>
                  <span><small>Phone</small><strong>{profile.phone}</strong></span>
                  <ArrowUpRight className="contact-info-arrow" size={17} />
                </a>
                <div className="contact-info-card">
                  <span className="contact-info-icon"><MapPin size={20} /></span>
                  <span><small>Location</small><strong>{profile.location}</strong></span>
                  <span className="contact-info-arrow contact-location-dot"><i /></span>
                </div>
              </div>

              <div className="contact-availability">
                <div className="contact-avatar"><UserRound size={19} /></div>
                <div><strong>Let's create something useful.</strong><span>Websites that look polished and work smoothly.</span></div>
                <Sparkles size={19} className="contact-sparkle" />
              </div>
            </div>

            <div className="contact-form-wrap">
              <div className="contact-form-glow" />
              <form className="contact-form contact-form-premium" onSubmit={handleSubmit}>
                <div className="contact-form-head">
                  <div>
                    <span className="contact-form-label">START A PROJECT</span>
                    <h3>Send an enquiry</h3>
                  </div>
                  <span className="contact-form-icon"><Send size={18} /></span>
                </div>

                <div className="form-progress"><span /><span /><span /></div>

                <div className="form-row">
                  <label>Name<input required placeholder="Your name" /></label>
                  <label>Email<input required type="email" placeholder="you@example.com" /></label>
                </div>
                <label>Project type<select defaultValue="WordPress Website"><option>WordPress Website</option><option>Elementor / Landing Page</option><option>WooCommerce</option><option>Wix / Squarespace</option><option>Other</option></select></label>
                <label>Message<textarea required rows="5" placeholder="Tell me a little about your project..." /></label>

                <button className="btn primary contact-submit" type="submit">
                  {sent ? <><CheckCircle2 size={18} /> Message prepared</> : <><Send size={18} /> Send Enquiry <ArrowUpRight size={17} /></>}
                </button>
                <small className="form-note">Frontend demo form · connect your preferred email/form service.</small>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer><div className="container footer-inner"><a className="brand footer-brand" href="#home" aria-label="Kamal Goyal — home"><img className="brand-logo" src={dark ? '/logos/kamal-goyal-logo-dark.png' : '/logos/kamal-goyal-logo-light.png'} alt="Kamal Goyal — WordPress Developer" /></a><span>© {new Date().getFullYear()} Kamal Goyal. Built with React.</span><a href="#home" className="back-top">Back to top <ArrowUpRight size={16} /></a></div></footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
