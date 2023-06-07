export type PersonalProject = {
    title: string,
    url: string,
    description: string[],
    tags: string[]
}

export const personalProjects = [
    {
        title: 'Amazon Web Services',
        url: '',
        description: [
            'Deploying a Web Application with AWS Amplify'
        ],
        tags: ['AWS', 'AWS Amplify']
    },
    {
        title: 'Singapore TOTO Lottery - Reality Predictor',
        url: '',
        description: [
            'Visualize the probability and statistics of hitting the jackpot of Singapore TOTO Lottery.',
            'Ran 12 million iterations with my very limited 8GB RAM laptop to generate 6 random unique numbers between 1 - 49 to match another similar random set.',
            '7 different ways of playing: Choice to pick between 7 - 12 random numbers in hopes to match just 6 random numbers',
            'Realized that probability is very, very, very low',
            'Looking for jobs now'
        ],
        tags: ['Python']
    },
    {
        title: 'Campaign/Product Promotion Template Generator',
        url: '',
        description: [
            '9-Template generator that consists of Header, Feature, Image, Content and Footer components',
            'Each template shows a different sets of products and price format',
            'Example: Template-1 shows 2 vertically stacked products, Template-2 shows 3 horizontally placed products'
        ],
        tags: ['Vuejs']
    },
    {
        title: 'Introduction to DevOps',
        url: 'https://github.com/jun-han-github/node-docker',
        description: [
            'Covering Docker fundamentals with Mongo & Redis database, deployed on an Ubuntu VM as my production server and utilize Docker Swarm to handle updates.'
        ],
        tags: ['Docker', 'Nodejs', 'MongoDB', 'Redis']
    },
    {
        title: 'Fileloader for Employee data',
        url: 'https://github.com/jun-han-github/angular-springboot',
        description: [
            'This project allows you to view and upload CSV (UTF-8 encoded) files containing employee data containing 4 columns in this specific order: id, name, login & salary.'
        ],
        tags: ['Angular', 'Springboot']
    },
    {
        title: 'Job-Search Mobile App',
        url: 'https://github.com/jun-han-github/react-native-app',
        description: [
            'This project displays popular jobs on mobile app. React Native works for both iOS and Android.'
        ],
        tags: ['React Native', 'React Navigation']
    },
]