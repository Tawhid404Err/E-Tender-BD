"use client"

import ServicesCatalog from "@/components/services-components/ServicesCatalog"
import ServicesCTA from "@/components/services-components/ServicesCTA"
import ServicesExtra from "@/components/services-components/ServicesExtra"
import ServicesHero from "@/components/services-components/ServicesHero"
import ServicesMainList from "@/components/services-components/ServicesMainList"
import ServicesUnique from "@/components/services-components/ServicesUnique"

export default function Services() {
  return (
    <div className="container h-full mx-auto lg:px-10 px-4">
      <ServicesHero />
      <ServicesMainList />
      <ServicesExtra />
      <ServicesUnique />
      <ServicesCatalog />
      <ServicesCTA />
    </div>
  )
}
