import { defineMessages } from 'react-intl'

import packageData        from '../package.json'

const { name } = packageData

export default defineMessages({
  logOut: {
    id: `${name}.log_out`,
    defaultMessage: 'Log out',
  },
})
