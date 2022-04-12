import React        from 'react'
import { FC }       from 'react'

import { Column }   from '@ui/layout'
import { FileInfo } from '@site/file-info-fragment'

const FilePage: FC = () => (
  <Column fill>
    <FileInfo />
  </Column>
)


export { FilePage }
