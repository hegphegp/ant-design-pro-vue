import request from '@/utils/request'
import env from '@/config/env.js'

export function listArticle (parameter) {
  return request({
    url: env.url + '/list/article',
    method: 'get',
    data: parameter
  })
}
