'use client';

import "@/app/styles/links.css";
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
  githubURL?: string,
  itchURL?: string,
};

export default function Card({ title, links, releaseDate, description, technologies }: Prop) {
  return (
    <div className="flex flex-col justify-between card-border border-2 border-gray-300 rounded-lg p-3">
      <header className="card-header mb-3">
        <div className="flex justify-between">
          <h2 className="card-title text-xl font-semibold">{title}</h2>
          {
            links &&
            <div className="card-links flex space-x-4 ml-5">
              {
                links?.githubURL &&
                <Link className="icon-link" href={links.githubURL}>
                  <Image
                    src="assets/github/github-mark-light.svg"
                    alt="GitHub Logo"
                    fill={true}
                  />
                </Link>
              }
              {
                links?.itchURL &&
                <Link className="icon-link" href={links.itchURL}>
                  <Image
                    src="assets/itch/itchio-textless-black.svg"
                    alt="Itch.io Logo"
                    fill={true}
                  />
                </Link>
              }
            </div>
          }
        </div>
        {
          releaseDate && <p className="card-release-date text-sm">{releaseDate}</p>
        }
      </header>
      <p className="card-description mb-2">{description}</p>
      <p className="card-technologies text-xs text-gray-700">{technologies}</p>
    </div>
  );
}
