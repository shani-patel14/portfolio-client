export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} ShaniPatel. Built with MERN Stack.</p>
      <div className="footer-links">
        <a href="https://github.com/shani-patel14" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/patel-shani?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="shanipatel5008@gmail.com">Email</a>
      </div>
    </footer>
  )
}
