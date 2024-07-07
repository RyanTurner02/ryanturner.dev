'use client';

type CardInformation = {
  cardTitle: string,
  cardDescription: any,
  cardTechnologies: string,
}

export default function Card({ cardTitle, cardDescription, cardTechnologies }: CardInformation) {
  return (
    <div className="grid grid-rows-[auto,1fr,auto] gap-4 card-border border border-black rounded p-3 w-full h-full">
      <header className="card-header">
        <h2 className="card-title text-xl font-semibold border-black">{cardTitle}</h2>
        <div className="card-links">
        </div>
      </header>
      <p className="card-description border-black pb-3">{cardDescription}</p>
      <p className="card-technologies self-end text-xs">{cardTechnologies}</p>
    </div>
  );
}
