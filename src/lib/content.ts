import "server-only";

import content from "@/data/space-tourism.json";

export type Destination = (typeof content.destinations)[number];
export type CrewMember = (typeof content.crew)[number];
export type Technology = (typeof content.technology)[number];

export async function getDestinationSlugs(): Promise<string[]> {
  return content.destinations.map(({ slug }) => slug);
}

export async function getDestinationBySlug(
  slug: string,
): Promise<Destination | undefined> {
  return content.destinations.find((destination) => destination.slug === slug);
}

export async function getCrewSlugs(): Promise<string[]> {
  return content.crew.map(({ slug }) => slug);
}

export async function getCrewBySlug(
  slug: string,
): Promise<CrewMember | undefined> {
  return content.crew.find((member) => member.slug === slug);
}

export async function getTechnologySlugs(): Promise<string[]> {
  return content.technology.map(({ slug }) => slug);
}

export async function getTechnologyBySlug(
  slug: string,
): Promise<Technology | undefined> {
  return content.technology.find((item) => item.slug === slug);
}