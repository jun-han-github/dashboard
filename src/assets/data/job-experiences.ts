export type JobExperience = {
  title: string,
  url: string,
  description: string[],
  tags: string[]
}

export const jobExperiences = [
    {
        title: 'Full Stack Developer, AIKEN DIGITAL',
        url: 'https://www.aikendigital.com/about',
        description: [
            'Migration and develop features for existing CRM mobile app (AIA) using Ionic, Angular, Vue.js and Laravel, subsequently a new project launch for a crypto-wallet app (Haven wallet) with the same tech-stack.',
            'My role was to develop frontend pages. Mobile-first design referenced from Figma.',
            'I led another junior to develop the Admin portal with login functionality with Google Auth and, features like user summaries, asset management, toggling of transacted tokens, search functions and editors.',
            'Web3 experience: Research on blockchain-related tools and libraries and worked with Moralis and Covalent APIs.'
        ],
        tags: ['Ionic', 'Angular', 'Vuejs', 'TypeScript', 'PHP', 'Laravel', 'Insurance', 'AIA', 'Web3', 'GAuth', 'Figma', 'SequelAce']
    },
    {
        title: 'Backend Developer, HP SINGAPORE',
        url: 'https://www.hp.com/sg-en/shop/printers.html',
        description: [
            'Development of printer ink-level notifications and simplify ink-refill procedure',
            'Build and automate error logs using Node.js and syncing of error logs.',
            'Exposed to teamwork and communication across global teams: China, India, Thailand and Philippines'
        ],
        tags: ['Nodejs', 'MongoDB']
    },
    {
        title: 'Fullstack Developer, HACHI TECH',
        url: 'https://www.hachi.tech/about-challenger',
        description: [
            'Develop components using Vue.js frontend and Laravel as backend API.',
            'Refactoring of codes using DRY principles and Single Responsibility principles in SOLID. Some experience with Docker.',
            'Integration of third-party APIs like Shopee, Lazada and Amazon.'
        ],
        tags: ['Vuejs', 'PHP', 'Laravel', 'Shopee', 'Lazada', 'Amazon', 'PostgreSQL']
    },
    {
        title: 'Web Developer, ACCREDIFY.IO',
        url: 'https://accredify.io/',
        description: [
            'Build digital certificates using TypeScript and React, and I had the opportunity to develop a webpage using Laravel framework.',
            'Learnt about Ethereum blockchain, Etherscan, gas fees and cryptography works here.'
        ],
        tags: ['React', 'TypeScript', 'PHP', 'Laravel', 'Ethereum', 'MySQL']
    },
    {
        title: 'Financial Consultant, ALTITUDE ALLIANCE',
        url: 'https://www.greateasternlife.com/sg/en/personal-insurance.html',
        description: [
            'Drive sales of investment and insurance products to customers while utilizing 3-Year Alpha, Sharpe Ratio and Volatility to better determine selection of funds.',
            'Created a client pipeline using Excel, separating clienteles into Cold Market > Warm Lead > Appointment Fixed & Outcome > Client, which became an irreplaceable business tool.',
            'Research on global investment markets, current affairs, industrial movements and long-term investing opportunities on equities and fixed assets.'
        ],
        tags: ['Insurance', 'Investment', 'Sales', 'Great Eastern', 'AXA']
    },
]
