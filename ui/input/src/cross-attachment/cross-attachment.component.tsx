import styled                   from '@emotion/styled'
import { ConditionalRender }    from '@atls-ui-parts/conditional-render'

import React                    from 'react'
import { FC }                   from 'react'
import { useMemo }              from 'react'
import { forwardRef }           from 'react'

import { Button }               from '@ui/button'
import { Condition }            from '@ui/condition'
import { CancelIcon }           from '@ui/icons'

import { CrossAttachmentProps } from './cross-attachment.interface'
import { baseStyles }           from './cross-attachment.styles'
import { positionStyles }       from './cross-attachment.styles'

const CrossAttachment: FC<CrossAttachmentProps> = forwardRef(({ type, focus, setValue }, ref) => {
  const Attachment = useMemo(() => styled(ConditionalRender())(baseStyles, positionStyles), [])

  return type === 'search' ? (
    <Attachment>
      <Condition match={focus}>
        <Button size='ghost' variant='ghost' onClick={() => setValue('')} ref={ref as any}>
          <CancelIcon width={6} height={6} />
        </Button>
      </Condition>
    </Attachment>
  ) : null
})

export { CrossAttachment }
