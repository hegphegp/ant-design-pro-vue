import request from '@/utils/request'
import env from '@/config/env.js'

export function listSearchProjects (parameter) {
  return request({
    url: env.url + '/list/search/Projects',
    method: 'get',
    data: parameter
  })
}

export function workplaceActivity (parameter) {
  return request({
    url: env.url + '/workplace/activity',
    method: 'get',
    data: parameter
  })
}

export function workplaceTeams (parameter) {
  return request({
    url: env.url + '/workplace/teams',
    method: 'get',
    data: parameter
  })
}

export function workplaceRadar (parameter) {
  return request({
    url: env.url + '/workplace/radar',
    method: 'get',
    data: parameter
  })
}
