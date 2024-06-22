const setCache = (key, data) => {
    const expiry = new Date().getTime() + 3600 * 1000; // 1 hour
    localStorage.setItem(key, JSON.stringify({ data, expiry }));
  };
  
  const getCache = (key) => {
    const cachedData = localStorage.getItem(key);
    if (!cachedData) return null;
  
    const { data, expiry } = JSON.parse(cachedData);
    if (new Date().getTime() > expiry) {
      localStorage.removeItem(key);
      return null;
    }
  
    return data;
  };
  
  export { setCache, getCache };