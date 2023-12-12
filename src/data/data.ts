import { type Info } from '@/types/Info';

export const wallets: Record<string, Info> = {
  Metamask: {
    url: 'https://metamask.io/',
    submittedByName: '@moritz',
    submittedByUrl: 'https://warpcast.com/moritz/',
    updatedAt: '11/12/2023',
    updatedByName: '@kien-ngo',
    updatedByUrl: 'https://github.com/kien-ngo',
    mobile: {
      accountType: 'EOA',
      chainCompatibility: {
        configurable: true,
        autoswitch: false,
        ethereum: true,
        optimism: true,
        arbitrum: true,
        base: false,
        polygon: true,
        gnosis: false,
        bnbSmartChain: true,
        avalanche: true,
      },
      ensCompatibility: {
        mainnet: true,
        subDomains: true,
        offchain: false,
        L2s: false,
        customDomains: false,
        freeUsernames: false,
      },
      backupOptions: {
        cloud: false,
        local: true,
        socialRecovery: false,
      },
      securityFeatures: {
        multisig: false,
        MPC: false,
        keyRotation: false,
        transactionScanning: true,
        limitsAndTimelocks: false,
        hardwareWalletSupport: true,
      },
      availableTestnets: {
        availableTestnets: true,
      },
      license: 'SOURCE_AVAILABLE',
      connectionMethods: {
        walletConnect: true,
        injected: false,
        embedded: false,
        inappBrowser: true,
      },
      modularity: {
        modularity: false,
      },
    },
    browser: {
      accountType: 'EOA',
      chainCompatibility: {
        configurable: true,
        autoswitch: false,
        ethereum: true,
        optimism: true,
        arbitrum: true,
        base: false,
        polygon: true,
        gnosis: false,
        bnbSmartChain: true,
        avalanche: true,
      },
      ensCompatibility: {
        mainnet: true,
        subDomains: true,
        offchain: true,
        L2s: false,
        customDomains: false,
        freeUsernames: false,
      },
      backupOptions: {
        cloud: false,
        local: true,
        socialRecovery: false,
      },
      securityFeatures: {
        multisig: false,
        MPC: false,
        keyRotation: false,
        transactionScanning: true,
        limitsAndTimelocks: false,
        hardwareWalletSupport: true,
      },
      availableTestnets: {
        availableTestnets: true,
      },
      license: 'SOURCE_AVAILABLE',
      connectionMethods: {
        walletConnect: false,
        injected: true,
        embedded: false,
        inappBrowser: false,
      },
      modularity: {
        modularity: true,
      },
    },
    issues: {
      ensCompatibility: {
        L2s: ['https://github.com/MetaMask/metamask-extension/issues/12990'],
      },
    },
  },
  'Uniswap Wallet': {
    url: 'https://wallet.uniswap.org/',
    submittedByName: '@slobo.eth',
    submittedByUrl: 'https://warpcast.com/slobo.eth/',
    updatedAt: '11/12/2023',
    updatedByName: '@kien-ngo',
    updatedByUrl: 'https://github.com/kien-ngo',
    mobile: {
      accountType: 'EOA',
      chainCompatibility: {
        configurable: false,
        autoswitch: true,
        ethereum: true,
        optimism: true,
        arbitrum: true,
        base: true,
        polygon: true,
        gnosis: false,
        bnbSmartChain: true,
        avalanche: false,
      },
      ensCompatibility: {
        mainnet: true,
        subDomains: true,
        offchain: true,
        L2s: false,
        customDomains: true,
        freeUsernames: false,
      },
      backupOptions: {
        cloud: true,
        local: true,
        socialRecovery: false,
      },
      securityFeatures: {
        multisig: false,
        MPC: false,
        keyRotation: false,
        transactionScanning: false,
        limitsAndTimelocks: false,
        hardwareWalletSupport: false,
      },
      availableTestnets: {
        availableTestnets: false,
      },
      license: 'OPEN_SOURCE',
      connectionMethods: {
        walletConnect: true,
        injected: false,
        embedded: false,
        inappBrowser: false,
      },
      modularity: {
        modularity: false,
      },
    },
  },
  'Coinbase Wallet': {
    url: 'https://www.coinbase.com/wallet/',
    submittedByName: '@moritz',
    submittedByUrl: 'https://warpcast.com/moritz/',
    updatedAt: '11/12/2023',
    updatedByName: '@kien-ngo',
    updatedByUrl: 'https://github.com/kien-ngo',
    mobile: {
      accountType: 'EOA',
      chainCompatibility: {
        configurable: true,
        autoswitch: true,
        ethereum: true,
        optimism: true,
        arbitrum: true,
        base: true,
        polygon: true,
        gnosis: true,
        bnbSmartChain: true,
        avalanche: true,
      },
      ensCompatibility: {
        mainnet: true,
        subDomains: true,
        offchain: true,
        L2s: true,
        customDomains: false,
        freeUsernames: true,
      },
      backupOptions: {
        cloud: true,
        local: true,
        socialRecovery: false,
      },
      securityFeatures: {
        multisig: false,
        MPC: false,
        keyRotation: false,
        transactionScanning: true,
        limitsAndTimelocks: false,
        hardwareWalletSupport: false,
      },
      availableTestnets: {
        availableTestnets: true,
      },
      license: 'PROPRIETARY',
      connectionMethods: {
        walletConnect: true,
        injected: false,
        embedded: false,
        inappBrowser: true,
      },
      modularity: {
        modularity: false,
      },
    },
    browser: {
      accountType: 'EOA',
      chainCompatibility: {
        configurable: true,
        autoswitch: true,
        ethereum: true,
        optimism: true,
        arbitrum: true,
        base: true,
        polygon: true,
        gnosis: true,
        bnbSmartChain: true,
        avalanche: true,
      },
      ensCompatibility: {
        mainnet: true,
        subDomains: true,
        offchain: true,
        L2s: true,
        customDomains: false,
        freeUsernames: true,
      },
      backupOptions: {
        cloud: true,
        local: true,
        socialRecovery: false,
      },
      securityFeatures: {
        multisig: false,
        MPC: false,
        keyRotation: false,
        transactionScanning: true,
        limitsAndTimelocks: false,
        hardwareWalletSupport: true,
      },
      availableTestnets: {
        availableTestnets: true,
      },
      license: 'PROPRIETARY',
      connectionMethods: {
        walletConnect: false,
        injected: true,
        embedded: false,
        inappBrowser: false,
      },
      modularity: {
        modularity: false,
      },
    },
  },
  Rainbow: {
    url: 'https://rainbow.me/',
    submittedByName: '@moritz',
    submittedByUrl: 'https://warpcast.com/moritz/',
    updatedAt: '11/12/2023',
    updatedByName: '@kien-ngo',
    updatedByUrl: 'https://github.com/kien-ngo',
    mobile: {
      accountType: 'EOA',
      chainCompatibility: {
        configurable: false,
        autoswitch: true,
        ethereum: true,
        optimism: true,
        arbitrum: true,
        base: true,
        polygon: true,
        gnosis: false,
        bnbSmartChain: true,
        avalanche: false,
      },
      ensCompatibility: {
        mainnet: true,
        subDomains: true,
        offchain: true,
        L2s: true,
        customDomains: false,
        freeUsernames: false,
      },
      backupOptions: {
        cloud: true,
        local: true,
        socialRecovery: false,
      },
      securityFeatures: {
        multisig: false,
        MPC: false,
        keyRotation: false,
        transactionScanning: true,
        limitsAndTimelocks: false,
        hardwareWalletSupport: true,
      },
      availableTestnets: {
        availableTestnets: false,
      },
      license: 'OPEN_SOURCE',
      connectionMethods: {
        walletConnect: true,
        injected: false,
        embedded: false,
        inappBrowser: false,
      },
      modularity: {
        modularity: false,
      },
    },
    browser: {
      accountType: 'EOA',
      chainCompatibility: {
        configurable: false,
        autoswitch: true,
        ethereum: true,
        optimism: true,
        arbitrum: true,
        base: true,
        polygon: true,
        gnosis: false,
        bnbSmartChain: true,
        avalanche: false,
      },
      ensCompatibility: {
        mainnet: true,
        subDomains: true,
        offchain: true,
        L2s: true,
        customDomains: false,
        freeUsernames: false,
      },
      backupOptions: {
        cloud: false,
        local: true,
        socialRecovery: false,
      },
      securityFeatures: {
        multisig: false,
        MPC: false,
        keyRotation: false,
        transactionScanning: true,
        limitsAndTimelocks: false,
        hardwareWalletSupport: true,
      },
      availableTestnets: {
        availableTestnets: true,
      },
      license: 'OPEN_SOURCE',
      connectionMethods: {
        walletConnect: false,
        injected: true,
        embedded: false,
        inappBrowser: false,
      },
      modularity: {
        modularity: false,
      },
    },
  },
  'Safe Wallet': {
    url: 'https://app.safe.global/',
    submittedByName: '@moritz',
    submittedByUrl: 'https://warpcast.com/moritz/',
    updatedAt: '11/12/2023',
    updatedByName: '@kien-ngo',
    updatedByUrl: 'https://github.com/kien-ngo',
    mobile: {
      accountType: 'SAFE',
      chainCompatibility: {
        configurable: false,
        autoswitch: false,
        ethereum: true,
        optimism: true,
        arbitrum: true,
        base: true,
        polygon: true,
        gnosis: true,
        bnbSmartChain: true,
        avalanche: true,
      },
      ensCompatibility: {
        mainnet: true,
        subDomains: true,
        offchain: false,
        L2s: false,
        customDomains: false,
        freeUsernames: false,
      },
      backupOptions: {
        cloud: false,
        local: true,
        socialRecovery: true,
      },
      securityFeatures: {
        multisig: true,
        MPC: false,
        keyRotation: true,
        transactionScanning: true,
        limitsAndTimelocks: true,
        hardwareWalletSupport: true,
      },
      availableTestnets: {
        availableTestnets: true,
      },
      license: 'OPEN_SOURCE',
      connectionMethods: {
        walletConnect: false,
        injected: false,
        embedded: false,
        inappBrowser: false,
      },
      modularity: {
        modularity: false,
      },
    },
    browser: {
      accountType: 'SAFE',
      chainCompatibility: {
        configurable: false,
        autoswitch: false,
        ethereum: true,
        optimism: true,
        arbitrum: true,
        base: true,
        polygon: true,
        gnosis: true,
        bnbSmartChain: true,
        avalanche: true,
      },
      ensCompatibility: {
        mainnet: true,
        subDomains: true,
        offchain: false,
        L2s: false,
        customDomains: false,
        freeUsernames: false,
      },
      backupOptions: {
        cloud: false,
        local: true,
        socialRecovery: true,
      },
      securityFeatures: {
        multisig: true,
        MPC: false,
        keyRotation: true,
        transactionScanning: true,
        limitsAndTimelocks: true,
        hardwareWalletSupport: true,
      },
      availableTestnets: {
        availableTestnets: true,
      },
      license: 'OPEN_SOURCE',
      connectionMethods: {
        walletConnect: true,
        injected: false,
        embedded: false,
        inappBrowser: false,
      },
      modularity: {
        modularity: true,
      },
    },
  },
  Obvious: {
    url: 'https://obvious.technology/',
    submittedByName: '@jebui',
    submittedByUrl: 'https://warpcast.com/jebui/',
    updatedAt: '11/12/2023',
    updatedByName: '@kien-ngo',
    updatedByUrl: 'https://github.com/kien-ngo',
    mobile: {
      accountType: '4337',
      chainCompatibility: {
        configurable: false,
        autoswitch: true,
        ethereum: true,
        optimism: true,
        arbitrum: true,
        base: true,
        polygon: true,
        gnosis: true,
        bnbSmartChain: true,
        avalanche: true,
      },
      ensCompatibility: {
        mainnet: true,
        subDomains: true,
        offchain: true,
        L2s: true,
        customDomains: true,
        freeUsernames: true,
      },
      backupOptions: {
        cloud: false,
        local: true,
        socialRecovery: true,
      },
      securityFeatures: {
        multisig: false,
        MPC: false,
        keyRotation: false,
        transactionScanning: true,
        limitsAndTimelocks: false,
        hardwareWalletSupport: true,
      },
      availableTestnets: {
        availableTestnets: false,
      },
      license: 'PROPRIETARY',
      connectionMethods: {
        walletConnect: true,
        injected: false,
        embedded: false,
        inappBrowser: false,
      },
      modularity: {
        modularity: false,
      },
    },
  },
  Tokenary: {
    url: 'https://lil.org/',
    submittedByName: '@grachyov',
    submittedByUrl: 'https://github.com/grachyov',
    updatedAt: '11/12/2023',
    updatedByName: '@kien-ngo',
    updatedByUrl: 'https://github.com/kien-ngo',
    mobile: {
      accountType: 'EOA',
      chainCompatibility: {
        configurable: false,
        autoswitch: true,
        ethereum: true,
        optimism: true,
        arbitrum: true,
        base: true,
        polygon: true,
        gnosis: true,
        bnbSmartChain: true,
        avalanche: true,
      },
      ensCompatibility: {
        mainnet: false,
        subDomains: false,
        offchain: false,
        L2s: false,
        customDomains: false,
        freeUsernames: false,
      },
      backupOptions: {
        cloud: false,
        local: true,
        socialRecovery: false,
      },
      securityFeatures: {
        multisig: false,
        MPC: false,
        keyRotation: false,
        transactionScanning: false,
        limitsAndTimelocks: false,
        hardwareWalletSupport: false,
      },
      availableTestnets: {
        availableTestnets: true,
      },
      license: 'OPEN_SOURCE',
      connectionMethods: {
        walletConnect: false,
        injected: true,
        embedded: false,
        inappBrowser: false,
      },
      modularity: {
        modularity: false,
      },
    },
    browser: {
      accountType: 'EOA',
      chainCompatibility: {
        configurable: false,
        autoswitch: true,
        ethereum: true,
        optimism: true,
        arbitrum: true,
        base: true,
        polygon: true,
        gnosis: true,
        bnbSmartChain: true,
        avalanche: true,
      },
      ensCompatibility: {
        mainnet: false,
        subDomains: false,
        offchain: false,
        L2s: false,
        customDomains: false,
        freeUsernames: false,
      },
      backupOptions: {
        cloud: false,
        local: true,
        socialRecovery: false,
      },
      securityFeatures: {
        multisig: false,
        MPC: false,
        keyRotation: false,
        transactionScanning: false,
        limitsAndTimelocks: false,
        hardwareWalletSupport: false,
      },
      availableTestnets: {
        availableTestnets: true,
      },
      license: 'OPEN_SOURCE',
      connectionMethods: {
        walletConnect: false,
        injected: true,
        embedded: false,
        inappBrowser: false,
      },
      modularity: {
        modularity: false,
      },
    },
    desktop: {
      accountType: 'EOA',
      chainCompatibility: {
        configurable: false,
        autoswitch: true,
        ethereum: true,
        optimism: true,
        arbitrum: true,
        base: true,
        polygon: true,
        gnosis: true,
        bnbSmartChain: true,
        avalanche: true,
      },
      ensCompatibility: {
        mainnet: false,
        subDomains: false,
        offchain: false,
        L2s: false,
        customDomains: false,
        freeUsernames: false,
      },
      backupOptions: {
        cloud: false,
        local: true,
        socialRecovery: false,
      },
      securityFeatures: {
        multisig: false,
        MPC: false,
        keyRotation: false,
        transactionScanning: false,
        limitsAndTimelocks: false,
        hardwareWalletSupport: false,
      },
      availableTestnets: {
        availableTestnets: true,
      },
      license: 'OPEN_SOURCE',
      connectionMethods: {
        walletConnect: false,
        injected: true,
        embedded: false,
        inappBrowser: false,
      },
      modularity: {
        modularity: false,
      },
    },
  },
  'Ambire Wallet': {
    url: 'https://ambire.com',
    submittedByName: '@jordan-enev',
    submittedByUrl: 'https://github.com/jordan-enev',
    updatedAt: '11/12/2023',
    updatedByName: '@jordan-enev',
    updatedByUrl: 'https://github.com/jordan-enev',
    mobile: {
      accountType: '4337',
      chainCompatibility: {
        configurable: false,
        autoswitch: true,
        ethereum: true,
        optimism: true,
        arbitrum: true,
        base: true,
        polygon: true,
        gnosis: true,
        bnbSmartChain: true,
        avalanche: true,
      },
      ensCompatibility: {
        mainnet: true,
        subDomains: true,
        offchain: false,
        L2s: false,
        customDomains: false,
        freeUsernames: false,
      },
      backupOptions: {
        cloud: true,
        local: true,
        socialRecovery: true,
      },
      securityFeatures: {
        multisig: false,
        MPC: false,
        keyRotation: true,
        transactionScanning: false,
        limitsAndTimelocks: true,
        hardwareWalletSupport: true,
      },
      availableTestnets: {
        availableTestnets: true,
      },
      license: 'OPEN_SOURCE',
      connectionMethods: {
        walletConnect: false,
        injected: true,
        embedded: false,
        inappBrowser: true,
      },
      modularity: {
        modularity: false,
      },
    },
    browser: {
      accountType: '4337',
      chainCompatibility: {
        configurable: false,
        autoswitch: true,
        ethereum: true,
        optimism: true,
        arbitrum: true,
        base: true,
        polygon: true,
        gnosis: true,
        bnbSmartChain: true,
        avalanche: true,
      },
      ensCompatibility: {
        mainnet: true,
        subDomains: true,
        offchain: false,
        L2s: false,
        customDomains: false,
        freeUsernames: false,
      },
      backupOptions: {
        cloud: true,
        local: true,
        socialRecovery: true,
      },
      securityFeatures: {
        multisig: false,
        MPC: false,
        keyRotation: false,
        transactionScanning: false,
        limitsAndTimelocks: true,
        hardwareWalletSupport: true,
      },
      availableTestnets: {
        availableTestnets: true,
      },
      license: 'OPEN_SOURCE',
      connectionMethods: {
        walletConnect: true,
        injected: false,
        embedded: true,
        inappBrowser: true,
      },
      modularity: {
        modularity: false,
      },
    },
  },
  'Trust Wallet': {
    url: 'https://trustwallet.com/',
    submittedByName: '@ispeaknerd',
    submittedByUrl: 'https://github.com/ispeaknerd',
    updatedAt: '11/12/2023',
    updatedByName: '@ispeaknerd',
    updatedByUrl: 'https://github.com/ispeaknerd',
    mobile: {
      accountType: 'EOA',
      chainCompatibility: {
        configurable: true,
        autoswitch: false,
        ethereum: true,
        optimism: true,
        arbitrum: true,
        base: true,
        polygon: true,
        gnosis: true,
        bnbSmartChain: true,
        avalanche: true,
      },
      ensCompatibility: {
        mainnet: true,
        subDomains: true,
        offchain: false,
        L2s: false,
        customDomains: false,
        freeUsernames: false,
      },
      backupOptions: {
        cloud: true,
        local: true,
        socialRecovery: false,
      },
      securityFeatures: {
        multisig: false,
        MPC: false,
        keyRotation: false,
        transactionScanning: false,
        limitsAndTimelocks: false,
        hardwareWalletSupport: true,
      },
      availableTestnets: {
        availableTestnets: true,
      },
      license: 'OPEN_SOURCE',
      connectionMethods: {
        walletConnect: true,
        injected: false,
        embedded: true,
        inappBrowser: false,
      },
      modularity: {
        modularity: false,
      },
    },
    browser: {
      accountType: 'EOA',
      chainCompatibility: {
        configurable: true,
        autoswitch: false,
        ethereum: true,
        optimism: true,
        arbitrum: true,
        base: true,
        polygon: true,
        gnosis: true,
        bnbSmartChain: true,
        avalanche: true,
      },
      ensCompatibility: {
        mainnet: true,
        subDomains: true,
        offchain: false,
        L2s: false,
        customDomains: false,
        freeUsernames: false,
      },
      backupOptions: {
        cloud: false,
        local: true,
        socialRecovery: false,
      },
      securityFeatures: {
        multisig: false,
        MPC: false,
        keyRotation: false,
        transactionScanning: false,
        limitsAndTimelocks: false,
        hardwareWalletSupport: true,
      },
      availableTestnets: {
        availableTestnets: true,
      },
      license: 'OPEN_SOURCE',
      connectionMethods: {
        walletConnect: true,
        injected: true,
        embedded: false,
        inappBrowser: false,
      },
      modularity: {
        modularity: false,
      },
    },
  },
  'Math Wallet': {
    url: 'https://mathwallet.org/',
    submittedByName: '@ispeaknerd',
    submittedByUrl: 'https://github.com/ispeaknerd',
    updatedAt: '11/12/2023',
    updatedByName: '@ispeaknerd',
    updatedByUrl: 'https://github.com/ispeaknerd',
    mobile: {
      accountType: 'EOA',
      chainCompatibility: {
        configurable: true,
        autoswitch: false,
        ethereum: true,
        optimism: true,
        arbitrum: true,
        base: true,
        polygon: true,
        gnosis: true,
        bnbSmartChain: true,
        avalanche: false,
      },
      ensCompatibility: {
        mainnet: true,
        subDomains: true,
        offchain: false,
        L2s: false,
        customDomains: false,
        freeUsernames: false,
      },
      backupOptions: {
        cloud: false,
        local: true,
        socialRecovery: false,
      },
      securityFeatures: {
        multisig: false,
        MPC: false,
        keyRotation: false,
        transactionScanning: false,
        limitsAndTimelocks: false,
        hardwareWalletSupport: true,
      },
      availableTestnets: {
        availableTestnets: true,
      },
      license: 'OPEN_SOURCE',
      connectionMethods: {
        walletConnect: true,
        injected: false,
        embedded: true,
        inappBrowser: false,
      },
      modularity: {
        modularity: false,
      },
    },
    browser: {
      accountType: 'EOA',
      chainCompatibility: {
        configurable: true,
        autoswitch: false,
        ethereum: true,
        optimism: true,
        arbitrum: true,
        base: true,
        polygon: true,
        gnosis: true,
        bnbSmartChain: true,
        avalanche: false,
      },
      ensCompatibility: {
        mainnet: true,
        subDomains: true,
        offchain: false,
        L2s: false,
        customDomains: false,
        freeUsernames: false,
      },
      backupOptions: {
        cloud: false,
        local: true,
        socialRecovery: false,
      },
      securityFeatures: {
        multisig: false,
        MPC: false,
        keyRotation: false,
        transactionScanning: false,
        limitsAndTimelocks: false,
        hardwareWalletSupport: true,
      },
      availableTestnets: {
        availableTestnets: true,
      },
      license: 'OPEN_SOURCE',
      connectionMethods: {
        walletConnect: true,
        injected: true,
        embedded: false,
        inappBrowser: false,
      },
      modularity: {
        modularity: false,
      },
    },
  },
  Exodus: {
    url: 'https://www.exodus.com/',
    submittedByName: '@ispeaknerd',
    submittedByUrl: 'https://warpcast.com/ispeaknerd/',
    updatedAt: '10/12/2023',
    updatedByName: '@ispeaknerd',
    updatedByUrl: 'https://warpcast.com/ispeaknerd/',
    mobile: {
      accountType: 'EOA',
      chainCompatibility: {
        configurable: false,
        autoswitch: true,
        ethereum: true,
        optimism: true,
        arbitrum: true,
        base: true,
        polygon: true,
        gnosis: false,
        bnbSmartChain: true,
        avalanche: true,
      },
      ensCompatibility: {
        mainnet: false,
        subDomains: false,
        offchain: false,
        L2s: false,
        customDomains: false,
        freeUsernames: false,
      },
      backupOptions: {
        cloud: false,
        local: true,
        socialRecovery: false,
      },
      securityFeatures: {
        multisig: false,
        MPC: false,
        keyRotation: false,
        transactionScanning: false,
        limitsAndTimelocks: false,
        hardwareWalletSupport: false,
      },
      availableTestnets: {
        availableTestnets: false,
      },
      license: 'PROPRIETARY',
      connectionMethods: {
        walletConnect: true,
        injected: false,
        embedded: false,
        inappBrowser: false,
      },
      modularity: {
        modularity: false,
      },
    },
    browser: {
      accountType: 'EOA',
      chainCompatibility: {
        configurable: false,
        autoswitch: true,
        ethereum: true,
        optimism: true,
        arbitrum: true,
        base: true,
        polygon: true,
        gnosis: false,
        bnbSmartChain: true,
        avalanche: true,
      },
      ensCompatibility: {
        mainnet: false,
        subDomains: false,
        offchain: false,
        L2s: false,
        customDomains: false,
        freeUsernames: false,
      },
      backupOptions: {
        cloud: false,
        local: true,
        socialRecovery: false,
      },
      securityFeatures: {
        multisig: false,
        MPC: false,
        keyRotation: false,
        transactionScanning: false,
        limitsAndTimelocks: false,
        hardwareWalletSupport: true,
      },
      availableTestnets: {
        availableTestnets: false,
      },
      license: 'PROPRIETARY',
      connectionMethods: {
        walletConnect: true,
        injected: true,
        embedded: false,
        inappBrowser: false,
      },
      modularity: {
        modularity: false,
      },
    },
    desktop: {
      accountType: 'EOA',
      chainCompatibility: {
        configurable: false,
        autoswitch: true,
        ethereum: true,
        optimism: true,
        arbitrum: true,
        base: true,
        polygon: true,
        gnosis: false,
        bnbSmartChain: true,
        avalanche: true,
      },
      ensCompatibility: {
        mainnet: false,
        subDomains: false,
        offchain: false,
        L2s: false,
        customDomains: false,
        freeUsernames: false,
      },
      backupOptions: {
        cloud: false,
        local: true,
        socialRecovery: false,
      },
      securityFeatures: {
        multisig: false,
        MPC: false,
        keyRotation: false,
        transactionScanning: false,
        limitsAndTimelocks: false,
        hardwareWalletSupport: true,
      },
      availableTestnets: {
        availableTestnets: false,
      },
      license: 'PROPRIETARY',
      connectionMethods: {
        walletConnect: false,
        injected: false,
        embedded: true,
        inappBrowser: false,
      },
      modularity: {
        modularity: false,
      },
    },
  },
};
