function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search Tasks..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full p-3 rounded-lg border"
    />
  );
}

export default SearchBar;