const generateId = (state = []) => {
  let id = 1;
  while (true) {
    if (state.every(item => item.id !== id)) {
      return id;
    }

    id++;
  }
};

export default generateId;
