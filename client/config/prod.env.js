'use strict'
const APP_URL = 'http://vuejs-micro-blog-2.s3-website-us-east-1.amazonaws.com/'

module.exports = {
  NODE_ENV: '"production"',
  BACKEND_URL: '"https://mkte3gvfpb.execute-api.us-east-1.amazonaws.com/latest/micro-posts"',
  AUTH0_CLIENT_ID: '"3ykWBn84h2aP3Cw7U845F1qCio7WdTlt"',
  AUTH0_DOMAIN: '"bk-tmp-prod.auth0.com"',
  AUTH0_LOGOUT_URL: `"${APP_URL}"`,
  AUTH0_CALLBACK_URL: `"${APP_URL}callback"`
}
