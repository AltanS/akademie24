export function Cta({
  title,
  subtitle,
  primaryAction,
  primaryActionLink,
}: {
  title: string,
  subtitle: string,
  primaryAction: string,
  primaryActionLink: string,
}) {
  return (
    <div className="bg-white my-4">
      <div className="mx-auto max-w-xl py-16 rounded ">
        <div className="mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
            {subtitle}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href={primaryActionLink}
              target="_blank"
              className="rounded-md bg-blue-600 px-3.5 py-2.5 font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {primaryAction}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
