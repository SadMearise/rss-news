import News from './news/news';
import Sources from './sources/sources';
import { INewsEverything, ISourcesEverything, INews, ISources } from '../../types';

export class AppView {
  private readonly news: News;

  private readonly sources: Sources;

  constructor() {
    this.news = new News();
    this.sources = new Sources();
  }

  public drawNews(data: INewsEverything): void {
    const values: INews[] = data?.articles || [];
    this.news.draw(values);
  }

  public drawSources(data: ISourcesEverything): void {
    const values: ISources[] = data?.sources || [];
    this.sources.draw(values);
  }
}

export default AppView;
