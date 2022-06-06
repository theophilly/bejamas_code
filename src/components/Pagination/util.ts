import { IArticle } from '../../store/type';

export function paginate(
  items: IArticle[],
  pageNumber: number,
  pageSize: number
) {
  const startIndex = (pageNumber - 1) * pageSize;

  return [...items].slice(startIndex, startIndex + pageSize);
}
