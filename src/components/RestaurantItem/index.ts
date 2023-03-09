import $template from './index.html';
import FavoriteIcon from '../FavoriteIcon';
import { Category } from '../../types';
import { imgSrc } from '../../image';

class RestaurantItem extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = $template
      .replace('{src}', imgSrc[this.getAttribute('category') as Category])
      .replace('{category}', this.getAttribute('category')!)
      .replace('{name}', this.getAttribute('name')!)
      .replace('{distance}', this.getAttribute('distance')!)
      .replace('{description}', this.getAttribute('description')!);

    const isFavorite = this.getAttribute('favorite') === 'true';
    const $wrapper = this.querySelector('.description__wrapper');
    $wrapper?.insertAdjacentHTML('beforeend', new FavoriteIcon().render(isFavorite));
  }
}

export default RestaurantItem;
