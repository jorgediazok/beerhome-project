//Contentful Database
import { createClient } from 'contentful';
require('dotenv').config();

export default createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE,
  environment: 'master',
  accessToken: process.env.REACT_APP_CONTENTFUL_KEY,
});
