import './news.css';
import { INews } from '../../../types/index';

class News {
  public draw(data: INews[]): void {
    const news: INews[] = data.length >= 10 ? data.filter((_item: INews, idx: number) => idx < 10) : data;

    const fragment: DocumentFragment = document.createDocumentFragment();
    const newsItemTemp: HTMLTemplateElement | null = document.querySelector('#newsItemTemp');

    news.forEach((item: INews, idx: number) => {
      if (newsItemTemp !== null) {
        const newsClone: Node = newsItemTemp.content.cloneNode(true);

        if (!(newsClone instanceof DocumentFragment)) {
          throw new Error();
        }

        if (idx % 2) {
          const newsItem: HTMLElement | null = newsClone.querySelector('.news__item');

          if (newsItem !== null) {
            newsItem.classList.add('alt');
          }
        }

        const newsMetaPhoto: HTMLElement | null = newsClone.querySelector('.news__meta-photo');
        if (newsMetaPhoto !== null) {
          newsMetaPhoto.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
        }

        const newsMetaAuthor: HTMLElement | null = newsClone.querySelector('.news__meta-author');
        if (newsMetaAuthor !== null) {
          newsMetaAuthor.textContent = item.author || item.source.name;
        }

        const newsMetaDate: HTMLElement | null = newsClone.querySelector('.news__meta-date');
        if (newsMetaDate !== null) {
          newsMetaDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
        }

        const descriptionTitle: HTMLElement | null = newsClone.querySelector('.news__description-title');
        if (descriptionTitle !== null) {
          descriptionTitle.textContent = item.title;
        }

        const descriptionSource: HTMLElement | null = newsClone.querySelector('.news__description-source');
        if (descriptionSource !== null) {
          descriptionSource.textContent = item.source.name;
        }

        const descriptionContent: HTMLElement | null = newsClone.querySelector('.news__description-content');
        if (descriptionContent !== null) {
          descriptionContent.textContent = item.description;
        }

        const readMore: HTMLElement | null = newsClone.querySelector('.news__read-more a');
        if (readMore !== null) {
          readMore.setAttribute('href', item.url);
        }

        fragment.append(newsClone);
      }
    });

    const newsBlock: HTMLElement | null = document.querySelector('.news');
    if (newsBlock !== null) {
      newsBlock.innerHTML = '';
      newsBlock.appendChild(fragment);
    }
  }
}

export default News;
