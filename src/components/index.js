import Navbar from './Navbar';
import Cursor from './Cursor';
import Footer from './Footer';

import Home from './Home';
import About from './About';
import Explore from './Explore';
import Contact from './Contact';

const Layout = ({ children }) => (
  <>
    <Navbar />
    <Cursor />
    <div className="sections">
      {children}
    </div>
    <Footer />
  </>
);

export {
  Layout,
  Home, About, Explore, Contact
};
