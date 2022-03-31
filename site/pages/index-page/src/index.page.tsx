import React             from 'react'

import { SignUpCTA }     from '@site/call-to-actions-fragment'
import { GetStartedCTA } from '@site/call-to-actions-fragment'
import { Creators }      from '@site/creators-fragment'
import { Filters }       from '@site/filters-fragment'
import { Footer }        from '@site/footer-fragment'
import { Navigation }    from '@site/navigation-fragment'
import { Column }        from '@ui/layout'
import { Layout }        from '@ui/layout'

export const IndexPage = () => (
  <Column fill>
    <Navigation />
    <Layout flexShrink={0} flexBasis={16} />
    <SignUpCTA />
    <Layout flexShrink={0} flexBasis={80} />
    <Filters />
    <Layout flexShrink={0} flexBasis={40} />
    <Creators />
    <Layout flexShrink={0} flexBasis={69} />
    <GetStartedCTA />
    <Layout flexShrink={0} flexBasis={69} />
    <Footer />
  </Column>
)
