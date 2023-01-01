export function jsonEncode(data: any) {
  try {
    return JSON.stringify(data);
  } catch (e) {
    return '';
  }
}

export function jsonDecode(jsonStr: string) {
  if (typeof jsonStr !== 'string') {
    return undefined;
  }

  try {
    return JSON.parse(jsonStr);
  } catch (e) {
    return undefined;
  }
}

export function isValidJson(jsonStr: string) {
  if (typeof jsonStr !== 'string') {
    return false;
  }

  try {
    JSON.parse(jsonStr);
    return true;
  } catch (e) {
    return false;
  }
}
