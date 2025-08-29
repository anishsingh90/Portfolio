'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { personalData, skills, achievements, timeline, passions, socialLinks, localProjects } from '@/lib/data';
import Link from 'next/link';
import { ExternalLink, Github, Send, Wallet } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useWallet } from '@/context/wallet-context';
import { ethers } from 'ethers';
import { useToast } from '@/hooks/use-toast';


// NOTE: The project registry address is no longer used for fetching projects, but is kept for other potential blockchain interactions.
const PROJECT_REGISTRY_ADDRESS = 'YOUR_CONTRACT_ADDRESS_HERE';
const MY_WALLET_ADDRESS = '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266';


export default function Home() {
  const { account, provider } = useWallet();
  const { toast } = useToast();
  const [greeting, setGreeting] = useState("Hello, Recruiter!");
  const [summary, setSummary] = useState("I am a skilled blockchain developer with experience in creating decentralized applications. I am passionate about leveraging blockchain technology to build innovative solutions.");
  const [ethAmount, setEthAmount] = useState('');
  const [isSending, setIsSending] = useState(false);

  const handleSendEth = async () => {
    if (!provider || !account) {
      toast({ title: "Error", description: "Please connect your wallet first.", variant: "destructive" });
      return;
    }
    if (!ethAmount || isNaN(parseFloat(ethAmount)) || parseFloat(ethAmount) <= 0) {
      toast({ title: "Error", description: "Please enter a valid amount of ETH.", variant: "destructive" });
      return;
    }

    setIsSending(true);
    try {
      const signer = await provider.getSigner();
      const tx = {
        to: MY_WALLET_ADDRESS,
        value: ethers.parseEther(ethAmount)
      };
      
      const transactionResponse = await signer.sendTransaction(tx);
      toast({ title: "Transaction Sent!", description: "Waiting for confirmation..." });
      
      await transactionResponse.wait();
      
      toast({ title: "Success!", description: `${ethAmount} ETH has been sent. Thank you!`, variant: 'default' });
      setEthAmount('');

    } catch (error: any) {
      console.error("Failed to send ETH:", error);
      toast({ title: "Transaction Failed", description: error.message || "An unknown error occurred.", variant: "destructive" });
    } finally {
      setIsSending(false);
    }
  };


  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 md:px-6">

          {/* About Section */}
          <section id="about" className="py-20 md:py-32 grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-3 space-y-4">
              <Badge variant="secondary" className="text-base">{greeting}</Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-primary font-headline">
                Hi, I&apos;m {personalData.name}
              </h1>
              <h2 className="text-2xl md:text-3xl font-medium text-foreground/80 font-headline">
                {personalData.title}
              </h2>
              <p className="text-muted-foreground text-lg">
                {summary}
              </p>
              <div className="flex gap-4 pt-4">
                <Button asChild size="lg">
                  <Link href="#projects">View My Work</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                   <Link href={socialLinks.linkedin.href} target="_blank">
                    Connect on LinkedIn
                  </Link>
                </Button>
              </div>
            </div>
            <div className="md:col-span-2 flex justify-center">
              <Image
                src={"/profilepicture.jpg"}
                alt={personalData.name}
                width={300}
                height={300}
                className="rounded-full shadow-lg border-4 border-primary/20 object-cover"
                data-ai-hint="man portrait"
              />
            </div>
          </section>

          
          {account ? (
            <>
              <Separator className="my-12 bg-border/20" />

              {/* Skills Section */}
              <section id="skills" className="py-16">
                <Card className="bg-card/50 shadow-lg hover:shadow-primary/10 transition-shadow duration-300 border-border/20">
                  <CardHeader>
                    <CardTitle className="text-3xl font-bold text-center mb-6 font-headline">My Skills</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {Object.entries(skills).map(([category, skillList]) => (
                        <Card key={category} className="hover:shadow-lg transition-shadow duration-300 bg-card/60 border-border/30">
                          <CardHeader>
                            <CardTitle className="text-primary">{category}</CardTitle>
                          </CardHeader>
                          <CardContent className="flex flex-wrap gap-2">
                            {skillList.map(skill => (
                              <Badge key={skill} variant="secondary" className="hover:bg-primary/80 hover:text-primary-foreground transition-colors">{skill}</Badge>
                            ))}
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </section>

              <Separator className="my-12 bg-border/20" />

              {/* Achievements Section */}
              <section id="achievements" className="py-16">
                <Card className="bg-card/50 shadow-lg hover:shadow-primary/10 transition-shadow duration-300 border-border/20">
                  <CardHeader>
                    <CardTitle className="text-3xl font-bold text-center mb-6 font-headline">Key Achievements</CardTitle>
                  </CardHeader>
                  <CardContent>
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {achievements.map((achievement) => (
                            <Card key={achievement.title} className="text-center p-6 hover:shadow-primary/20 hover:shadow-lg transition-all duration-300 bg-card/60 hover:-translate-y-2 border-border/30">
                                <div className="flex justify-center mb-4">
                                    <achievement.icon className="h-12 w-12 text-primary" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                                <p className="text-sm text-muted-foreground mb-2">{achievement.date}</p>
                                <p className="text-muted-foreground">{achievement.description}</p>
                            </Card>
                        ))}
                     </div>
                  </CardContent>
                </Card>
              </section>

              <Separator className="my-12 bg-border/20" />
              
              {/* Projects Section */}
              <section id="projects" className="py-16">
                <Card className="bg-card/50 shadow-lg hover:shadow-primary/10 transition-shadow duration-300 border-border/20">
                  <CardHeader>
                    <CardTitle className="text-3xl font-bold text-center mb-6 font-headline">Projects</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {localProjects.map((project, index) => (
                        <Card key={index} className="flex flex-col overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30 bg-card/60 hover:-translate-y-2 border-border/30">
                          <Image src={project.image} alt={project.title} width={600} height={400} className="w-full h-48 object-cover" data-ai-hint={project.dataAiHint}/>
                          <CardHeader>
                            <CardTitle>{project.title}</CardTitle>
                          </CardHeader>
                          <CardContent className="flex-grow flex flex-col">
                            <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {project.technologies.map(tag => (
                                <Badge key={tag} variant="outline">{tag}</Badge>
                              ))}
                            </div>
                            <div className="flex gap-4 mt-auto pt-4">
                              <Button asChild variant="ghost" size="sm">
                                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                                  <Github className="mr-2 h-4 w-4" /> GitHub
                                </Link>
                              </Button>
                              <Button asChild variant="ghost" size="sm">
                                <Link href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                                </Link>
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </section>
              
              <Separator className="my-12 bg-border/20" />

              {/* Timeline Section */}
              <section id="timeline" className="py-16">
                <Card className="bg-card/50 shadow-lg hover:shadow-primary/10 transition-shadow duration-300 border-border/20">
                  <CardHeader>
                    <CardTitle className="text-3xl font-bold text-center mb-10 font-headline">My Journey</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="relative max-w-2xl mx-auto">
                      <div className="absolute left-1/2 h-full w-0.5 bg-border -translate-x-1/2"></div>
                      {timeline.map((item, index) => (
                        <div key={item.title} className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                          <div className="order-1 w-5/12"></div>
                          <div className="z-10 flex items-center order-1 bg-primary shadow-xl w-12 h-12 rounded-full">
                            <item.icon className="mx-auto text-primary-foreground h-6 w-6"/>
                          </div>
                          <div className="order-1 bg-card/80 rounded-lg shadow-xl w-5/12 px-6 py-4 border border-border/30">
                            <p className="text-sm text-muted-foreground mb-1">{item.date}</p>
                            <h3 className="font-bold text-lg">{item.title}</h3>
                            <h4 className="font-medium text-primary">{item.company}</h4>
                            <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </section>

              <Separator className="my-12 bg-border/20" />
              
              {/* Experience Section */}
              <section id="experience" className="py-16">
                <Card className="bg-card/50 shadow-lg hover:shadow-primary/10 transition-shadow duration-300 border-border/20">
                  <CardHeader>
                    <CardTitle className="text-3xl font-bold text-center mb-10 font-headline">Experience</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="relative max-w-2xl mx-auto">
                      <div className="absolute left-1/2 h-full w-0.5 bg-border -translate-x-1/2"></div>
                      {timeline.map((item, index) => (
                        <div key={item.title} className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                          <div className="order-1 w-5/12"></div>
                          <div className="z-10 flex items-center order-1 bg-primary shadow-xl w-12 h-12 rounded-full">
                            <item.icon className="mx-auto text-primary-foreground h-6 w-6"/>
                          </div>
                          <div className="order-1 bg-card/80 rounded-lg shadow-xl w-5/12 px-6 py-4 border border-border/30">
                            <p className="text-sm text-muted-foreground mb-1">{item.date}</p>
                            <h3 className="font-bold text-lg">{item.title}</h3>
                            <h4 className="font-medium text-primary">{item.company}</h4>
                            <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </section>
              
              <Separator className="my-12 bg-border/20" />
              
              {/* Passions Section */}
              <section id="passions" className="py-16">
                <Card className="bg-card/50 shadow-lg hover:shadow-primary/10 transition-shadow duration-300 border-border/20">
                  <CardHeader>
                    <CardTitle className="text-3xl font-bold text-center mb-6 font-headline">Passions & Interests</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {passions.map((passion) => (
                        <div key={passion.title} className="flex items-start gap-4 p-4 rounded-lg hover:bg-card/70 transition-colors">
                          <div className="bg-primary/10 p-3 rounded-full">
                            <passion.icon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold">{passion.title}</h3>
                            <p className="text-muted-foreground mt-1">{passion.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </section>

              <Separator className="my-12 bg-border/20" />

              {/* Connect Section */}
              <section id="connect" className="py-16">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                   <Card className="bg-card/50 shadow-lg hover:shadow-primary/10 transition-shadow duration-300 border-border/20">
                     <CardHeader>
                       <CardTitle className="text-3xl font-bold text-center mb-6 font-headline">Connect With Me</CardTitle>
                     </CardHeader>
                     <CardContent>
                       <form className="space-y-4">
                         <div className="grid md:grid-cols-2 gap-4">
                           <div className="space-y-2">
                             <Label htmlFor="name">Name</Label>
                             <Input id="name" placeholder="Enter your name" />
                           </div>
                           <div className="space-y-2">
                             <Label htmlFor="email">Email</Label>
                             <Input id="email" type="email" placeholder="Enter your email" />
                           </div>
                         </div>
                         <div className="space-y-2">
                           <Label htmlFor="message">Message</Label>
                           <Textarea id="message" placeholder="Your message" className="min-h-[150px]" />
                         </div>
                         <div className="flex justify-end">
                           <Button type="submit">
                             <Send className="mr-2 h-4 w-4" />
                             Send Message
                           </Button>
                         </div>
                       </form>
                     </CardContent>
                   </Card>
                   
                   <Card className="bg-card/50 shadow-lg hover:shadow-primary/10 transition-shadow duration-300 border-border/20">
                     <CardHeader>
                       <CardTitle className="text-3xl font-bold text-center mb-2 font-headline">Support My Work</CardTitle>
                       <CardDescription className="text-center text-muted-foreground">
                         If you like my work, consider sending some ETH.
                       </CardDescription>
                     </CardHeader>
                     <CardContent>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="eth-amount">Amount (ETH)</Label>
                            <Input 
                              id="eth-amount" 
                              type="text" 
                              placeholder="0.05"
                              value={ethAmount}
                              onChange={(e) => setEthAmount(e.target.value)}
                              disabled={isSending}
                            />
                          </div>
                          <Button onClick={handleSendEth} disabled={isSending || !ethAmount} className="w-full">
                            <Wallet className="mr-2 h-4 w-4" />
                            {isSending ? 'Sending...' : 'Send ETH'}
                          </Button>
                        </div>
                     </CardContent>
                   </Card>
                 </div>
              </section>
            </>
          ) : (
             <>
                <Separator className="my-12 bg-border/20" />
                <div className="text-center py-40">
                    <Card className="max-w-md mx-auto bg-card/50 shadow-lg border-border/20 p-8">
                        <CardTitle className="text-2xl font-bold mb-4 font-headline">Welcome to My Portfolio</CardTitle>
                        <CardDescription className="text-muted-foreground mb-6">
                            Please connect your wallet to view my projects, skills, achievements, and other content.
                        </CardDescription>
                        {/* The connect button is in the header */}
                    </Card>
                </div>
             </>
          )}

        </div>
      </main>
      <Footer />
    </div>
  );
}
