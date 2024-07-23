export type Work = {
  id: string
  title: string
  description: string
  isPublished: boolean
  coverImageUrl: string
  images: [
    {
      url: string
    },
  ]
}
