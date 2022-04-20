import { useReactiveVar }  from '@apollo/client'

import React               from 'react'
import { FC }              from 'react'

import { Creators }        from '@site/creators-fragment'
import { ArtbuyerFilters } from '@site/filters-fragment'
import { Navigation }      from '@site/navigation-fragment'
import { Search }          from '@site/store'
import { Column }          from '@ui/layout'
import { Layout }          from '@ui/layout'
import { searchVar }       from '@site/store'

const SearchPage: FC = () => {
  const search = useReactiveVar<Search>(searchVar)

  if (search) searchVar(false)

  return (
    <Column fill>
      <Navigation />
      <Layout flexShrink={0} flexBasis={56} />
      <ArtbuyerFilters />
      <Layout flexShrink={0} flexBasis={40} />
      <Creators />
    </Column>
  )
}
export { SearchPage }
