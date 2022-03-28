import { Box }                      from '@atls-ui-proto/layout'
import { Layout }                   from '@atls-ui-proto/layout'

import React                        from 'react'

import { Navigation }               from '@site/navigation-fragment'

export const IndexPage = () => (
  <Box height='100%' width='100%' background='#DADEED' flexDirection='column'>
    <Layout>
      <Navigation />
    </Layout>
  </Box>
)
