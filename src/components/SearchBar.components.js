
const SearchBar = ({ onSearch }) => {
    const handleSearch = (event) => {
      onSearch(event.target.value);
    };
  
    return (
      <input type="text" placeholder="Buscar Producto" onChange={handleSearch} />
    );
  };
  
  export default SearchBar;