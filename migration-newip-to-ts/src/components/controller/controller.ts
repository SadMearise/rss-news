import AppLoader from './appLoader';
import { ISourcesEverything, INewsEverything, TCallback } from '../../types';
import { Paths } from '../../constants';

class AppController extends AppLoader {
  public getSources(callback: TCallback<ISourcesEverything>): void {
    super.getResp(
      {
        endpoint: Paths.sources,
      },
      callback
    );
  }

  public getNews(e: Event, callback: TCallback<INewsEverything>): void {
    let { target }: { target: EventTarget | null } = e;
    const newsContainer: EventTarget | null = e.currentTarget;

    if (!(newsContainer instanceof Element)) {
      throw new Error();
    }

    while (target !== newsContainer) {
      if (target instanceof HTMLElement && target !== null) {
        if (target.classList.contains('source__item')) {
          const sourceId: string | null = target.getAttribute('data-source-id');

          if (newsContainer !== null && newsContainer instanceof HTMLElement) {
            if (newsContainer.getAttribute('data-source') !== sourceId) {
              if (sourceId !== null) {
                newsContainer.setAttribute('data-source', sourceId);
                super.getResp(
                  {
                    endpoint: Paths.everything,
                    options: {
                      sources: sourceId,
                    },
                  },
                  callback
                );
              }
            }
          }
          return;
        }
        target = target.parentNode;
      }
    }
  }
}

export default AppController;
