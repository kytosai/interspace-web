export const getLastIdFromSlug = (slug: string) => {
  const arrSlug = slug.split('-');
  return arrSlug[arrSlug.length - 1] ?? '';
};
