import {
  ClockIcon,
  RocketLaunchIcon,
  CurrencyEuroIcon,
} from "@heroicons/react/20/solid";

export function ContentTestimonial() {
  return (
    <div className="relative isolate overflow-hidden bg-white py-8 sm:pt-20" id="vorteile">
      <div
        className="absolute -top-80 left-[max(6rem,33%)] -z-10 transform-gpu blur-3xl sm:left-1/2 md:top-20 lg:ml-20 xl:top-3 xl:ml-56"
        aria-hidden="true"
      >
        <div
          className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              "polygon(63.1% 29.6%, 100% 17.2%, 76.7% 3.1%, 48.4% 0.1%, 44.6% 4.8%, 54.5% 25.4%, 59.8% 49.1%, 55.3% 57.9%, 44.5% 57.3%, 27.8% 48%, 35.1% 81.6%, 0% 97.8%, 39.3% 100%, 35.3% 81.5%, 97.2% 52.8%, 63.1% 29.6%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <p className="text-lg font-semibold leading-8 tracking-tight text-blue-500">
            Dein Schritt in die Selbstständigkeit
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Warum sollte man Gutachter werden
          </h2>
          <p className="mt-6 text-xl leading-8 text-gray-700">
            Ein Gutachter zu sein bedeutet, Fachwissen in einem speziellen
            Bereich zu besitzen und dieses Wissen zur Lösung komplexer Probleme
            einzusetzen. Als Gutachter im Bereich Fahrzeugschäden haben Sie die
            Möglichkeit, Ihre technische Kompetenz mit einer wichtigen Rolle im
            Versicherungswesen zu verbinden. Sie tragen entscheidend dazu bei,
            Schadensfälle fair und genau zu bewerten, und sorgen für Transparenz
            und Gerechtigkeit in Versicherungsangelegenheiten.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
          <div className="relative lg:order-last lg:col-span-5">
            <svg
              className="absolute -top-[40rem] left-1 -z-10 h-[64rem] w-[175.5rem] -translate-x-1/2 stroke-gray-900/10 [mask-image:radial-gradient(64rem_64rem_at_111.5rem_0%,white,transparent)]"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="e87443c8-56e4-4c20-9111-55b82fa704e3"
                  width={200}
                  height={200}
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M0.5 0V200M200 0.5L0 0.499983" />
                </pattern>
              </defs>
              <rect
                width="100%"
                height="100%"
                strokeWidth={0}
                fill="url(#e87443c8-56e4-4c20-9111-55b82fa704e3)"
              />
            </svg>
            <figure className="border-l border-blue-600 pl-8">
              <blockquote className="text-xl font-semibold leading-8 tracking-tight text-gray-900">
                <p>
                  "Wir bereiten unsere Schüler auf eine erfolgreiche Karriere
                  als Gutachter vor. Es geht darum, Expertise zu entwickeln und
                  gleichzeitig die Freiheit und Flexibilität der
                  Selbstständigkeit zu genießen."
                </p>
              </blockquote>
              <figcaption className="mt-8 flex gap-x-4">
                <img
                  src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                  className="mt-1 h-10 w-10 flex-none rounded-full bg-gray-50"
                />
                <div className="text-sm leading-6">
                  <div className="font-semibold text-gray-900">Mehmet K</div>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="max-w-xl text-base leading-7 text-gray-700 lg:col-span-7">
            <p>
              Als Gutachter in der Fahrzeugbranche eröffnen sich dir vielfältige
              Möglichkeiten. Du hast die Chance, in einem spannenden und stetig
              wachsenden Feld zu arbeiten, wo deine Expertise nicht nur gefragt,
              sondern auch hochgeschätzt wird. Hier sind drei wesentliche
              Vorteile, die diesen Berufsweg so attraktiv machen:
            </p>
            <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
              <li className="flex gap-x-3">
                <CurrencyEuroIcon
                  className="h-8 w-8 flex-none text-blue-600"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    Attraktive Verdienstmöglichkeiten:{" "}
                  </strong>
                  In der selbstständigen Gutachtertätigkeit liegt großes
                  Verdienstpotential. Mit deiner Fachkenntnis und Erfahrung
                  kannst du ein beachtliches Einkommen erzielen, das mit deiner
                  wachsenden Expertise und deinem Kundenstamm weiter steigt.
                </span>
              </li>
              <li className="flex gap-x-3">
                <ClockIcon
                  className="h-8 w-8 flex-none text-blue-600"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    Flexible Arbeitszeiten:{" "}
                  </strong>
                  Du bestimmst deine Arbeitszeiten selbst. Diese Flexibilität
                  erlaubt es dir, Beruf und Privatleben optimal zu vereinbaren.
                  Ob du früh am Morgen startest oder dir nachmittags Zeit für
                  dich nimmst, du hast die Kontrolle über deinen Zeitplan.
                </span>
              </li>
              <li className="flex gap-x-3">
                <RocketLaunchIcon
                  className="h-8 w-8 flex-none text-blue-600"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    Selbstständigkeit und Unabhängigkeit:{" "}
                  </strong>
                  Als selbstständiger Gutachter bist du dein eigener Chef. Diese
                  Unabhängigkeit ermöglicht dir, deine Karriere nach deinen
                  Vorstellungen zu gestalten. Du entscheidest, an welchen
                  Projekten du arbeitest, und prägst so aktiv deinen beruflichen
                  Weg.
                </span>
              </li>
            </ul>
            <p className="mt-8">
              Als Gutachter eröffnest Du Dir nicht nur finanzielle und zeitliche
              Freiheiten, sondern auch die Möglichkeit, Deine Fähigkeiten stetig
              weiterzuentwickeln. In diesem Berufsfeld bist Du immer am Puls der
              Zeit, lernst kontinuierlich dazu und bleibst technologisch am
              Ball. Jeder Tag bietet Dir neue Herausforderungen und Chancen,
              Dein Wissen zu vertiefen und Deine Expertise auszubauen.
            </p>
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
              Deine Zukunft in der Gutachterbranche
            </h2>
            <p className="mt-6">
              Der Weg zum Gutachter ist nicht nur eine Karriereentscheidung – es
              ist eine Lebensentscheidung. Hier entwickelst Du nicht nur Deine
              beruflichen Fähigkeiten, sondern wächst auch persönlich. Du
              lernst, komplexe Situationen zu meistern, effektive Lösungen zu
              finden und triffst Entscheidungen, die einen echten Unterschied
              machen. Dieser Beruf fordert Dich heraus und fördert zugleich Dein
              Selbstbewusstsein, Dein analytisches Denken und Deine
              Kommunikationsfähigkeiten.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
