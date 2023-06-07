export const getWebsiteUrl = (term: string): string => {
    switch(term) {
        case 'AIA':
            return 'https://www.aia.com.sg/en/index';
            
        case 'Angular':
            return 'https://angular.io/';
            
        case 'AWS':
            return 'https://aws.amazon.com/';
        
        case 'AWS Amplify':
            return 'https://aws.amazon.com/amplify/';
                        
        case 'AXA':
            return 'https://www.axa.com/';

        case 'Docker':
            return 'https://www.docker.com/';
        
        case 'Ethereum':
            return 'https://ethereum.org/en/';

        case 'Figma':
            return 'https://www.figma.com/';

        case 'GAuth':
            return 'https://safety.google/authentication/';

        case 'Great Eastern':
            return 'https://www.greateasternlife.com/sg/en/personal-insurance.html';

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
        
        case 'React Navigation':
            return 'https://reactnavigation.org/docs/getting-started/';

        case 'Redis':
            return 'https://redis.io/docs/about/';

        case 'TypeScript':
            return 'https://www.typescriptlang.org/docs/';

        case 'Vuejs':
            return 'https://vuejs.org/';
        
        default:
            return '';
    }
}