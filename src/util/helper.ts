export const getWebsiteUrl = (term: string): string => {
    switch(term) {
        case 'AIA':
            return 'https://www.aia.com.sg/en/index';

        case 'Angular':
            return 'https://angular.io/';
        
        case 'Ethereum':
            return 'https://ethereum.org/en/';

        case 'Figma':
            return 'https://www.figma.com/';

        case 'Ionic':
            return 'https://ionicframework.com/';

        case 'Laravel':
            return 'https://laravel.com/';

        case 'MongoDB':
            return 'https://www.mongodb.com/docs/';
        
        case 'Nodejs':
            return 'https://nodejs.org/en/docs'; 

        case 'React':
            return 'https://react.dev/';

        case 'React Native':
            return 'https://reactnative.dev/';

        case 'TypeScript':
            return 'https://www.typescriptlang.org/docs/';

        case 'Vuejs':
            return 'https://vuejs.org/';
        
        default:
            return '#';
    }
}