export type SimpleWork = {
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
  author: {
    id: string
    name: string
    slug: string
  }
  assets: [
    {
      id: string
      name: string
      url: string
    },
  ]
  categories: [
    {
      id: string
      name: string
    },
  ]
  tags: [
    {
      id: string
      name: string
    },
  ]
  copyrights: [
    {
      id: string
      name: string
      users: [
        {
          id: string
          name: string
          slug: string
        },
      ]
    },
  ]
}

export type WorkImage = {
  url: string
}
