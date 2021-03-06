import React           from 'react'
import { FC }          from 'react'

import { Row }         from '@ui/layout'
import { Layout }      from '@ui/layout'
import { Column }      from '@ui/layout'

import { FileDetails } from './file-details'
import { Header }      from './header'

const FileInfo: FC = () => (
  <Row justifyContent='center'>
    <Column fill>
      <Layout flexBasis={14} />
      <Header />
      <Layout flexBasis={22} />
      <FileDetails />
      <Layout flexBasis={22} />
    </Column>
  </Row>
)

export { FileInfo }
