import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

type Feature = {
  name: string;
  description: string;
  icon: any;
};

const staticFeatures: Feature[] = [
  {
    name: "Push to deploy.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "SSL certificates.",
    description:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
    icon: LockClosedIcon,
  },
  {
    name: "Database backups.",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: ServerIcon,
  },
];

export function FeatureSectionImage({ features }: { features: Feature[] }) {
  features = staticFeatures;
  return (
    <div className="overflow-hidden bg-white py-8" id="schritte">
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
          <div className="px-6 lg:px-0 lg:pr-4">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Starte Deinen Weg zum zertifizierten Gutachter
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Bei uns beginnt Deine Reise zum professionellen Gutachter für
                Fahrzeugschäden. Unser umfassendes Ausbildungsprogramm ist
                speziell darauf ausgerichtet, Dich mit allen notwendigen
                Fähigkeiten und Kenntnissen auszustatten. Folge diesen fünf
                Schritten, um Deine Karriere als gefragter Gutachter in der
                Automobilbranche zu starten:
              </p>
              <ol className="list-decimal space-y-4 mt-4">
                <li>
                  <strong>Informationsgespräch und Beratung:</strong> Vereinbare
                  ein persönliches Beratungsgespräch, um mehr über die Akademie
                  und den Berufsweg zum Gutachter zu erfahren. Wir beantworten
                  alle Deine Fragen und helfen Dir, den ersten Schritt zu
                  machen.
                </li>
                <li>
                  <strong>Anmeldung und Einschreibung:</strong> Nachdem Du alle
                  Informationen erhalten hast und bereit bist, beginnt Deine
                  Reise mit der Anmeldung und Einschreibung in unsere Akademie.
                </li>
                <li>
                  <strong>Fachspezifische Ausbildung:</strong> Unsere
                  umfangreichen Kurse decken alle relevanten Bereiche ab – von
                  technischen Grundlagen bis hin zu spezialisiertem Wissen in
                  der Schadensbewertung. Praxisnahe Lerninhalte bereiten Dich
                  optimal auf Deine zukünftige Tätigkeit vor.
                </li>
                <li>
                  <strong>Praktische Erfahrungen sammeln:</strong> Durch
                  Praktika und realitätsnahe Übungsszenarien gewinnst Du
                  wertvolle praktische Erfahrungen. Hier lernst Du, Dein
                  theoretisches Wissen in der Praxis anzuwenden und Deine
                  Fähigkeiten zu schärfen.
                </li>
                <li>
                  <strong>Zertifizierung und Karrierestart:</strong> Nach
                  erfolgreichem Abschluss Deiner Ausbildung erhältst Du Dein
                  Zertifikat als qualifizierter Gutachter. Mit diesem Abschluss
                  bist Du bestens gerüstet, um in die Welt der Gutachter
                  einzusteigen und Deine Karriere zu starten.
                </li>
              </ol>
            </div>
          </div>
          <div className="sm:px-6 lg:px-0">
            <div className="relative isolate overflow-hidden bg-blue-500 sm:mx-auto sm:max-w-xl sm:rounded-3xl lg:mx-0 lg:max-w-none">
              <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
                <img
                  src="/car-mechanics.jpg"
                  alt="car mechanics"
                  width={3000}
                  height={2000}
                  className="-mb-12 w-[57rem] max-w-none rounded-tl-xl bg-gray-800 ring-1 ring-white/10"
                />
              </div>
              <div
                className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-inset ring-white"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 sm:rounded-3xl"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const features = [
  {
    name: "Push to deploy.",
    description:
      "Aut illo quae. Ut et harum ea animi natus. Culpa maiores et sed sint et magnam exercitationem quia. Ullam voluptas nihil vitae dicta molestiae et. Aliquid velit porro vero.",
  },
  {
    name: "SSL certificates.",
    description:
      "Mollitia delectus a omnis. Quae velit aliquid. Qui nulla maxime adipisci illo id molestiae. Cumque cum ut minus rerum architecto magnam consequatur. Quia quaerat minima.",
  },
  {
    name: "Simple queues.",
    description:
      "Aut repellendus et officiis dolor possimus. Deserunt velit quasi sunt fuga error labore quia ipsum. Commodi autem voluptatem nam. Quos voluptatem totam.",
  },
  {
    name: "Advanced security.",
    description:
      "Magnam provident veritatis odit. Vitae eligendi repellat non. Eum fugit impedit veritatis ducimus. Non qui aspernatur laudantium modi. Praesentium rerum error deserunt harum.",
  },
  {
    name: "Powerful API.",
    description:
      "Sit minus expedita quam in ullam molestiae dignissimos in harum. Tenetur dolorem iure. Non nesciunt dolorem veniam necessitatibus laboriosam voluptas perspiciatis error.",
  },
  {
    name: "Database backups.",
    description:
      "Ipsa in earum deserunt aut. Quos minus aut animi et soluta. Ipsum dicta ut quia eius. Possimus reprehenderit iste aspernatur ut est velit consequatur distinctio.",
  },
];

export function FeatureSectionContent() {
  return (
    <div className="bg-white py-12 border-t border-zinc-800/20" id="schulungsinhalte">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Schulungsinhalte
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Unser KFZ-Gutachter-Kurs bietet eine fundierte, praxisnahe
            Ausbildung, die die Teilnehmer auf eine erfolgreiche Karriere in der
            Fahrzeugbewertung vorbereitet. Die Schulung umfasst eine breite
            Palette von Themen, von den technischen Grundlagen bis hin zu
            spezialisierten Bewertungstechniken und digitalen Werkzeugen.
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div key="feature-1">
            <dt className="font-semibold text-gray-900">
              Grundlagen der KFZ-Bewertung
            </dt>
            <dd className="mt-1 text-gray-600">
              In den ersten Wochen unseres KFZ-Gutachter-Kurses erlernen die
              Teilnehmer die grundlegenden Aspekte der KFZ-Technik und
              -Bewertung. Sie werden in die verschiedenen Fahrzeugtypen und
              -klassen eingeführt und erhalten Einblicke in die wichtigsten
              Bewertungsprinzipien und -techniken.
            </dd>
          </div>
          <div key="feature-2">
            <dt className="font-semibold text-gray-900">
              Alternative Antriebstechniken
            </dt>
            <dd className="mt-1 text-gray-600">
              Der Kurs legt einen Schwerpunkt auf die Bewertung von Fahrzeugen
              mit alternativen Antriebstechniken. Dies umfasst eine detaillierte
              Betrachtung von Elektro- und Hybridfahrzeugen sowie die
              Vermittlung spezifischer Bewertungskriterien für diese
              Fahrzeugklassen.
            </dd>
          </div>
          <div key="feature-3">
            <dt className="font-semibold text-gray-900">
              Praktische Anwendung
            </dt>
            <dd className="mt-1 text-gray-600">
              Eine zentrale Komponente unseres Programms ist die praxisnahe
              Anwendung des erlernten Wissens. Durch Fallstudien und reale
              Bewertungsszenarien trainieren die Teilnehmer, systematisch und
              effizient zu arbeiten, um präzise Gutachten zu erstellen.
            </dd>
          </div>
          <div key="feature-4">
            <dt className="font-semibold text-gray-900">
              Rechtliche Grundlagen und Ethik
            </dt>
            <dd className="mt-1 text-gray-600">
              Wir behandeln die rechtlichen Grundlagen und ethischen
              Verantwortlichkeiten eines KFZ-Gutachters ausführlich. Dies stellt
              sicher, dass unsere Teilnehmer sowohl technisch als auch
              hinsichtlich der rechtlichen und ethischen Aspekte des Berufs gut
              informiert sind.
            </dd>
          </div>
          <div key="feature-5">
            <dt className="font-semibold text-gray-900">
              Digitale Werkzeuge in der Fahrzeugbewertung
            </dt>
            <dd className="mt-1 text-gray-600">
              Der Kurs bietet umfassende Einblicke in die Nutzung moderner
              Software- und Digitalwerkzeuge in der Fahrzeugbewertung. Die
              Teilnehmer lernen den effizienten Umgang mit diesen Technologien
              und deren Einsatz für die digitale Dokumentation und Bewertung.
            </dd>
          </div>
          <div key="feature-6">
            <dt className="font-semibold text-gray-900">
              Dokumentation und Datensicherheit
            </dt>
            <dd className="mt-1 text-gray-600">
              Ein weiterer wichtiger Bestandteil des Programms ist das Erlernen
              korrekter Dokumentation und Datensicherung. Unsere Schüler werden
              darin ausgebildet, Bewertungen präzise zu dokumentieren und Daten
              sicher zu speichern, um die Integrität ihrer Arbeit zu
              gewährleisten.
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
