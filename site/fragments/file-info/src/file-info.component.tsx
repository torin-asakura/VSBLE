import React           from 'react'
import { FC }          from 'react'

import { Row }         from '@ui/layout'
import { Layout }      from '@ui/layout'
import { Column }      from '@ui/layout'

import { Header }      from './header'
import { FileDetails } from './file-details'

const FileInfo: FC = () => (
  <Row justifyContent='center'>
    <Column fill>
      <Layout flexBasis={14}/>
      <Header/>
      <Layout flexBasis={22}/>
      <FileDetails/>
    </Column>
  </Row>
)

export { FileInfo }
