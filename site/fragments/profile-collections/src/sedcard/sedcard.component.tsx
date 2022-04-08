import React              from 'react'
import { FC }             from 'react'

import { Row }            from '@ui/layout/src'
import { Column }         from '@ui/layout/src'
import { Layout }         from '@ui/layout/src'
import { Cards }          from '@ui/cards/src'

import { useMockedCards } from '../data'
import { Card }           from '../card'

const Sedcard: FC = () => {
  const { cards } = useMockedCards()

  return (
    <Row justifyContent='center'>
      <Layout width={['100%', '100%', 1136]}>
        <Column fill>
          <Cards columnsCountBreakPoints={{ 300: 1, 560: 2, 900: 3, 1136: 4 }} columnsCount={4} gutter={16}>
            {cards.map(({ image }) => (
              <Card imageSrc={image} key={image} />
            ))}
          </Cards>
        </Column>
      </Layout>
    </Row>
  );
};

export { Sedcard }
