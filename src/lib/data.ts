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
    image: '/crowdfunding.jpg',
    github: 'https://github.com/anishsingh90/1-Decentralised-CrowdFunding-Projects-dApps-',
    liveDemo: 'https://decentraxfunding.netlify.app/',
    dataAiHint: 'blockchain network'
  },
  {
    title: 'Decentralized Personal Portfolio',
    description: 'A full-featured portfolio built on the Ethereum blockchain with low gas fees.',
    technologies: ['Next.js', 'Solidity', 'Metamask', 'Tailwind CSS'],
    image: '/porfolio.jpg',
    github: 'https://github.com/anishsingh90/Portfolio',
    liveDemo: 'https://anishsinghpatel.netlify.app/',
    dataAiHint: 'digital art'
  },
  {
    title: 'Secure and Transparent Transportation System',
    description: 'Designed a Blockchain & IoT-powered transportation system to enable real-time vehicle tracking, automated payments, and secure data storage with Ethereum smart contracts.',
    technologies: ['Blockchain', 'IoT', 'Ethereum', 'Smart Contracts', 'Solidity'],
    image: '/transportation.jpg',
    github: '#',
    liveDemo: '#',
    dataAiHint: 'transportation logistics'
  },
  {
    title: 'Ethereum-Based Employee Live Work Monitoring System',
    description: 'Created a real-time employee work-tracking dApp using React.js, Solidity, and Web3.js, featuring on-chain task logging for enhanced transparency and security.',
    technologies: ['React.js', 'Solidity', 'Web3.js', 'Ethereum', 'dApp'],
    image: 'https://placehold.co/600x400.png',
    github: '#',
    liveDemo: '#',
    dataAiHint: 'employee tracking'
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
    description: 'Achieved 40% product revenue growth in three months by planning and launching four new key features. Improved state test pass rates from 78% to 87% in two years.'
  },
  {
    icon: Briefcase,
    category: 'Experience',
    date: 'June 2024 - July 2024',
    title: 'Blockchain Developer Intern',
    company: 'BlackHole Infiverse',
    description: 'Developed and deployed Solidity-based smart contracts for a Web3 marketplace, optimizing security and efficiency. Integrated Ether.js & Web3.js for interacting with Ethereum Blockchain.'
  },
  {
    icon: Briefcase,
    category: 'Experience',
    date: 'April 2024 - October 2024',
    title: 'Web Developer Intern',
    company: 'Internship Studio',
    description: 'Gained hands-on experience in front-end web development, working with HTML, CSS, JavaScript, and React.js.'
  },
  {
    icon: GraduationCap,
    category: 'Education',
    date: '2022 - Present',
    title: 'B.Tech(Computer Science & Engineering) [7/10 CGPA]',
    company: 'Maharishi Markandeshwar (Deemed To Be University), NAAC(A++)',
    description: 'Pursuing Computer Science and Engineering'
  },
  {
    icon: GraduationCap,
    category: 'Education',
    date: '2022',
    title: '12th Grade (64.4%)',
    company: 'Bihar School Examination Board',
    description: 'Completed 12th standard education.'
  },
  {
    icon: GraduationCap,
    category: 'Education',
    date: '2020',
    title: '10th Grade (77.4%)',
    company: 'Bihar School Examination Board',
    description: 'Completed 10th standard education.'
  },
];

export const certifications = [
  {
    icon: Award,
    title: 'GenAI for Everyone',
    company: 'Coursera',
    date: '2025',
    description: 'An introductory course on Generative AI, its applications, and its potential impact on various industries.'
  },
  {
    icon: Award,
    title: 'Nestlé E-Learning | Sustainability',
    company: 'Nestlé',
    date: '2025',
    description: 'Completed specialized training focused on sustainability practices, environmental responsibility, and sustainable business approaches through Nestlé’s E-Learning platform.'
  },
  {
    icon: Award,
    title: 'SEBI Investor Awareness Test',
    company: 'National Institute of Securities Markets (NISM)',
    date: '2025',
    description: 'Successfully completed the SEBI Investor Awareness Test, gaining knowledge on securities markets, investor rights, financial literacy, and regulatory practices under the Securities and Exchange Board of India (SEBI).'
  },
  {
    icon: Award,
    title: 'Alice Blue Business Partner',
    company: 'Alice Blue Financial Services',
    date: '2024',
    description: 'Certified as an approved Alice Blue Business Partner, contributing to client acquisition, financial market awareness, and trading-related services under Alice Blue’s partnership program.'
  },
  {
    icon: Award,
    title: 'Cryptography (CRISC 2023)',
    company: 'Infosys Springboard',
    date: '2024',
    description: 'Successfully completed specialized training in cryptography, covering encryption techniques, secure communication, and data protection methods aligned with industry practices.'
  },
  {
    icon: Award,
    title: 'Blockchain & Smart Contracts',
    company: 'Infosys Springboard',
    date: '2024',
    description: 'Completed a comprehensive program on blockchain fundamentals and smart contract development.'
  },
  {
    icon: Award,
    title: 'Ethereum & Solidity Developer Program',
    company: 'Infosys Springboard',
    date: '2024',
    description: 'Specialized training in building decentralized applications on the Ethereum platform using Solidity.'
  },
  {
    icon: Award,
    title: 'Website Design & Development Internship',
    company: 'Internship Studio',
    date: '2024',
    description: 'Completed training in website design and development, gaining hands-on experience in front-end and back-end technologies, UI/UX practices, and responsive web development.'
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
