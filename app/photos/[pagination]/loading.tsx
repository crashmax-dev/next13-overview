export default function Loading() {
  const skeleton = Array.from({ length: 12 }, (_, index) => (
    <div
      className="w-full"
      key={index}
    >
      <div className="w-full h-64 bg-gray-300 rounded-lg dark:bg-gray-600"></div>
      <h1 className="w-full h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></h1>
    </div>
  ))

  return (
    <div className="grid grid-cols-1 gap-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
      {skeleton}
    </div>
  )
}
