export const setLocalStorageArray = (key, array) => {
  localStorage.setItem(key, JSON.stringify(array));
};

export const getLocalStorageArray = (key) => {
  const data = localStorage.getItem(key);
  return JSON.parse(data);
};

export const addToLocalStorageArray = (key, newObject) => {
  const array = getLocalStorageArray(key);
  array?.push(newObject);
  setLocalStorageArray(key, array);
};

export const updateLocalStorageArray = (key, updatedObject) => {
  const array = getLocalStorageArray(key);
  const updatedArray = array.map((item) =>
    item.id === updatedObject.id ? updatedObject : item
  );
  setLocalStorageArray(key, updatedArray);
};

export const removeFromLocalStorageArray = (key, id) => {
  const array = getLocalStorageArray(key);
  const filteredArray = array.filter((item) => item.id !== id);
  setLocalStorageArray(key, filteredArray);
};
