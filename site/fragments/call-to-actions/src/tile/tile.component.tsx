import React          from 'react'
import { FC }         from 'react'

import { Button }     from '@ui/button'
import { ImageBlock } from '@ui/image'
import { Box }        from '@ui/layout'
import { Column }     from '@ui/layout'
import { Row }        from '@ui/layout'
import { Layout }     from '@ui/layout'
import { Text }       from '@ui/text'

import { TileProps }  from './tile.interface'

const Tile: FC<TileProps> = ({ actionName, action, content }) => (
  <Box position='relative' width={['100%', '100%', 568]} height={700}>
    <Column justifyContent='flex-end' fill>
      <Row>
        <Text
          fontSize='giant'
          color='text.white'
          fontWeight='bold'
          justifyContent='center'
          textAlign='center'
        >
          {content}
        </Text>
      </Row>
      <Layout flexBasis={24} />
      <Row justifyContent='center'>
        <Button onClick={action}>{actionName}</Button>
      </Row>
      <Layout flexBasis={96} />
    </Column>
    <Box position='absolute' top={0} left={0} zIndex={-1} fill>
      <ImageBlock width='100%' height='100%' src='https://source.unsplash.com/random' />
    </Box>
  </Box>
)

export { Tile }
