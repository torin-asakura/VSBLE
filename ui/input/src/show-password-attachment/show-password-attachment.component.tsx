import styled                          from '@emotion/styled'
import { ConditionalRender }           from '@atls-ui-parts/conditional-render'

import React                           from 'react'
import { FC }                          from 'react'
import { useMemo }                     from 'react'

import { Button }                      from '@ui/button'
import { Condition }                   from '@ui/condition'
import { EyeOffIcon }                  from '@ui/icons'
import { EyeIcon }                     from '@ui/icons'

import { ShowPasswordAttachmentProps } from './show-password-attachment.interface'
import { baseStyles }                  from './show-password-attachment.styles'
import { positionStyles }              from './show-password-attachment.styles'

const ShowPasswordAttachment: FC<ShowPasswordAttachmentProps> = ({ type, hidden, setHidden }) => {
  const Attachment = useMemo(() => styled(ConditionalRender())(baseStyles, positionStyles), [])

  return type === 'password' ? (
    <Attachment>
      <Condition match={hidden}>
        <Button size='ghost' variant='ghost' onClick={() => setHidden(!hidden)}>
          <EyeOffIcon width={24} height={24} />
        </Button>
      </Condition>
      <Condition match={!hidden}>
        <Button size='ghost' variant='ghost' onClick={() => setHidden(!hidden)}>
          <EyeIcon width={24} height={24} />
        </Button>
      </Condition>
    </Attachment>
  ) : null
}

export { ShowPasswordAttachment }
