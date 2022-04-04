import { useReactiveVar }    from '@apollo/client'

import React                 from 'react'
import Masonry               from 'react-responsive-masonry'
import { FC }                from 'react'
import { ResponsiveMasonry } from 'react-responsive-masonry'

import { Location }          from '@site/store'
import { Followers }         from '@site/store'
import { SearchValue }       from '@site/store'
import { Role }              from '@site/store'
import { Row }               from '@ui/layout'
import { Column }            from '@ui/layout'
import { Layout }            from '@ui/layout'
import { roleVar }           from '@site/store'
import { locationVar }       from '@site/store'
import { followersVar }      from '@site/store'
import { searchValueVar }    from '@site/store'

import { Card }              from './card'
import { useMockedCreators } from './data'

const Creators: FC = () => {
  const { creators } = useMockedCreators()

  const filterRole = useReactiveVar<Role>(roleVar)
  const filterLocation = useReactiveVar<Location>(locationVar)
  const filterFollowers = useReactiveVar<Followers>(followersVar)
  const searchValue = useReactiveVar<SearchValue>(searchValueVar)

  const filteredCreators = creators.filter(({ location, role, followers, ...creator }) => {
    const hash = `${location} ${role} ${followers} ${Object.values(creator).join(' ')}`

    if (!filterRole.includes('All') && !filterRole.includes(role)) return false
    if (filterLocation && location.search(filterLocation) === -1) return false
    if (filterFollowers.min && filterFollowers.min > followers) return false
    if (filterFollowers.max && filterFollowers.max < followers) return false
    if (hash.search(searchValue) === -1) return false

    return true
  })

  return (
    <Row justifyContent='center'>
      <Layout width={['100%', '100%', 1212]}>
        <Layout flexBasis={24} />
        <Column fill>
          <ResponsiveMasonry columnsCountBreakPoints={{ 300: 1, 560: 2, 900: 3, 1136: 4 }}>
            <Masonry columnsCount={4} gutter={16}>
              {filteredCreators.map(({
                firstName,
                secondName,
                role,
                location,
                description,
                image,
              }) => (
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
