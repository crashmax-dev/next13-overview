import Link from 'next/link'
import { clsx } from 'clsx'

interface PaginationProps {
  pages: number
  current: number
}

export function Pagination(props: PaginationProps) {
  const links = Array.from({ length: props.pages }, (_, index) => {
    const pageNumber = index + 1
    const isActive = props.current === pageNumber

    return (
      <Link
        key={pageNumber}
        href={`/photos/${pageNumber}`}
      >
        <li
          key={pageNumber}
          className={clsx(
            'w-10 h-10 grid place-items-center rounded-md border lg:border-2',
            { 'border-blue-500 text-blue-500': isActive }
          )}
        >
          {pageNumber}
        </li>
      </Link>
    )
  })

  return (
    <ul className="w-full justify-center inline-flex gap-2 mt-4">{links}</ul>
  )
}
