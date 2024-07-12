'use client';

import Link from "next/link";
import Image from "next/image";

type Prop = {
  title: string,
  links?: cardLinks,
  releaseDate?: string,
  description: any,
  technologies: string,
};

type cardLinks = {
  githubURL: string,
};

export default function Card({ title, links, releaseDate, description, technologies }: Prop) {
  return (
    <div className="grid grid-rows-[auto,1fr,auto] gap-4 card-border border-2 border-gray-300 rounded-lg p-3 w-full h-full">
      <header className="card-header">
        <div className="flex justify-between">
          <h2 className="card-title text-xl font-semibold">{title}</h2>
          <div className="card-links flex space-x-3">
            {
              links?.githubURL &&
              <Link href={links.githubURL}>
                <Image src="assets/github/github-mark-light.svg" alt="GitHub Logo" width={15} height={15} />
              </Link>
            }
          </div>
        </div>
        {
          releaseDate && <p className="card-release-date text-sm">{releaseDate}</p>
        }
      </header>
      <p className="card-description pb-4">{description}</p>
      <p className="card-technologies self-end text-xs">{technologies}</p>
    </div>
  );
}
