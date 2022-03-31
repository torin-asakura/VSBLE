import { makeVar }        from '@apollo/client'

import { Location }       from './filters.interfaces'
import { Followers }      from './filters.interfaces'
import { Expertise }      from './filters.interfaces'
import { Studio }         from './filters.interfaces'
import { Postproduction } from './filters.interfaces'
import { Videography }    from './filters.interfaces'

export const locationVar = makeVar<Location>(undefined)
export const followersVar = makeVar<Followers>({ min: undefined, max: undefined })
export const expertiseVar = makeVar<Expertise>(undefined)
export const studioVar = makeVar<Studio>(undefined)
export const postproductionVar = makeVar<Postproduction>(undefined)
export const videographyVar = makeVar<Videography>(undefined)
export const searchValueVar = makeVar('')
