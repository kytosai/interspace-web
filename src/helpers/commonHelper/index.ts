export const isServerSide = () => {
  return window === undefined;
};

export const isClientSide = () => {
  return window !== undefined;
};
