import './sources.css';
import { ISources } from '../../../types/index';

class Sources {
  public draw(data: ISources[]): void {
    const fragment: DocumentFragment = document.createDocumentFragment();
    const sourceItemTemp: HTMLTemplateElement | null = document.querySelector('#sourceItemTemp');

    data.forEach((item: ISources) => {
      if (sourceItemTemp !== null) {
        const sourceClone: Node = sourceItemTemp.content.cloneNode(true);

        if (!(sourceClone instanceof DocumentFragment)) {
          throw new Error();
        }

        const sourceItemName: HTMLElement | null = sourceClone.querySelector('.source__item-name');
        if (sourceItemName !== null) {
          sourceItemName.textContent = item.name;
        }

        const sourceItem: HTMLElement | null = sourceClone.querySelector('.source__item');
        if (sourceItem !== null) {
          sourceItem.setAttribute('data-source-id', item.id);
        }

        fragment.append(sourceClone);
      }
    });

    const sources: HTMLElement | null = document.querySelector('.sources');

    if (sources !== null) {
      sources.append(fragment);
    }
  }
}

export default Sources;
