const logger = (store) => (action) => {
  console.group(action?.type);
  console.info("dispatching", action);
  let result = next(action);
  console.log("net state", store?.getState());
  console.groupEnd();
  return result;
};

export default logger;
