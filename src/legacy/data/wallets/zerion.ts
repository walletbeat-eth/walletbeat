import type { Info } from '@/legacy/types/Info'

export const zerion: Info = {
	url: 'https://zerion.io/',
	submittedByName: '@ispeaknerd',
	submittedByUrl: 'https://github.com/ispeaknerd',
	updatedAt: '18/12/2023',
	updatedByName: '@abishekdharshan',
	updatedByUrl: 'https://warpcast.com/abishekinguout/',
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
			subDomains: false,
			offchain: false,
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
			availableTestnets: true,
		},
		license: 'OPEN_SOURCE',
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
			offchain: false,
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
}
