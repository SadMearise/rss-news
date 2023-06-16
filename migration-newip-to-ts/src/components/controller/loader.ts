import { ILoaderOptions, RequestOptions, INewsEverything, ISourcesEverything } from '../../types/index';
import { StatusCodes } from '../../constants';

class Loader {
  constructor(private baseLink: string, protected options: ILoaderOptions) {
    this.baseLink = baseLink;
    this.options = options;
  }

  protected getResp(
    { endpoint, options }: { endpoint: string; options?: Record<string, string> },
    callback = (): void => {
      console.error('No callback for GET response');
    }
  ): void {
    this.load('GET', endpoint, callback, options);
  }

  private errorHandler(res: Response): Response | never {
    if (!res.ok) {
      if (res.status === StatusCodes.Code401 || res.status === StatusCodes.Code404) {
        console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
      }
      throw Error(res.statusText);
    }

    return res;
  }

  private makeUrl(options: RequestOptions, endpoint: string): string {
    const urlOptions: ILoaderOptions & RequestOptions = { ...this.options, ...options };
    let url: string = `${this.baseLink}${endpoint}?`;

    Object.keys(urlOptions).forEach((key: string) => {
      url += `${key}=${urlOptions[key]}&`;
    });

    return url.slice(0, -1);
  }

  private load(
    method: string,
    endpoint: string,
    callback: (data: INewsEverything | ISourcesEverything) => void,
    options: Record<string, string> = {}
  ): void {
    fetch(this.makeUrl(options, endpoint), { method })
      .then(this.errorHandler)
      .then((res: Response) => res.json())
      .then((data: INewsEverything | ISourcesEverything) => callback(data))
      .catch((err: unknown) => err instanceof Error && console.error(err));
  }
}

export default Loader;
