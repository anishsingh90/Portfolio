import { Github, Linkedin, Mail, Twitter, Code, Award, GraduationCap, Heart, Briefcase } from 'lucide-react';
import { EthereumIcon } from '@/components/icons';

export const personalData = {
  name: 'Anish Kumar',
  title: 'Blockchain Developer',
  email: 'anish.kumar@example.com',
  linkedin: 'https://www.linkedin.com/in/anish90',
  github: 'https://github.com/anishsingh90',
  twitter: 'https://twitter.com/AnishSingh9454',
  profileImage: '/profilepicture.jpg',
};

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#timeline', label: 'Timeline' },
  { href: '#passions', label: 'Passions' },
  { href: '#connect', label: 'Connect' },
];

export const skills = {
  'Languages': ['JavaScript', 'TypeScript', 'Solidity', 'Python', 'Go'],
  'Frameworks & Libraries': ['React', 'Next.js', 'Node.js', 'Express.js', 'Hardhat', 'Truffle', 'Ethers.js', 'Web3.js'],
  'Databases': ['PostgreSQL', 'MongoDB', 'Firebase'],
  'Tools & Platforms': ['Docker', 'Kubernetes', 'AWS', 'Google Cloud', 'Git', 'Jenkins'],
  'Blockchain': ['Ethereum', 'Hyperledger Fabric', 'Smart Contracts', 'DeFi', 'NFTs', 'Oracles'],
};

export const projects = [
  {
    title: 'Decentralized Voting System',
    description: 'A secure and transparent voting application built on the Ethereum blockchain, ensuring tamper-proof results.',
    technologies: ['Solidity', 'React', 'Ethers.js', 'Hardhat', 'IPFS'],
    image: 'https://placehold.co/600x400.png',
    github: 'https://github.com/anishsingh90/d-vote',
    liveDemo: 'https://d-vote.anishkumar.dev',
    dataAiHint: 'blockchain network'
  },
  {
    title: 'NFT Marketplace',
    description: 'A full-featured platform for minting, buying, and selling Non-Fungible Tokens (NFTs) with low gas fees.',
    technologies: ['Next.js', 'TypeScript', 'Solidity', 'Polygon', 'Tailwind CSS'],
    image: 'https://placehold.co/600x400.png',
    github: 'https://github.com/anishsingh90/nft-market',
    liveDemo: 'https://nft-market.anishkumar.dev',
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
        title: 'ETHGlobal Hackathon Winner',
        date: '2023',
        description: 'First place for developing an innovative DeFi protocol for undercollateralized loans.'
    },
    {
        icon: Github,
        title: 'Top Open Source Contributor',
        date: '2022',
        description: 'Recognized for significant contributions to the Hyperledger Fabric project.'
    },
    {
        icon: Code,
        title: 'Smart Contract Audit Challenge',
        date: '2021',
        description: 'Successfully identified and reported critical vulnerabilities in a major DeFi platform.'
    }
];

export const timeline = [
  {
    icon: Briefcase,
    category: 'Experience',
    date: '2021 - Present',
    title: 'Senior Blockchain Developer',
    company: 'InnovateChain Solutions',
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
    date: '2015 - 2019',
    title: 'Bachelor of Science in Computer Science',
    company: 'University of Technology',
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
        title: 'DeFi Innovation',
        description: 'Constantly exploring new decentralized finance protocols and looking for ways to improve financial accessibility for everyone.'
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