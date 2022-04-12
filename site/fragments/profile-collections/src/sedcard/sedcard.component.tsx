import React                from 'react'
import { FC }               from 'react'
import { FormattedMessage } from 'react-intl'

import { Row }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Cards }            from '@ui/cards'
import { Text }             from '@ui/text'

import { useMockedCards }   from '../data'
import { Card }             from '../card'

const Sedcard: FC = () => {
  const { cards } = useMockedCards()

  return (
    <Row justifyContent='center'>
      <Layout width={['100%', '100%', 1136]}>
        <Column fill>
          <Row justifyContent='center'>
            <Text fontSize='default' color='text.accent' fontWeight='normal' lineHeight='extra' textAlign='center'>
              <FormattedMessage id='creator_page.prompt' defaultMessage='You can choose images for Sedcard from Archive'/>
            </Text>
          </Row>
          <Layout flexBasis={24}/>
          <Row>
            <Layout flexBasis={[24, 24, 0]}/>
            <Column fill>
              <Cards columnsCountBreakPoints={{300: 1, 560: 2, 900: 3, 1136: 4}} columnsCount={4} gutter={16}>
                {cards.map(({ image }) => (
                  <Card imageSrc={image} key={image}/>
                ))}
              </Cards>
            </Column>
            <Layout flexBasis={[24, 24, 0]}/>
          </Row>
        </Column>
      </Layout>
    </Row>
  )
}

export { Sedcard }
