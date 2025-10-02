import Pricing from "@/components/pricing";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { creditBenefits, features, testimonials } from "@/lib/data";
import { PricingTable } from "@clerk/nextjs";
import { ArrowRight, Check, Stethoscope } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="bg-muted/60">
      <section className="relative overflow-hidden py-20 container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* Left: Text Content */}
          <div className="space-y-1 text-center lg:text-left">
            <Badge
              variant="outline"
              className="rounded-none bg-emerald-900/30 border-emerald-700/30 px-4 py-2 text-emerald-400 text-sm font-medium"
            >
              HealthCare Made Simple
            </Badge>

            <h1
              className="font-bold text-white gradient-title leading-tight"
              style={{ fontSize: "clamp(3rem, 6.3vw, 8.3rem)" }}
            >
              ZenthCare
            </h1>




            <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold text-white leading-snug gradient-context">
              Connects with Doctors <br />
              <span className="text-emerald-400">Anytime, Anywhere</span>
            </h2>

            <p className="text-muted-foreground text-base md:text-lg max-w-lg mx-auto lg:mx-0">
              Book appointments, consult with specialists, and manage your health all in one place.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="rounded-none bg-emerald-500 text-black px-8 py-4 text-md hover:bg-emerald-600 transition-all"
              >
                <Link href={"/onboarding"}>
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-none border-emerald-500 text-emerald-400 px-8 py-4 text-md hover:bg-emerald-500/20 transition-all"
              >
                <Link href={"/doctors"}>
                  Find Doctors <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right: Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
              <Image
                src="/Doctors-bro.png"
                alt="Healthcare illustration"
                width={800}
                height={600}
                className="w-full h-auto object-contain rounded-xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/55">
        <div className="container mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How it works</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Our platform connects you with healthcare professionals through a seamless process.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card key={index} className="rounded-none border-emerald-900/70 hover:border-emerald-800/40 transition-all duration-300">
                <CardHeader>
                  <div className="text-muted-foreground">
                    {feature.icon}
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge
              variant="outline"
              className="rounded-none bg-emerald-900/30 border-emerald-700/30 px-4 py-2 text-emerald-400 text-sm font-medium mb-4">
              Affordable HealthCare
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Consultation Packages</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Choose a package that suits your needs and get started with your consultation.</p>
          </div>
          <div>
            {/* Consultation Packages */}

            <Pricing />

            <Card className="rounded-none mt-12 bg-muted/20 border-emerald-900/70">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-white flex items-center">
                  <Stethoscope className="h-5 w-5 mr-2 text-emerald-400" />
                  How our credit system works
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {creditBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mr-3 mt-1 bg-emerald-900/20 p-1 rounded-full">
                        <Check className="h-4 w-4 text-emerald-400" />
                      </div>
                      <p
                        className="text-muted-foreground"
                        dangerouslySetInnerHTML={{ __html: benefit }}
                      />
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge
              variant="outline"
              className="rounded-none bg-emerald-900/30 border-emerald-700/30 px-4 py-2 text-emerald-400 text-sm font-medium mb-4">
              Success Stories
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What our users say.</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Hear from our satisfied users about their experiences.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonials, index) => (
              <Card key={index} className="rounded-none border-emerald-900/70 hover:border-emerald-800/40 transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex item-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-900/20 text-emerald-400 flex items-center justify-center mr-4">
                      <span className="text-emerald-400 font-bold">{testimonials.initials}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-while">{testimonials.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonials.role}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    &quot;{testimonials.quote}&quot;
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="rounded-none bg-gradient-to-r from-emerald-900/30 to-emerald-950/70 border-emerald-800/20 transition-all duration-300">
            <div className="flex flex-col md:flex-row items-center">

              {/* Left Image */}
              <div className="md:w-1/2 flex justify-center p-4">
                <Image
                  src="/Medical prescription-bro.png"
                  alt=""
                  width={400}   // desired width
                  height={300}  // desired height
                  className="object-contain rounded-xl"
                  priority
                />
              </div>

              {/* Right Card Content */}
              <CardContent className="md:w-1/2 p-8 md:p-12 lg:p-16 relative overflow-hidden">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Ready to take control over your health?
                  </h2>
                  <p className="text-muted-foreground text-lg mb-6">
                    Join ZenthCare today and experience the future of healthcare. Thousands of users are already benefiting from our innovative platform. Get started today and experience healthcare like never before.
                  </p>
                </div>
                <div className="flex flex-col md:flex-row gap-2">
                  <Button asChild size="lg" className="rounded-none bg-emerald-600 text-white hover:bg-emerald-700">
                    <Link href="/sign-up">Sign Up Now</Link>
                  </Button>
                  <Button asChild size="lg" className="rounded-none border-emerald-700/30 hover:bg-emerald-700">
                    <Link href="/pricing">View Pricing</Link>
                  </Button>
                </div>
              </CardContent>

            </div>
          </Card>
        </div>
      </section>

      {/* footer */}
      <footer className="bg-emerald-500 text-black py-10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

            {/* Brand Section */}
            <div className="">
              <h2 className="text-3xl font-bold text-white">ZenthCare</h2>
              <p className="mt-3 text-sm text-black">
                Empowering healthcare through technology.
                Simplifying patient–doctor interaction.
              </p>
            </div>

            {/* Quick Links */}
            <div className="">
              <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/homei" className="hover:text-emerald-400 transition">Home</a></li>
                <li><a href="/about" className="hover:text-emerald-400 transition">About</a></li>
                <li><a href="/services" className="hover:text-emerald-400 transition">Services</a></li>
                <li><a href="/pricing" className="hover:text-emerald-400 transition">Pricing</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/faq" className="hover:text-emerald-400 transition">FAQ</a></li>
                <li><a href="/support" className="hover:text-emerald-400 transition">Support</a></li>
                <li><a href="/blog" className="hover:text-emerald-400 transition">Blog</a></li>
              </ul>
            </div>

            {/* Social Links */}
<div>
  <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
  <div className="flex space-x-4">
    <a href="#" className="hover:text-emerald-400 transition">
      <FaFacebookF className="text-2xl" />
    </a>
    <a href="#" className="hover:text-emerald-400 transition">
      <FaTwitter className="text-2xl" />
    </a>
    <a href="#" className="hover:text-emerald-400 transition">
      <FaLinkedinIn className="text-2xl" />
    </a>
    <a href="#" className="hover:text-emerald-400 transition">
      <FaInstagram className="text-2xl" />
    </a>
  </div>
</div>

          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-white">
            <p>© {new Date().getFullYear()} ZenthCare. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Made by <span className="text-black">MasterJudah</span></p>
          </div>
        </div>
      </footer>
    </div>

  );
}


