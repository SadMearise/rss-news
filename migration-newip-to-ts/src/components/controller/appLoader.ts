import Loader from './loader';
import { apiKey, apiPath } from '../../constants';

class AppLoader extends Loader {
  constructor() {
    super(apiPath, {
      apiKey,
    });
  }
}

export default AppLoader;
