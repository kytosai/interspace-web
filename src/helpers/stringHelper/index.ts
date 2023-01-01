export function replaceAll(data: string, search: string, replace: string) {
  if (
    typeof data !== 'string' ||
    typeof search !== 'string' ||
    typeof replace !== 'string'
  ) {
    return '';
  }

  return data.split(search).join(replace);
}
