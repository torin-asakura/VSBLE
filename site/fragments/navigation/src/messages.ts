import { defineMessages } from 'react-intl'

import packageData        from '../package.json'

const { name } = packageData

export default defineMessages({
  search: {
    id: `${name}.search`,
    defaultMessage: 'Search',
  },
  jobRequests: {
    id: `${name}.job_requests`,
    defaultMessage: 'Job requests',
  },
  imageRequests: {
    id: `${name}.image_requests`,
    defaultMessage: 'Image requests',
  },
  favourites: {
    id: `${name}.favourites`,
    defaultMessage: 'Favourites',
  },
  cart: {
    id: `${name}.cart`,
    defaultMessage: 'Cart',
  },
  logIn: {
    id: `${name}.log_in`,
    defaultMessage: 'Log In',
  },
  signUp: {
    id: `${name}.sign_up`,
    defaultMessage: 'Sign Up',
  },
  uploadImages: {
    id: `${name}.upload_images`,
    defaultMessage: 'Upload Images',
  },
})
