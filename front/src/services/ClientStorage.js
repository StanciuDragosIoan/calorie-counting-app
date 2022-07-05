/*
 * Service for handling ClientStorage for the interface
 */
export const storeItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getItem = (key) => {
  return JSON.parse(localStorage.getItem(key));
};
