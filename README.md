# Firebase Studio

This is a NextJS starter in Firebase Studio.

To get started, take a look at src/app/page.tsx.

## Smart Contract Deployment

This project contains a `ProjectRegistry.sol` smart contract to store your project data on the blockchain. To deploy it, follow these steps:

### 1. Set Up Your Environment Variables

You need to create a `.env` file in the root of your project with the following variables. You can get a free RPC URL from a service like [Alchemy](https://www.alchemy.com/) or [Infura](https://www.infura.io/).

```
SEPOLIA_RPC_URL="YOUR_ALCHEMY_OR_INFURA_SEPOLIA_RPC_URL"
PRIVATE_KEY="YOUR_WALLET_PRIVATE_KEY"
```

**IMPORTANT:** Your `PRIVATE_KEY` is a secret. Never commit it to a public repository. The `.env` file is already listed in `.gitignore` to prevent this.

To get your private key from MetaMask:
1. Open MetaMask and select the account you want to use.
2. Click the three dots and select "Account Details".
3. Click "Show Private Key" and enter your password.
4. Copy the key and paste it into your `.env` file.

### 2. Fund Your Wallet

Make sure your wallet has some Sepolia test ETH to pay for the deployment gas fees. You can get some from a public faucet like:
- [https://sepoliafaucet.com/](https://sepoliafaucet.com/)
- [https://www.infura.io/faucet/sepolia](https://www.infura.io/faucet/sepolia)

### 3. Compile Contracts & Generate Types

Before deploying, compile your contracts and generate the necessary TypeScript types for your frontend.

```bash
npm run compile-contracts
npm run generate-types
```

### 4. Deploy to Sepolia Testnet

Run the deployment script. This will send your contract to the Sepolia network.

```bash
npm run deploy
```

After the script finishes, it will print the deployed contract's address to the console.

### 5. Update Frontend with Contract Address

Copy the deployed contract address from the console and paste it into `src/app/page.tsx`:

```typescript
// src/app/page.tsx
const PROJECT_REGISTRY_ADDRESS = 'YOUR_CONTRACT_ADDRESS_HERE'; // Replace with your new address
```

That's it! Your portfolio will now be fetching your projects from the blockchain.
