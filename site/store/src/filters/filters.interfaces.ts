import { Optional } from '@shared/utils'

export type Role = Array<string>
export type Location = Optional<string>
export interface Followers {
  min: Optional<number>
  max: Optional<number>
}
export type Expertise = Optional<string>
export type Studio = Optional<string>
export type Postproduction = Optional<string>
export type Videography = Optional<string>
export type SearchValue = string
