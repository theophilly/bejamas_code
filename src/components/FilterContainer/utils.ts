export function getPaginationCount<T>(products: T[], size: number): number {
  const total: number = products[0]
    ? Math.ceil(Object.keys(products.map((item) => item)).length / 9)
    : 0;

  return total;
}

export const generateActiveKeys = (saidObject: { [key: string]: Object }) => {
  const identifiers = Object.keys({ ...saidObject });
  const active = identifiers.filter(function (id) {
    return saidObject[id];
  });
  return active;
};
