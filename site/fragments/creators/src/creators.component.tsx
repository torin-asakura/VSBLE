import React                 from 'react'
import Masonry               from 'react-responsive-masonry'
import { FC }                from 'react'
import { FormattedMessage }  from 'react-intl'
import { ResponsiveMasonry } from 'react-responsive-masonry'

import { Row }               from '@ui/layout'
import { Column }            from '@ui/layout'
import { Layout }            from '@ui/layout'
import { Text }              from '@ui/text'

import { Card }              from './card'
import { useMockedCreators } from './data'

const Creators: FC = () => {
  const { creators } = useMockedCreators()

  return (
    <Row justifyContent='center'>
      <Layout width={['100%', '100%', 1212]}>
        <Layout flexBasis={24} />
        <Column fill>
          <Row justifyContent='center'>
            <Text fontSize='giant' color='text.accent' fontWeight='bold'>
              <FormattedMessage
                id='creators.here_are_some_trending'
                defaultMessage='Here are some trending Creators'
              />
            </Text>
          </Row>
          <Layout flexBasis={48} />
          <ResponsiveMasonry columnsCountBreakPoints={{ 300: 1, 560: 2, 900: 3, 1136: 4 }}>
            <Masonry columnsCount={4} gutter={16}>
              {creators.map(({ firstName, secondName, role, location, description, image }) => (
                <Card
                  firstName={firstName}
                  secondName={secondName}
                  role={role}
                  location={location}
                  description={description}
                  imageSrc={image}
                />
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </Column>
        <Layout flexBasis={24} />
      </Layout>
    </Row>
  )
}

export { Creators }
