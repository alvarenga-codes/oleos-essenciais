import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '../assets/icons/search.svg?react';
import { products } from '../data/products';
import styles from './SearchInput.module.css';

function SearchInput({ placeholder = 'Buscar produto...' }) {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1); // navegação por teclado

  const containerRef = useRef(null);
  const navigate = useNavigate();

  // Filtra produtos conforme o usuário digita
  function handleChange(e) {
    const value = e.target.value;
    setQuery(value);
    setActiveIndex(-1);

    if (value.trim().length === 0) {
      setSuggestions([]);
      return;
    }

    const filtered = products.filter((p) => p.name.toLowerCase().includes(value.toLowerCase()));
    setSuggestions(filtered);
  }

  // Navega para o produto ao clicar na sugestão
  function handleSelect(product) {
    setQuery(product.name);
    setSuggestions([]);
    navigate(`/produto/${product.slug}`);
  }

  // Navegação por teclado: setas + Enter + Escape
  function handleKeyDown(e) {
    if (e.key === 'ArrowDown') {
      setActiveIndex((prev) => Math.min(prev + 1, suggestions.length - 1));
    } else if (e.key === 'ArrowUp') {
      setActiveIndex((prev) => Math.max(prev - 1, 0));
    } else if (e.key === 'Enter') {
      if (activeIndex >= 0 && suggestions[activeIndex]) {
        handleSelect(suggestions[activeIndex]);
      }
    } else if (e.key === 'Escape') {
      setSuggestions([]);
    }
  }

  // Fecha dropdown ao clicar fora
  useEffect(() => {
    function handleClickOutside(e) {
      if (!containerRef.current?.contains(e.target)) {
        setSuggestions([]);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const showDropdown = isFocused && query.trim().length > 0;

  return (
    <div className={styles.searchContainer} ref={containerRef}>
      <input
        type="text"
        value={query}
        placeholder={placeholder}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={styles.searchInput}
        aria-label="Campo de busca"
        aria-autocomplete="list"
        aria-expanded={showDropdown}
        role="combobox"
        autoComplete="off"
      />
      <SearchIcon color={isFocused ? '#b8865a' : '#4a5c3e'} />

      {/* Dropdown de sugestões */}
      {showDropdown && (
        <ul className={styles.dropdown} role="listbox">
          {suggestions.length > 0 ? (
            suggestions.map((product, index) => (
              <li
                key={product.id}
                role="option"
                aria-selected={index === activeIndex}
                className={`${styles.dropdownItem} ${index === activeIndex ? styles.active : ''}`}
                // mousedown antes do onBlur do input — mantém o clique funcionando
                onMouseDown={() => handleSelect(product)}
              >
                {product.name}
              </li>
            ))
          ) : (
            <li className={styles.noResults}>Nenhum produto encontrado para "{query}"</li>
          )}
        </ul>
      )}
    </div>
  );
}

export default SearchInput;
