import Link from 'next/link'

export default function NotFound() {
  return (
    <>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <p>
        <Link
          href="/"
          className="text-white underline"
        >
          Go to home
        </Link>
      </p>
    </>
  )
}
