"use client"

import Footer from "../footer";
import { LandingFooterInviteDiscord } from "./LandingFooterInviteDiscord";
import { LandingGridFeatures } from "./LandingGridFeatures";
import { LandingHero } from "./LandingHero";
import { LandingListAnalitycsSite } from "./LandingListAnalitycsSite";

export const ClientHome = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-black via-neutral-900 to-black">
      <LandingHero />
      <LandingListAnalitycsSite />
      <LandingGridFeatures />
      <LandingFooterInviteDiscord />
      <Footer />
    </div>
  );
};
