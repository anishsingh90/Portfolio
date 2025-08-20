
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { navLinks } from '@/lib/data';
import { useWallet } from '@/context/wallet-context';

export function Header() {
  const { account, connectWallet, disconnectWallet } = useWallet();
  const [activeSection, setActiveSection] = useState('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      const sections = navLinks.map(link => document.getElementById(link.href.substring(1)));
      let currentSection = 'about';
      for (const section of sections) {
        if (section) {
          const sectionTop = section.offsetTop - 100;
          if (window.scrollY >= sectionTop) {
            currentSection = section.id;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    if(isMenuOpen) {
      setIsMenuOpen(false);
    }
  }

  const isLinkVisible = (href: string) => {
    if (account) {
      return true; // Show all links if wallet is connected
    }
    // Show only #about if wallet is not connected
    return href === '#about';
  };


  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled ? "bg-card/80 backdrop-blur-sm shadow-md border-b border-border/20" : "bg-transparent"
    )}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors">
          AK
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(link => (
             isLinkVisible(link.href) && (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  activeSection === link.href.substring(1) ? 'text-primary' : 'text-muted-foreground'
                )}
              >
                {link.label}
              </Link>
            )
          ))}
        </nav>
        <div className="flex items-center gap-2">
            {account ? (
              <Button onClick={disconnectWallet} variant="outline">
                {`${account.substring(0, 6)}...${account.substring(account.length - 4)}`}
              </Button>
            ) : (
              <Button onClick={connectWallet}>Connect Wallet</Button>
            )}
            <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
            </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-sm pb-4">
          <nav className="flex flex-col items-center gap-4">
            {navLinks.map(link => (
              isLinkVisible(link.href) && (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className={cn(
                    "text-lg font-medium transition-colors hover:text-primary",
                    activeSection === link.href.substring(1) ? 'text-primary' : 'text-foreground'
                  )}
                >
                  {link.label}
                </Link>
              )
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
