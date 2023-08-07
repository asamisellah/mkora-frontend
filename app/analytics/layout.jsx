import Brand from "../components/brand";
import Navbar from "../components/navbar";
import { navLinks } from "../constants";

const AnalyticsLayout = ({children}) => (
  <>
  <Navbar navLinks={navLinks}>
      <Brand></Brand>
  </Navbar>
  <article>{ children }</article>
  </>
)

export default AnalyticsLayout