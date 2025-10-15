import type { Props as Item } from './components/CardGrid/card.astro';


type Texts = {
  home: {
    quoteBox: {
    engageQuote: string;
    subHeader: string;
    }
    cardContents: {
      missionItems: Item[];
      revolutionItems: Item[];
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
      missionItems: [{
          type: 'main',
          topTitle: 'company',
          bottomTitle: 'mission',
          description: '',
        }, {
          type: 'child',
          topTitle: 'Breaking down the walls between athletes and fans. Forever.',
          bottomTitle: '01',
          description: '',
        }, {
          type: 'child',
          topTitle: 'Where passion meets opportunity, and dedication gets rewarded.',
          bottomTitle: '02',
          description: '',
        }, {
          type: 'child',
          topTitle: 'No more watching from the sidelines; become part of their journey.',
          bottomTitle: '03',
          description: '',
        }, {
          type: 'child',
          topTitle: 'Your support becomes their success, and their success becomes yours.',
          bottomTitle: '04',
          description: '',
        }, {
          type: 'child',
          topTitle: '',
          bottomTitle: '',
          description: '',
        }],
      revolutionItems: [{
        type: 'main',
        topTitle: 'Revolutionary',
        bottomTitle: 'Features',
        description: 'Experience the future of sports investment through our cutting-edge platform.',
        ctaLabel: 'read the doc',
        pathname: 'https://plyaz.gitbook.io/plyaz',
        newWindow: true
      }, {
        type: 'child',
        topTitle: "The Sports World's Best-Kept Secret",
        bottomTitle: 'Plyaz ecosystem',
        description: 'Join industry pros and super fans to discover how careers are built in sports. Connect with key players where passion meets opportunity.',
      }, {
        type: 'child',
        topTitle: 'Your Talent Deserves Recognition',
        bottomTitle: 'Athlete tokenization',
        description: 'Turn your athletic talent into unique fan experiences. Let scouts and clubs vie for your attention while you build your authentic personal brand and get rewarded for your dedication.',
      }, {
        type: 'child',
        topTitle: 'Level Up Your Fan Status',
        bottomTitle: 'Fan engagement',
        description: 'Take on challenges to show your super fan status. Unlock exclusive content and connect with athletes - Be part of their journey and celebrations.',
      }, {
        type: 'child',
        topTitle: 'Fantasy Powered by Real Relationships',
        bottomTitle: 'Fantasy sports',
        description: 'Create your fantasy team with athletes you support. Your passion boosts their performance. Join leagues where fandom meets strategy.',
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
          value: 'empowering athletes',
          position: 'bottom-left',
        },
      },{
        type: 'signature',
        label: {
          value: 'connecting talents',
          position: 'top-right',
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