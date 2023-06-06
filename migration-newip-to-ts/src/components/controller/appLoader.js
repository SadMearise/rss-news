import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '6d2aae09fe9a4a16b0ca9602e26e2dbd', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
