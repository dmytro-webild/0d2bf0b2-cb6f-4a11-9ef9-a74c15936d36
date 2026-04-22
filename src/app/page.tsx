"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqBase from '@/components/sections/faq/FaqBase';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroLogoBillboard from '@/components/sections/hero/HeroLogoBillboard';
import MediaAbout from '@/components/sections/about/MediaAbout';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import { Star, Users, Utensils } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-magnetic"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="mediumSmall"
        sizing="mediumLargeSizeMediumTitles"
        background="noiseDiagonalGradient"
        cardStyle="soft-shadow"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="layered"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Menu",
          id: "menu",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Reviews",
          id: "testimonials",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Maine Street"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogoBillboard
      background={{
        variant: "plain",
      }}
      logoText="Maine Street Restaurant"
      description="Greek, Italian & American staples served in a low-key space in Hamtramck."
      buttons={[
        {
          text: "View Menu",
          href: "#menu",
        },
        {
          text: "Directions",
          href: "https://maps.google.com",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/traditional-gulas-dish-composition_23-2149072547.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={false}
      title="Authentic Flavors, Local Vibe"
      description="Located in the heart of Hamtramck, we serve homemade Greek, Italian, and American classics. From our savory Chevapi to tender Chicken Parmigiana, every dish is prepared with care and quality ingredients."
      imageSrc="http://img.b2bpic.net/free-photo/surface-with-different-foodstuffs_23-2147612075.jpg"
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="split-description"
      gridVariant="one-large-left-three-stacked-right"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "Chicken Gumbo",
          price: "$12.99",
          variant: "Popular",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-delicious-thai-food_1357-231.jpg",
        },
        {
          id: "p2",
          name: "Steak & Eggs",
          price: "$18.50",
          variant: "Popular",
          imageSrc: "http://img.b2bpic.net/free-photo/sunny-up-side-eggs-breakfast-with-half-cutted-fried-sausages_140725-10656.jpg",
        },
        {
          id: "p3",
          name: "Homemade Chevapi",
          price: "$14.99",
          variant: "Traditional",
          imageSrc: "http://img.b2bpic.net/free-photo/iskender-kebab-garnished-with-tomato-parsley-served-with-yogurt_141793-1903.jpg",
        },
        {
          id: "p4",
          name: "Chicken Parmigiana",
          price: "$16.50",
          variant: "Italian",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-pasta-with-tomato-sauce-parmeson_176474-903.jpg",
        },
        {
          id: "p5",
          name: "Grilled Chicken Pita",
          price: "$13.99",
          variant: "Greek",
          imageSrc: "http://img.b2bpic.net/free-photo/tortilla-with-chicken-bell-peppers_2829-11095.jpg",
        },
        {
          id: "p6",
          name: "Baby Greek Salad",
          price: "$10.50",
          variant: "Healthy",
          imageSrc: "http://img.b2bpic.net/free-photo/greek-salad-bowl-lipstick-woman-perfume_140725-2529.jpg",
        },
      ]}
      title="Menu Highlights"
      description="Discover our most popular dishes, loved by the Hamtramck community."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          title: "Happy Customers",
          value: "1.8K+",
          icon: Users,
        },
        {
          id: "m2",
          title: "Google Rating",
          value: "4.5",
          icon: Star,
        },
        {
          id: "m3",
          title: "Daily Specials",
          value: "10+",
          icon: Utensils,
        },
      ]}
      title="Our Legacy"
      description="Serving the Hamtramck community with quality and care."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFifteen
      useInvertedBackground={false}
      testimonial="Service was great and the place has a very cool vibe. Food is delicious and reasonably priced."
      rating={5}
      author="Sarah M."
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/pleased-young-male-barber-wearing-uniform-keeping-hand-chin-looking-front-isolated-green-wall-with-copy-space_141793-110167.jpg",
          alt: "Customer",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-pretty-woman-eating-pizza-bar_1303-19907.jpg",
          alt: "Customer",
        },
        {
          src: "http://img.b2bpic.net/free-photo/side-view-friends-eating-restaurant_23-2150491790.jpg",
          alt: "Customer",
        },
        {
          src: "http://img.b2bpic.net/free-photo/senior-couple-enjoying-together-having-meal_23-2148216448.jpg",
          alt: "Customer",
        },
        {
          src: "http://img.b2bpic.net/free-photo/black-american-male-female-eating-vegan-food-restaurant_613910-7323.jpg",
          alt: "Customer",
        },
      ]}
      ratingAnimation="slide-up"
      avatarsAnimation="slide-up"
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Google Maps",
        "Yelp Local",
        "TripAdvisor",
        "Detroit Eats",
        "Hamtramck Weekly",
        "Metro Times",
        "City Guides",
      ]}
      title="As Recognized By"
      description="Proudly serving our Hamtramck community and beyond."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",
          title: "Do you offer private dining?",
          content: "Yes, we have a private dining room perfect for small gatherings.",
        },
        {
          id: "f2",
          title: "Are you open on weekends?",
          content: "Yes, we are open daily to serve you breakfast, lunch, and dinner.",
        },
        {
          id: "f3",
          title: "Can I order online?",
          content: "Absolutely! Use our online ordering portal to get your favorites to go.",
        },
      ]}
      title="Frequently Asked Questions"
      description="Have questions? We're here to help."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Visit Us"
      title="Ready for a Great Meal?"
      description="Come visit Maine Street Restaurant at 11650 Joseph Campau Ave. We're open until 10 PM daily."
      buttons={[
        {
          text: "Call Us",
          href: "tel:3133680500",
        },
        {
          text: "Get Directions",
          href: "https://maps.google.com",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/cafe-sibiu-romania_1268-20583.jpg"
      logoText="Maine Street"
      columns={[
        {
          title: "Restaurant",
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Menu",
              href: "#menu",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
        {
          title: "Information",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Careers",
              href: "#",
            },
            {
              label: "Accessibility",
              href: "#",
            },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
