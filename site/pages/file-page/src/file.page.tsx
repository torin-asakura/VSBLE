import React        from 'react'
import { FC }       from 'react'

import { FileInfo } from '@site/file-info-fragment'
import { Column }   from '@ui/layout'

const FilePage: FC = () => (
  <Column fill>
    <FileInfo />
  </Column>
)

export { FilePage }
