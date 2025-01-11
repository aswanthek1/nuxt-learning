export const useUtils = () => {
  const sayHello = () => console.log("Hello FROM UTILS");
  return {
    sayHello,
  };
};
