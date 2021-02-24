import Me from './Me';
import Tag from './Tag';
import Editor from './Editor';
import Plant from './Plant';

const Home = () => (
  <main>
    <div className="left">
      <Me />
      <Tag />
    </div>
    <Editor />
    <Plant />
  </main>
);

export default Home;
