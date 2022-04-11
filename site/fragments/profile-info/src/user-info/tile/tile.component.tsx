import React                from 'react'
import { FC }               from 'react'
import { FormattedMessage } from 'react-intl'

import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { Text }             from '@ui/text'

import { TileProps }        from './tile.interface'

const Tile: FC<TileProps> = ({ title, description }) => (
  <Box width={['100%', '100%', 560]} height={68} backgroundColor='background.beige' borderRadius='normal'>
    <Layout flexBasis={16} />
    <Column>
      <Layout flexBasis={8} />
      <Row>
        <Text fontSize='default' color='text.accent' fontWeight='semiBold' lineHeight='default'>
          <FormattedMessage id='creator_page.tile_title' defaultMessage={title} />
        </Text>
      </Row>
      <Layout flexBasis={4} />
      <Row>
        <Text fontSize='default' color='text.accent' fontWeight='normal' lineHeight='default'>
          <FormattedMessage id='creator_page.tile_description' defaultMessage={description} />
        </Text>
      </Row>
    </Column>
  </Box>
)

export { Tile }
