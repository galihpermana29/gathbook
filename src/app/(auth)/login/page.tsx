import type { Metadata } from "next";

import { LoginForm } from "./_components/forms/login-form";
import { SectionTitle } from "./_components/section-title";
import { Button, Card } from "@mantine/core";
import Link from "next/link";
import { FaLock, FaBookOpen, FaWallet } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Sign In",
  description: "A sign in page before delving deep into the world of literacy.",
};

export default function LoginPage() {
  return (
    <main className="bg-background text-foreground">
      {/* Hero Section - Unchanged */}
      <section className="relative bg-gradient-to-b from-primary/10 via-background to-background">
        <div className="container px-4 py-24 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
            <div className="flex flex-col justify-center space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  G A T H B O O K
                </h1>
                <p className="max-w-[600px] text-muted-foreground sm:text-xl">
                  Discover a Web3-Powered Library Where Every Book Becomes an NFT You Truly Own. Build Your Personal Digital Library, Trade Unique Editions, and Redefine How Stories and Knowledge Live in the Blockchain Era
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg"
                  component={Link}
                  href="/register"
                  type="button"
                >
                  Get Started
                </Button>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center lg:justify-end">
              <Card className="w-full max-w-sm p-6">
                <SectionTitle />
                <LoginForm className="mt-6 flex flex-col gap-3" />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-[#E2D7A7]">
        <div className="container px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#A16B56]">Why Choose Gathbook?</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "True Ownership",
                description: "Own your digital books as NFTs on the blockchain, ensuring true ownership and transferability.",
                icon: FaLock,
              },
              {
                title: "Unique Editions",
                description: "Collect and trade limited edition books, each with its own unique properties and rarity.",
                icon: FaBookOpen, // Ganti dengan ikon buku yang cocok
              },
              {
                title: "Web3 Integration",
                description: "Seamlessly interact with your digital library using Web3 technologies and your crypto wallet.",
                icon: FaWallet,
              },
            ].map((feature, index) => (
              <Card key={index} className="p-6 text-center bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-4 flex justify-center">
                  <feature.icon className="w-12 h-12 text-[#A16B56]" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#A16B56]">{feature.title}</h3>
                <p className="text-[#567D89]">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-[#709F9D]">
        <div className="container px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">How Gathbook Works</h2>
          <div className="grid gap-8 md:grid-cols-4">
            {[
              { step: 1, title: "Sign Up", description: "Create your account and connect your crypto wallet." },
              { step: 2, title: "Browse", description: "Explore our vast collection of digital books and unique editions." },
              { step: 3, title: "Purchase", description: "Buy books as NFTs using BTTC Token" },
              { step: 4, title: "Read & Trade", description: "Enjoy your books and trade them on the open market." },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-block rounded-full bg-[#E0A370] text-white text-xl font-bold w-12 h-12 flex items-center justify-center mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#DEC584]">{item.title}</h3>
                <p className="text-white">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#A16B56] text-white">
        <div className="container px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Digital Library?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join Gathbook today and experience the future of book ownership and reading.
          </p>
          <Button 
              size="lg" 
              variant="outline" 
              className="text-white border-white hover:bg-white hover:text-[#A16B56]"                  
              component={Link}
              href="/register"
              type="button">
            Create an Account
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#567D89] text-white">
          <div className="mt-8 pt-8 border-t border-[#E2D7A7] text-center text-sm text-[#E2D7A7]">
            © {new Date().getFullYear()} Gathbook. All rights reserved.
          </div>
      </footer>
    </main>
  );
}
