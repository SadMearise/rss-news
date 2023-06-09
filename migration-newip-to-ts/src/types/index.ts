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
