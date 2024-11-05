import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <section id="home">
        <h2>Welcome to My Portfolio</h2>
        <p>This is the home section of your portfolio.</p>
      </section>
      
      <section id="about">
        <h2>About Me</h2>
        <p>Details about you and your background.</p>
      </section>
      
      <section id="projects">
        <h2>My Projects</h2>
        <p>List your projects here.</p>
      </section>

      <section id="certificates">
        <h2>Certificates</h2>
        <div className="certificate-gallery">
          {/* Replace with your actual certificates */}
          <div className="certificate">Certificate 1</div>
          <div className="certificate">Certificate 2</div>
          <div className="certificate">Certificate 3</div>
        </div>
      </section>

      <section id="contact">
        <h2>Contact Me</h2>
        <p>Contact information or form.</p>
      </section>
    </>
  );
}
