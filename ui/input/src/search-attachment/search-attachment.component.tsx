import styled                    from '@emotion/styled'
import { ConditionalRender }     from '@atls-ui-parts/conditional-render'

import React                     from 'react'
import { FC }                    from 'react'
import { useMemo }               from 'react'

import { CancelIcon }            from '@ui/icons'
import { SearchIcon }            from '@ui/icons'

import { SearchAttachmentProps } from './search-attachment.interface'
import { baseStyles }            from './search-attachment.styles'
import { positionStyles }        from './search-attachment.styles'

const SearchAttachment: FC<SearchAttachmentProps> = ({ type }) => {
  const Attachment = useMemo(() => styled(ConditionalRender())(baseStyles, positionStyles), [])

  return type === 'search' ? (
    <Attachment>
      <SearchIcon width={16} height={16} />
      <CancelIcon width={6} height={6} />
    </Attachment>
  ) : null
}

export { SearchAttachment }
