import React              from 'react'
import { FC }             from 'react'

import { Row }            from '@ui/layout'
import { Layout }         from '@ui/layout'

import { Tile }           from './tile'
import { useMockedTiles } from '../data'

const UserInfo: FC = () => {
  const { tiles } = useMockedTiles()

  return (
    <Row fill justifyContent='center'>
      <Layout width={['100%', '100%', 1136]}>
        <Layout flexBasis={[20, 20, 0]} />
        <Row justifyContent='space-between' flexWrap='wrap' alignItems='center'>
          {tiles.map((tile) => (
            <Tile title={tile.title} description={tile.description} key={tile.title} />
          ))}
        </Row>
      </Layout>
      <Layout flexBasis={[20, 20, 0]} />
    </Row>
  )
}

export { UserInfo }
