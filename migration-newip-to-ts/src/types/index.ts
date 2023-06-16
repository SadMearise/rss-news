export interface INews {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: {
    id: string;
    name: string;
  };
  title: string;
  url: string;
  urlToImage: string;
}

export interface ISources {
  category: string;
  country: string;
  description: string;
  id: string;
  language: string;
  name: string;
  url: string;
}

export interface INewsEverything {
  status: 'ok' | 'error';
  totalResults: number;
  articles: INews[];
}

export interface ISourcesEverything {
  status: 'ok' | 'error';
  sources: ISources[];
}

export interface ILoaderOptions {
  apiKey: string;
}

export enum StatusCodes {
  Code401 = 401,
  Code404 = 404,
}

export type RequestOptions = {
  [key: string]: string;
};

export type TCallback<T> = (data?: T) => void;
