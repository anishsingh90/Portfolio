import { Github, Linkedin, Mail, Twitter, Code, Award, GraduationCap, Heart, Briefcase } from 'lucide-react';
import { EthereumIcon } from '@/components/icons';

export const personalData = {
  name: 'Anish Kumar',
  title: 'Blockchain Developer',
  email: 'anishraaz90@gmail.com',
  linkedin: 'https://www.linkedin.com/in/anish90',
  github: 'https://github.com/anishsingh90',
  twitter: 'https://twitter.com/AnishSingh9454',
  profileImage: '/profilepicture.jpg',
};

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#projects', label: 'Projects' },
  { href: '#journey', label: 'Journey' },
  { href: '#certification', label: 'Certification' },
  { href: '#passions', label: 'Passions' },
  { href: '#connect', label: 'Connect' },
];

export const skills = {
  'Languages': ['Solidity', 'JavaScript', 'C', 'C++'],
  'Frameworks & Libraries': ['React', 'Next.js', 'Node.js', 'Express.js', 'Hardhat', 'Truffle', 'Ethers.js', 'Web3.js'],
  'Databases': ['GraphQL', 'MongoDB', 'MySQL'],
  'Tools & Platforms': ['RemixIDE', 'Infura','Alchemy', 'VS-Code', 'ThirdwebSDK', 'Git & GitHub', 'Oracles'],
  'Blockchain': ['Ethereum', 'Hyperledger Fabric', 'Smart Contracts', 'DeFi', 'NFTs', 'Metaverse', 'Cryptography', 'Merkle Tree'],
};

export const localProjects = [
  {
    title: 'Decentralized Crowdfunding System',
    description: 'A blockchain-based dApp for secure and transparent fundraising, empowering creators and contributors with trustless smart contracts',
    technologies: ['Solidity', 'React', 'Ethers.js', 'Hardhat', 'IPFS', 'Metamask'],
    image: 'https://placehold.co/600x400.png',
    github: 'https://github.com/anishsingh90/1-Decentralised-CrowdFunding-Projects-dApps-',
    liveDemo: 'https://decentraxfunding.netlify.app/',
    dataAiHint: 'blockchain network'
  },
  {
    title: 'Decentralized Personal Portfolio',
    description: 'A full-featured portfolio built on the Ethereum blockchain with low gas fees.',
    technologies: ['Next.js', 'Solidity', 'Metamask', 'Tailwind CSS'],
    image: 'https://placehold.co/600x400.png',
    github: 'https://github.com/anishsingh90/Portfolio',
    liveDemo: 'https://anishsinghpatel.netlify.app/',
    dataAiHint: 'digital art'
  },
  {
    title: 'DeFi Lending Protocol',
    description: 'A decentralized lending and borrowing protocol that allows users to earn interest on deposits and borrow assets.',
    technologies: ['Solidity', 'React', 'Web3.js', 'Chainlink Oracles', 'Aave'],
    image: 'https://placehold.co/600x400.png',
    github: 'https://github.com/anishsingh90/defi-lending',
    liveDemo: 'https://defi-lending.anishkumar.dev',
    dataAiHint: 'finance crypto'
  },
];

export const achievements = [
    {
        icon: Award,
        title: 'YourStory Digital Innovation Hackathon Winner',
        date: '2024',
        description: 'First place for developing an innovative decentralized application(dApps) which is "Decentralized Crowdfunding Application(dApps).'
    },
    {
        icon: Github,
        title: 'Ongoing - Smart India Hackathon (SIH)',
        date: '2024',
        description: 'Developing a Secure Smart Contract and dApps to improve efficiency, transprancy, and automation in targeted industris.'
    }
];

export const timeline = [
  {
    icon: Briefcase,
    category: 'Experience',
    date: 'July 2025 - Present',
    title: 'Blockchain Community Intern',
    company: 'Trikon',
    description: 'Lead developer for enterprise-grade blockchain applications. Designed and implemented scalable smart contracts and backend systems.'
  },
  {
    icon: Briefcase,
    category: 'Experience',
    date: '2019 - 2021',
    title: 'Blockchain Developer',
    company: 'CryptoBuilders Inc.',
    description: 'Developed and maintained smart contracts for various DeFi and NFT projects. Contributed to frontend development using React.'
  },
  {
    icon: GraduationCap,
    category: 'Education',
    date: '2022 - Present',
    title: 'Bachelor of Technology in Computer Science & Engineering [7/10 CGPA]',
    company: 'Maharishi Markandeshwar(Deemed To Be University), Accredited by NAAC(A++)',
    description: 'Specialized in distributed systems and cryptography. Graduated with honors.'
  },
  {
    icon: Award,
    category: 'Certification',
    date: '2020',
    title: 'Certified Blockchain Expert',
    company: 'Blockchain Council',
    description: 'Completed an in-depth certification covering various blockchain platforms and concepts.'
  }
];

export const passions = [
    {
        icon: Heart,
        title: 'Forex and Crypto Trader',
        description: 'Deeply passionate about financial markets-actively involved in trading crypto, forex and option selling in indian stock market.'
    },
    {
        icon: Code,
        title: 'Open Source',
        description: 'A firm believer in the power of community-driven development. I actively contribute to several open-source blockchain projects.'
    },
    {
        icon: EthereumIcon,
        title: 'Web3 Gaming',
        description: 'Fascinated by the intersection of gaming and blockchain, and the potential for true ownership of in-game assets.'
    }
]

export const socialLinks = {
  email: {
    href: `mailto:${personalData.email}`,
    icon: Mail
  },
  linkedin: {
    href: personalData.linkedin,
    icon: Linkedin
  },
  github: {
    href: personalData.github,
    icon: Github
  },
  twitter: {
    href: personalData.twitter,
    icon: Twitter
  }
};
