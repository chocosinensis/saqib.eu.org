import {
  Header, Footer,
  Cursor
} from './shared';

export const Layout = ({ children }) => (
  <>
    <Header />
    <Cursor />
    <div className="sections">
      {children}
    </div>
    <Footer />
  </>
);

export { default as Home } from './Home';
export { default as About } from './About';
export { default as Explore } from './Explore';
export { default as Contact } from './Contact';
