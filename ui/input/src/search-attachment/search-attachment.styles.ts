import { styleFn }                        from 'styled-system'

import { createAttachmentBaseStyles }     from '@atls-ui-parts/input'
import { createAttachmentPositionStyles } from '@atls-ui-parts/input'
import { createAddonPositionStyles }      from '@atls-ui-parts/input'

export const baseStyles = createAttachmentBaseStyles()

export const positionStyles = createAttachmentPositionStyles(12, 6)

export const addonStyles = createAddonPositionStyles('before')

export const cancelButtonStyles = (): styleFn => () => ({
  'input[type="search"]::-webkit-search-cancel-button': {
    '-webkit-appearance': 'none',
  }
})
