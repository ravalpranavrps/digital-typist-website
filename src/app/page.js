export default function HomePage() {
  return (
    <main>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#home">
            <span className="brand-title">Digital Typist</span>
            <span className="brand-subtitle">
              Your Academic Partner for Thesis & Research
            </span>
          </a>

          <nav className="nav">
            <a href="#services">Services</a>
            <a href="#process">Process</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="container hero-grid">
          <div>
            <div className="eyebrow">Thesis Typing & Academic Support</div>

            <h1>
              Professional typing, formatting and research support for scholars.
            </h1>

            <p>
              Digital Typist supports PhD and M.Phil scholars with accurate
              thesis typing, editing, proofreading, formatting and academic
              documentation in Sanskrit, Hindi, Gujarati and English.
            </p>

            <div className="hero-actions">
              <a className="btn btn-primary" href="#contact">
                Get a Free Quote
              </a>
              <a
                className="btn btn-secondary"
                href="https://wa.me/918849165907"
                target="_blank"
                rel="noreferrer"
              >
                Message on WhatsApp
              </a>
            </div>
          </div>

          <div className="hero-card">
            <h2>Academic services with clarity and care.</h2>
            <ul>
              <li>PhD and M.Phil thesis typing</li>
              <li>UGC and university-style formatting</li>
              <li>Sanskrit, Hindi, Gujarati and English support</li>
              <li>Editing, proofreading and document correction</li>
              <li>Fast communication and clean final files</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section" id="services">
        <div className="container">
          <div className="section-heading">
            <h2>Services for students, scholars and institutions.</h2>
            <p>
              From raw handwritten material to polished academic documents, we
              help you prepare clean, structured and submission-ready work.
            </p>
          </div>

          <div className="cards">
            <article className="card">
              <h3>Thesis Typing</h3>
              <p>
                Accurate typing for dissertations, chapters, references,
                appendices, declarations and research documents.
              </p>
            </article>

            <article className="card">
              <h3>Formatting</h3>
              <p>
                Margins, headings, page numbers, tables, footnotes and
                university-style layout preparation.
              </p>
            </article>

            <article className="card">
              <h3>Editing & Proofreading</h3>
              <p>
                Grammar correction, spelling review, layout cleanup and
                readability improvement for academic submissions.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section process" id="process">
        <div className="container">
          <div className="section-heading">
            <h2>Simple process. Clear communication.</h2>
            <p>
              Share your requirements, get a clear estimate, review the draft
              and receive the final document in a clean format.
            </p>
          </div>

          <div className="cards">
            <article className="card step">
              <h3>Send your material</h3>
              <p>
                Share handwritten pages, PDFs, Word files or formatting
                guidelines.
              </p>
            </article>

            <article className="card step">
              <h3>Review the estimate</h3>
              <p>
                We confirm the work, timeline and expected delivery format
                before starting.
              </p>
            </article>

            <article className="card step">
              <h3>Receive final files</h3>
              <p>
                Get clean, edited and formatted documents ready for review or
                submission.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section" id="about">
        <div className="container">
          <div className="section-heading">
            <h2>Built for serious academic work.</h2>
            <p>
              Digital Typist focuses on reliable academic document support for
              scholars who need careful typing, formatting and language-aware
              document preparation. The work is handled with attention to
              structure, accuracy and presentation.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="contact">
        <div className="container">
          <div className="contact-box">
            <div>
              <h2>Need help with thesis or research documents?</h2>
              <p>
                Send your requirement and get guidance for typing, formatting,
                proofreading or academic document preparation.
              </p>
            </div>

            <div className="contact-actions">
              <a className="btn" href="tel:+918849165907">
                Call: +91 88491 65907
              </a>
              <a
                className="btn"
                href="https://wa.me/918849165907"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container">
          © {new Date().getFullYear()} Digital Typist. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
