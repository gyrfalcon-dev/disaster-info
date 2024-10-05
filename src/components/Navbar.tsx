import './Navbar.css'
function Navbar() {
  return (
    <header className="header">
        <a href="/" className="logo">DisasterInfo</a>

        <nav className="navbar">
            <a href="/">Home</a>
            <a href="/">About</a>
        </nav>
    </header>
  )
}

export default Navbar