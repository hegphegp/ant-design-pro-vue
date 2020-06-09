import request from '@/utils/request'
import env from '@/config/env.js'

export function analysisMonthBar (parameter) {
  return request({
    url: env.url + '/analysis/month-bar',
    method: 'get',
    data: parameter
  })
}
