export type Work = {
  id: string
  title: string
  description: string
  isPublished: boolean
  coverImageUrl: string
  userCount: number
  images: [
    {
      url: string
    },
  ]
}
