import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { INewsEverything, ISourcesEverything } from '../../types';

class App {
  private readonly controller: AppController;

  private readonly view: AppView;

  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }

  public start(): void {
    const sourcesEl: Element | null = document.querySelector('.sources');

    if (sourcesEl !== null) {
      sourcesEl.addEventListener('click', (e: Event) =>
        this.controller.getNews(e, (data: INewsEverything | undefined): void => {
          if (data !== undefined) {
            this.view.drawNews(data);
          }
        })
      );
    }

    this.controller.getSources((data: ISourcesEverything | undefined): void => {
      if (data !== undefined) {
        this.view.drawSources(data);
      }
    });
  }
}

export default App;
