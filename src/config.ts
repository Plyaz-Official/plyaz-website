import type { Props as Item } from './components/CardGrid/card.astro';


type Texts = {
  home: {
    quoteBox: {
    engageQuote: string;
    subHeader: string;
    }
    cardContents: {
      howItWorksItems: Item[];
    };
    heroBackground: {
      emptyItems: Item[];
    };
  }
}

export const texts: Texts = {
  home: {
    quoteBox: {
    engageQuote: "PLYAZ helps released academy players stay visible, funded, and connected — with support from fans, clubs, and agents.",
    subHeader: "Starting in English football — built for athletes everywhere.",
    },  
    cardContents: {
      howItWorksItems: [{
        type: 'main',
        topTitle: 'From sign-up to',
        bottomTitle: 'Spotlight',
        description: 'FA-aligned. Secure. Transparent. Trusted.',
        ctaLabel: 'Learn more',
        pathname: 'https://plyaz.gitbook.io/plyaz_25/',
        newWindow: true
      }, {
        type: 'child',
        topTitle: 'Join us, verified academy releases ready for a second shot.',
        bottomTitle: '01',
      }, {
        type: 'child',
        topTitle: 'Fans and partners fuel the comeback with targeted support.',
        bottomTitle: '02',
      }, {
        type: 'child',
        topTitle: 'Success pays forward—players advance, backers gain rewards.',
        bottomTitle: '03',
      }, {
        type: 'child',
        topTitle: '',
        bottomTitle: '',
        description: '',
      }],
    },

    heroBackground: {
      emptyItems: [{
        type: 'signature',
        label: {
          value: 'new era of sports',
          position: 'top-left',
        },
      },{
        type: 'signature',
      },{
        type: 'signature',
        label: {
          value: 'create opportunities',
          position: 'bottom-right',
        },
      },{
        type: 'signature',
      },{
        type: 'signature',
      },{
        type: 'signature',
        label: {
          value: 'empowering players',
          position: 'bottom-left',
        },
      },{
        type: 'signature',
        label: {
          value: 'connecting talents',
          position: 'bottom-right',
        },
      },{
        type: 'signature',
      },{
        type: 'signature',
        showSignature: true,
      },]
    },
  }
};