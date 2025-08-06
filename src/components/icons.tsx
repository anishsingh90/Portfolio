import * as React from 'react';

export const EthereumIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 2l6 7-6 7-6-7 6-7z" />
    <path d="M12 2v20" />
    <path d="M6 9l6 13 6-13" />
    <path d="M6 9l6-7 6 7" />
  </svg>
);

export const BlockchainIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="3" y="14" width="6" height="6" rx="1" />
      <rect x="3" y="4" width="6" height="6" rx="1" />
      <path d="M9 7h5" />
      <path d="M9 17h5" />
      <rect x="15" y="9" width="6" height="6" rx="1" />
      <path d="M14 12H9" />
    </svg>
);
