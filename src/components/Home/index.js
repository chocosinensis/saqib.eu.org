import Plant from './Plant';
import Editor from './Editor';
import Tag from './Tag';

const Home = () => (
  <main>
    <div className="left">
      <h1 className="design name">
        It's me, <br/> Nazmus Saqib
      </h1>
      <Tag />
    </div>
    <Editor />
    <Plant />
  </main>
);

export default Home;
