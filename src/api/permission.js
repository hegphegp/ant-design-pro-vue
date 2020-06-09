import request from '@/utils/request'
import env from '@/config/env.js'

export function permission (parameter) {
  return request({
    url: env.url + '/permission',
    method: 'get',
    data: parameter
  })
}
