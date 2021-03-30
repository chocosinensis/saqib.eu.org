import { FadeIn } from './';

const Search = ({ delay, set }) => {
  return (
    <FadeIn delay={delay} className="search">
      <input type="text"
        placeholder="Enter Search Term"
        onChange={(e) => set(e.target.value)}
      />
    </FadeIn>
  );
}

Search.defaultProps = {
  delay: 0.4
};

Search.match = (src, term) => src.toLowerCase()
  .includes(term.trim().toLowerCase());

export default Search;
