import Image from 'next/image'
import { notFound } from 'next/navigation'

import { Pagination } from './pagination'

interface ApiResponse {
  success: boolean
  message: string
  offset: number
  limit: number
  photos?: Photo[]
}

interface Photo {
  id: number
  user: number
  title: string
  description: string
  url: string
}

const TOTAL_PAGES = 10
const PER_PAGE = 12

async function fetchPhotos(offset: number): Promise<ApiResponse> {
  const link = `https://api.slingacademy.com/v1/sample-data/photos?limit=${PER_PAGE}&offset=${
    offset * PER_PAGE
  }`
  const response = await fetch(link)
  return response.json()
}

interface Props {
  params: {
    pagination: string
  }
}

export default async function Page(props: Props) {
  // await new Promise((resolve) => setTimeout(resolve, 10000))
  const currentPage = Number(props.params.pagination) - 1
  const { photos } = await fetchPhotos(currentPage ?? 0)
  if (!photos || photos.length === 0) notFound()

  return (
    <>
      <div className="grid grid-cols-1 gap-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
        {photos.map((photo) => (
          <div
            className="w-full"
            key={photo.id}
          >
            <Image
              className="w-full h-64 rounded-lg object-cover dark:bg-gray-600"
              src={photo.url}
              alt={photo.description}
              width={800}
              height={600}
            />
            <h1 className="w-full mt-4">{photo.title}</h1>
          </div>
        ))}
      </div>
      <Pagination
        pages={TOTAL_PAGES}
        current={Number(props.params.pagination)}
      />
    </>
  )
}
