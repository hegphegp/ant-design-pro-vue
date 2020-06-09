import request from '@/utils/request'
import env from '@/config/env.js'

export function role (parameter) {
  return request({
    url: env.url + '/role',
    method: 'get',
    data: parameter
  })
}
