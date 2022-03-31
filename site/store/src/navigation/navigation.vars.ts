import { makeVar } from '@apollo/client'

import { Search }  from './navigation.interfaces'

export const searchVar = makeVar<Search>(false)
