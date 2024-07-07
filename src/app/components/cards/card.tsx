'use client';

type CardInformation = {
  title: string,
  releaseDate?: string,
  description: any,
  technologies: string,
}

export default function Card({ title, releaseDate, description, technologies }: CardInformation) {
  return (
    <div className="grid grid-rows-[auto,1fr,auto] gap-4 card-border border-2 border-gray-300 rounded-lg p-3 w-full h-full">
      <header className="card-header">
        <h2 className="card-title text-xl font-semibold">{title}</h2>
        <div className="card-links">
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
