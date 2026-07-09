const services = [
  {
    title: "Thesis & Dissertation Preparation",
    text: "Typing, structuring and document preparation support for PhD and M.Phil scholars.",
  },
  {
    title: "University-Style Formatting",
    text: "Margins, headings, page numbers, footnotes, tables, references and submission-ready layouts.",
  },
  {
    title: "Proofreading & Editing",
    text: "Language correction, academic clarity, spelling review and clean document presentation.",
  },
  {
    title: "Manuscript Digitization",
    text: "Digitization support for Sanskrit, Hindi, Gujarati and English manuscripts, notes and printed material.",
  },
  {
    title: "Research Transcription",
    text: "Typing and transcription for interviews, lectures, seminars, field notes and research recordings.",
  },
  {
    title: "Institutional Documentation",
    text: "Scalable documentation support for universities, departments, libraries and government projects.",
  },
];

const addOns = [
  "Structure Review",
  "Language Clarity",
  "Citation & Reference Cleanup",
  "Formatting Review",
  "Table & Figure Layout",
  "Final File Preparation",
];

const languages = ["Sanskrit", "Hindi", "Gujarati", "English"];

const faqs = [
  {
    question: "Do you support PhD and M.Phil thesis work?",
    answer:
      "Yes. Digital Typist supports thesis typing, formatting, proofreading, editing and final document preparation for scholars.",
  },
  {
    question: "Can you handle Sanskrit and Devanagari content?",
    answer:
      "Yes. Sanskrit, Hindi, Gujarati and English academic documents are supported with special attention to script accuracy.",
  },
  {
    question: "Do you work with institutions or government projects?",
    answer:
      "Yes. We are building Digital Typist for individual scholars as well as universities, libraries, departments and documentation projects.",
  },
];

export default function HomePage() {
  return (
    <main>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#home">
            <span className="brand-title">Digital Typist</span>
            <span className="brand-subtitle">
              From Mantra to Manuscript — We Type It Right.
            </span>
          </a>

          <nav className="nav">
            <a href="#services">Services</a>
            <a href="#institutional">Institutions</a>
            <a href="#process">Process</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="container hero-grid">
          <div>
            <div className="eyebrow">Academic Documentation Platform</div>

            <h1>
              Enterprise Academic Documentation & Multilingual Digitization
              Services
            </h1>

            <p>
              Digital Typist supports PhD scholars, universities, institutions
              and government documentation projects with thesis preparation,
              formatting, proofreading, transcription and manuscript
              digitization in Sanskrit, Hindi, Gujarati and English.
            </p>

            <div className="hero-actions">
              <a className="btn btn-primary" href="#contact">
                Request a Consultation
              </a>
              <a className="btn btn-secondary" href="#services">
                Explore Services
              </a>
            </div>

            <div className="trust-strip">
              <span>PhD Thesis</span>
              <span>Manuscripts</span>
              <span>Digitization</span>
              <span>Formatting</span>
              <span>Institutional Projects</span>
            </div>
          </div>

          <div className="hero-panel">
            <div className="panel-label">Built for serious academic work</div>
            <h2>Precise. Structured. Submission-ready.</h2>
            <p>
              A premium documentation workflow for scholars and institutions
              that need careful language handling, clean formatting and reliable
              project communication.
            </p>

            <div className="panel-list">
              <div>
                <strong>01</strong>
                <span>Free requirement review</span>
              </div>
              <div>
                <strong>02</strong>
                <span>Multilingual academic support</span>
              </div>
              <div>
                <strong>03</strong>
                <span>Confidential file handling</span>
              </div>
              <div>
                <strong>04</strong>
                <span>Final document preparation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section stats-section">
        <div className="container stats-grid">
          <div>
            <strong>4</strong>
            <span>Academic languages</span>
          </div>
          <div>
            <strong>6+</strong>
            <span>Core documentation services</span>
          </div>
          <div>
            <strong>2026–27</strong>
            <span>Institutional growth vision</span>
          </div>
          <div>
            <strong>100%</strong>
            <span>Control-focused digital workflow</span>
          </div>
        </div>
      </section>

      <section className="section" id="services">
        <div className="container">
          <div className="section-heading">
            <span className="section-kicker">What we deliver</span>
            <h2>Academic services designed as professional solutions.</h2>
            <p>
              Digital Typist is being built beyond ordinary typing. The focus is
              on complete academic documentation, formatting, language accuracy
              and scalable support for knowledge projects.
            </p>
          </div>

          <div className="cards service-cards">
            {services.map((service) => (
              <article className="card" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section highlight-section">
        <div className="container highlight-grid">
          <div>
            <span className="section-kicker">For scholars</span>
            <h2>Thesis and dissertation support with academic care.</h2>
            <p>
              From chapter typing to final formatting, we help scholars prepare
              documents that are clear, structured and suitable for review. The
              emphasis is not only on typing speed, but also on accuracy,
              consistency and presentation.
            </p>
          </div>

          <div className="add-on-box">
            <h3>Academic add-on checks</h3>
            <div className="add-on-grid">
              {addOns.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="institutional">
        <div className="container institutional-box">
          <div>
            <span className="section-kicker">For universities & government</span>
            <h2>Documentation support for institutions, departments and archives.</h2>
            <p>
              Digital Typist is preparing for larger academic and public-sector
              documentation needs: manuscript digitization, multilingual data
              entry, departmental documents, research records, libraries and
              heritage text projects.
            </p>
          </div>

          <div className="institutional-list">
            <span>University Departments</span>
            <span>Research Centres</span>
            <span>Libraries & Archives</span>
            <span>Government Documentation</span>
            <span>Sanskrit & Heritage Projects</span>
          </div>
        </div>
      </section>

      <section className="section language-section">
        <div className="container language-grid">
          <div>
            <span className="section-kicker">Language expertise</span>
            <h2>Multilingual documentation for Indian academic contexts.</h2>
            <p>
              Academic documents often require script sensitivity, terminology
              control and careful formatting. Our workflow is designed for
              multilingual projects where accuracy matters.
            </p>
          </div>

          <div className="language-pills">
            {languages.map((language) => (
              <span key={language}>{language}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section process" id="process">
        <div className="container">
          <div className="section-heading">
            <span className="section-kicker">How it works</span>
            <h2>A simple workflow with clear communication.</h2>
            <p>
              Every project begins with requirement clarity. Then we estimate,
              prepare, review and deliver clean files.
            </p>
          </div>

          <div className="cards">
            <article className="card step">
              <h3>Share your material</h3>
              <p>
                Send PDFs, handwritten pages, Word files, audio files, images or
                university guidelines.
              </p>
            </article>

            <article className="card step">
              <h3>Get scope and timeline</h3>
              <p>
                We confirm the work type, expected format, timeline and delivery
                requirements before starting.
              </p>
            </article>

            <article className="card step">
              <h3>Receive final documents</h3>
              <p>
                Get structured, formatted and review-ready files with clear
                communication throughout the process.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section quality-section">
        <div className="container quality-grid">
          <div className="quality-card">
            <span className="section-kicker">Quality assurance</span>
            <h2>Built on accuracy, confidentiality and consistency.</h2>
            <p>
              Serious academic documents need more than typing. They need
              consistent formatting, careful review, secure handling and respect
              for the scholar’s original work.
            </p>
          </div>

          <div className="quality-points">
            <div>
              <strong>Confidentiality</strong>
              <span>Files and research material are handled with care.</span>
            </div>
            <div>
              <strong>Consistency</strong>
              <span>Headings, spacing, references and pages stay uniform.</span>
            </div>
            <div>
              <strong>Review Support</strong>
              <span>Corrections and revisions can be handled systematically.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container">
          <div className="section-heading">
            <span className="section-kicker">Common questions</span>
            <h2>Before you start a project.</h2>
          </div>

          <div className="faq-list">
            {faqs.map((faq) => (
              <article className="faq-item" key={faq.question}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="contact">
        <div className="container">
          <div className="contact-box">
            <div>
              <span className="section-kicker light">Start your project</span>
              <h2>Need premium academic documentation support?</h2>
              <p>
                Share your requirement for thesis typing, formatting,
                proofreading, transcription, manuscript digitization or
                institutional documentation.
              </p>
            </div>

            <div className="contact-actions">
              <a className="btn" href="tel:+918849165907">
                Call: +91 88491 65907
              </a>
              <a className="btn" href="tel:+919924345007">
                Call: +91 99243 45007
              </a>
              <a
                className="btn"
                href="https://wa.me/918849165907"
                target="_blank"
                rel="noreferrer"
              >
                Message on WhatsApp
              </a>
              <a className="btn" href="mailto:digitaltypistim@gmail.com">
                digitaltypistim@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <strong>Digital Typist</strong>
            <p>Enterprise Academic Documentation & Multilingual Digitization Services</p>
          </div>
          <div>
            © {new Date().getFullYear()} Digital Typist. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
