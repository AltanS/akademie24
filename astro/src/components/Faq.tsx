export function Faq() {
  return (
    <div className="bg-white py-8 border-t-2 border-zinc-800/20" id="faq">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">FAQ - Häufig gestellte Fragen</h2>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Hast du eine spezielle Frage und findest nicht die Antwort? {' '}
            <a href="https://tally.so/r/mY4J6d" target="_blank" className="font-semibold text-blue-600 hover:text-blue-500">
              Kontaktiere uns einfach über unser Kontaktformular
            </a>{' '}
            und wir werden uns so schnell wie möglich bei dir melden.
          </p>
        </div>
        <div className="mt-20">
          <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:gap-x-10">
            <div key="faq-1">
              <dt className="text-base font-semibold leading-7 text-gray-900">
              Was werde ich in diesem Kurs lernen?
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
              In diesem Kurs erlernen Sie die Grundlagen der Fahrzeugtechnik, Methoden zur Fahrzeugbewertung, den Umgang mit alternativen Antriebstechniken sowie den Einsatz digitaler Werkzeuge und Software in der KFZ-Bewertung.
              </dd>
            </div>
            <div key="faq-2">
              <dt className="text-base font-semibold leading-7 text-gray-900">
              Benötige ich Vorkenntnisse in der Automobiltechnik?
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
              Vorkenntnisse sind hilfreich, aber nicht erforderlich. Unser Kurs ist so konzipiert, dass er Teilnehmern ohne Vorkenntnisse die Grundlagen vermittelt, während er auch für diejenigen mit Erfahrung wertvoll ist.
              </dd>
            </div>
            <div key="faq-3">
              <dt className="text-base font-semibold leading-7 text-gray-900">
              Wie lange dauert der Kurs und wie ist er strukturiert?
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
              Der Kurs dauert 8 Wochen und ist in wöchentliche Module unterteilt, die jeweils spezifische Themenschwerpunkte haben. Jede Woche besteht aus theoretischen und praktischen Lerneinheiten.
              </dd>
            </div>
            <div key="faq-4">
              <dt className="text-base font-semibold leading-7 text-gray-900">
              Gibt es Prüfungen oder Zertifizierungen?
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
              Ja, am Ende des Kurses gibt es eine Abschlussprüfung. Nach erfolgreichem Abschluss erhalten die Teilnehmer ein Zertifikat, das ihre Qualifikation als KFZ-Gutachter bescheinigt.
              </dd>
            </div>
            <div key="faq-5">
              <dt className="text-base font-semibold leading-7 text-gray-900">
              Ist der Kurs online oder präsenz?
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
              Der Kurs wird als Präsenzveranstaltung durchgeführt, um eine optimale Lernumgebung für praktische Übungen und direkte Interaktion zu gewährleisten.
              </dd>
            </div>
            <div key="faq-6">
              <dt className="text-base font-semibold leading-7 text-gray-900">
              Welche Art von Unterstützung wird während des Kurses geboten?
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
              Teilnehmer erhalten Zugang zu umfassenden Lernmaterialien, persönlicher Betreuung durch erfahrene Dozenten und Unterstützung durch praktische Übungen.
              </dd>
            </div>
            <div key="faq-7">
              <dt className="text-base font-semibold leading-7 text-gray-900">
              Wie sieht es mit der Arbeitsmarktfähigkeit nach dem Kurs aus?
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
              Mit dem Abschluss dieses Kurses sind Sie gut aufgestellt, um als KFZ-Gutachter zu arbeiten. Der Kurs bietet sowohl grundlegende als auch spezialisierte Kenntnisse, die auf dem aktuellen Arbeitsmarkt gefragt sind.
              </dd>
            </div>
            <div key="faq-8">
              <dt className="text-base font-semibold leading-7 text-gray-900">
              Gibt es Voraussetzungen für die Kursteilnahme?
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
              Es gibt keine spezifischen Voraussetzungen, allerdings ist ein grundlegendes Interesse an der Automobilbranche und technischen Themen empfehlenswert, um den größtmöglichen Nutzen aus dem Kurs zu ziehen.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  )
}
