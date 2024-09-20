import { Skill } from '../skill'
import { SimpleWork } from '../work'

export type SimpleUser = {
  id: string
  name: string
  slug: string
}

export type UserWithWorks = {
  id: string
  name: string
  slug: string
  description: string
  thumbnailImageUrl: string
  skills: Skill[]
  relatedWorks: SimpleWork[]
}
