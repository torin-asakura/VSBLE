import React             from 'react'
import { FC }            from 'react'

import { Box }           from '@ui/layout'
import { Row }           from '@ui/layout'
import { Layout }        from '@ui/layout'
import { Column }        from '@ui/layout'
import { Text }          from '@ui/text'

import { useMockedTags } from '../data'

const Tags: FC = () => {
  const { tags } = useMockedTags()

  return (
    <Column fill>
      <Row justifyContent='center' flexWrap='wrap'>
        {tags.map((tag) =>
          <Box border='thinGray' borderRadius='normal' padding='4px 8px' margin='2px'>
            <Layout>
              <Text fontSize='semiRegular' color='text.lightGray' fontWeight='normal' lineHeight='default'>
                {tag.title}
              </Text>
            </Layout>
          </Box>
        )}
      </Row>
    </Column>
  )
}

export { Tags }
