import React             from 'react'
import { FC }            from 'react'

import { Button }        from '@ui/button'
import { Row }           from '@ui/layout'
import { Layout }        from '@ui/layout'
import { Column }        from '@ui/layout'

import { useMockedTags } from '../data'

const Tags: FC = () => {
  const { tags } = useMockedTags()

  return (
    <Column fill>
      <Row justifyContent='center' flexWrap='wrap'>
        {tags.map((tag) => (
          <>
            <Layout flexBasis={2} />
            <Button variant='lightGray' size='verySmall'>
              {tag.title}
            </Button>
            <Layout flexBasis={2} />
          </>
        ))}
      </Row>
    </Column>
  )
}

export { Tags }
