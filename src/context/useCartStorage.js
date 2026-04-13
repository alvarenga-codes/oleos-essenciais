const STORAGE_KEY = 'cartItems';

export function useCartStorage() {
  function load() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      console.error(
        'Erro ao carregar o carrinho do localStorage. O item será removido para evitar erros futuros.'
      );
      localStorage.removeItem(STORAGE_KEY); //Remover item corrompido para evitar erros futuros
      return [];
    }
  }
  function save(items) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (error) {
      console.warn('Não foi possível salvar o carrinho:', error);
    }
  }

  function clear() {
    localStorage.removeItem(STORAGE_KEY);
  }

  return { load, save, clear };
}
