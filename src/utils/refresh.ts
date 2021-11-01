export const refresh = (timeout: any) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};