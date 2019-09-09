export const chooseFunction = (value, resolve, reject) => (...args) => {
  if (value) {
    reject(...args);
    return;
  }

  resolve(...args);
};
