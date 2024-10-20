import '../styles/Navbar.css'

function Navbar() {
  return (
    <nav>
        <div className="pembungkus">
            <div className="logo">
                <a href="" className='Logonya'> &lt; iCodeKY / &gt;</a>
            </div>
            <div className="menunya">
                <ul>
                    <li>
                        <a href="">About Me</a>
                    </li>
                    <li>
                        <a href="">My Projects</a>
                    </li>
                    <li>
                        <a href="">Experience</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar