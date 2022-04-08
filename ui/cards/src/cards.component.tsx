import React                 from 'react'
import { FC }                from 'react'
import Masonry               from 'react-responsive-masonry'
import { ResponsiveMasonry } from 'react-responsive-masonry'

import { Row }               from '@ui/layout'
import { Column }            from '@ui/layout'

import { MasonryProps }      from './cards.interfaces'

const Cards: FC<MasonryProps> = ({children, columnsCountBreakPoints, columnsCount, gutter}) => (
  <Row>
    <Column fill>
      <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}>
        <Masonry columnsCount={columnsCount} gutter={gutter}>
          {children}
        </Masonry>
      </ResponsiveMasonry>
    </Column>
  </Row>
)

export { Cards }
