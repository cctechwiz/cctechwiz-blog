/** @jsx jsx */
import { jsx } from 'theme-ui'
import { FiHexagon } from "react-icons/fi";

const Footer = () => (
  <footer 
    className="site-footer"
    sx={{
      bg: 'primary'
    }}
  >
    <div className="container">
      <p><span className="icon"><FiHexagon/> <FiHexagon/> <FiHexagon/></span></p>
    </div>
  </footer>
)

export default Footer