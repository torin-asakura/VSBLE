import React from 'react'
import { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import Masonry from 'react-responsive-masonry'
import { ResponsiveMasonry } from 'react-responsive-masonry'

import { Text } from '@ui/text'
import { Row } from '@ui/layout'
import { Column } from '@ui/layout'
import { Layout } from '@ui/layout'

import { Card } from './card'
import { useMockedCreators } from './data'

const Creators: FC = () => {
  const { creators } = useMockedCreators()

  return (
    <Row justifyContent='center'>
      <Layout width={['100%', '100%', 1212]}>
        <Column fill>
          <Row justifyContent='center'>
            <Text fontSize='giant' color='text.accent' fontWeight='bold'>
              <FormattedMessage id='creators.here_are_some_trending' defaultMessage='Here are some trending Creators' />
            </Text>
          </Row>
          <Layout flexBasis={48} />
            <Masonry columnsCount={4} gutter={16}>
              {creators.map(({ firstName, secondName, role, location, description }) => (
                <Card
                  firstName={firstName}
                  secondName={secondName}
                  role={role}
                  location={location}
                  description={description}
                />
              ))}
            </Masonry>
        </Column>
      </Layout>
    </Row>
  )
}

export { Creators }
