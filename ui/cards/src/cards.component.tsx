import React                 from 'react'
import Masonry               from 'react-responsive-masonry'
import { FC }                from 'react'
import { ResponsiveMasonry } from 'react-responsive-masonry'

import { Row }               from '@ui/layout'
import { Column }            from '@ui/layout'

import { CardsProps }        from './cards.interfaces'

const Cards: FC<CardsProps> = ({ children, columnsCountBreakPoints, columnsCount, gutter }) => (
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
