import React                  from 'react'
import { FC }                 from 'react'

import { Box }                from '@ui/layout'
import { Row }                from '@ui/layout'
import { Layout }             from '@ui/layout'
import { Column }             from '@ui/layout'
import { ArrowLeftLongIcon }  from '@ui/icons'
import { ArrowRightLongIcon } from '@ui/icons'

const Slider: FC = ({ children }) => (
  <Layout justifyContent='center'>
    <Box>
      <Layout justifyContent='flex-start' alignItems='center'>
        <Box
          width={40}
          height={40}
          backgroundColor='background.beige'
          justifyContent='center'
          alignItems='center'
          borderRadius='full'
          // @ts-ignore
          cursor='pointer'
        >
          <ArrowLeftLongIcon/>
        </Box>
      </Layout>
      <Layout flexShrink={0} flexBasis={8}/>
      <Row justifyContent='center'>
        <Box
          width={['100%', '100%', 928]}
          height={['100%', '100%', 648]}
          backgroundColor='background.beige'
          justifyContent='center'
        >
          <Column justifyContent='center'>
            <Box width='100%' backgroundColor='background.gray' justifyContent='center'>
              {children}
            </Box>
          </Column>
        </Box>
      </Row>
      <Layout flexShrink={0} flexBasis={8}/>
      <Layout justifyContent='flex-end' alignItems='center'>
        <Box
          width={40}
          height={40}
          backgroundColor='background.beige'
          justifyContent='center'
          alignItems='center'
          borderRadius='full'
          // @ts-ignore
          cursor='pointer'
        >
          <ArrowRightLongIcon/>
        </Box>
      </Layout>
    </Box>
  </Layout>
)

export { Slider }
