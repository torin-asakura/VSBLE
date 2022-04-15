import React              from 'react'
import { FC }             from 'react'

import { Cards }          from '@ui/cards'
import { Row }            from '@ui/layout'
import { Column }         from '@ui/layout'
import { Layout }         from '@ui/layout'

import { Card }           from '../card'
import { useMockedCards } from '../data'

const Archive: FC = () => {
  const { cards } = useMockedCards()

  return (
    <Row justifyContent='center'>
      <Layout width={['100%', '100%', 1136]}>
        <Layout flexBasis={[24, 24, 0]} />
        <Column fill>
          <Cards
            columnsCountBreakPoints={{ 300: 1, 560: 2, 900: 3, 1136: 4 }}
            columnsCount={4}
            gutter={16}
          >
            {cards.map(({ image }) => (
              <Card imageSrc={image} key={image} />
            ))}
          </Cards>
        </Column>
        <Layout flexBasis={[24, 24, 0]} />
      </Layout>
    </Row>
  )
}

export { Archive }
