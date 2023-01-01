export interface GetKeywordsRequest {
  _page?: number | string;
  _limit?: number | string;
  q?: string;
}

export interface KeywordItem {
  keyword: string;
}

export type GetKeywordsReponse = KeywordItem[];
