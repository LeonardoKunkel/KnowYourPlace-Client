
export default function NotFound() {
  return (
    <>
      <div className="bg-black absolute w-full h-full min-h-full flex flex-col">
        <main className="flex-grow mx-auto max-w-7xl w-full flex flex-col px-4 sm:px-6 lg:px-8">
          <div className="sm:py-32">
            <p className="text-sm font-semibold text-orange-500 uppercase tracking-wide">Error 404</p>
            <h1 className="mt-2 text-4xl font-extrabold text-white tracking-tight sm:text-5xl">Página no encontrada</h1>
            <p className="mt-2 text-base text-gray-400">Lo sentimos, la página a la que quieres acceder no existe.</p>
            <div className="mt-6">
              <a href="#" className="text-base font-medium text-orange-500 hover:text-orange-400">
                Regresar al Home<span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
