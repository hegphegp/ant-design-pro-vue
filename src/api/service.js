import request from '@/utils/request'
import env from '@/config/env.js'

export function service (parameter) {
  return request({
    url: env.url + '/service',
    method: 'get',
    data: parameter
  })
}
