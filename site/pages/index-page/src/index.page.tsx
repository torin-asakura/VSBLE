import React             from 'react'

import { SignUpCTA }     from '@site/call-to-actions-fragment'
import { GetStartedCTA } from '@site/call-to-actions-fragment'
import { Navigation }    from '@site/navigation-fragment'

export const IndexPage = () => (
  <>
    <Navigation />
    <SignUpCTA />
    <GetStartedCTA />
  </>
)
