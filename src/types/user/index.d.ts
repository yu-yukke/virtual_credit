import { Skill } from '../skill'
import { Social } from '../social'
import { SimpleWork } from '../work'

export type SimpleUser = {
  id: string
  name: string
  slug: string
}

export type User = {
  id: string
  name: string
  slug: string
  description: string
  coverImageUrl: string
  thumbnailImageUrl: string
  social: Social
  skills: Skill[]
  myWorks: SimpleWork[]
  copyrightedWorks: SimpleWork[]
}
