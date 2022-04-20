import React               from 'react'
import { FC }              from 'react'

import { Navigation }      from '@site/navigation-fragment'
import { ArtbuyerFilters } from '@site/filters-fragment'
import { Column }          from '@ui/layout'
import { Layout }          from '@ui/layout'
import { Creators }        from '@site/creators-fragment'

const SearchPage: FC = () => (
  <Column fill>
    <Navigation />
    <Layout flexShrink={0} flexBasis={56} />
    <ArtbuyerFilters />
    <Layout flexShrink={0} flexBasis={40} />
    <Creators />
  </Column>
)

export { SearchPage }
