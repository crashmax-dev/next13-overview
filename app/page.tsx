import Link from 'next/link'

export default function Page() {
  return (
    <div>
      <h1>Navigation</h1>
      <ul className="list-disc">
        <li>
          <Link
            href="/photos"
            className="text-white underline"
          >
            Photos
          </Link>
        </li>
      </ul>
    </div>
  )
}
