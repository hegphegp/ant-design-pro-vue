import request from '@/utils/request'
import env from '@/config/env'

export function getUserList (parameter) {
  return request({
    url: env.url + '/user',
    method: 'get',
    params: parameter
  })
}

export function getRoleList (parameter) {
  return request({
    url: env.url + '/role',
    method: 'get',
    params: parameter
  })
}

export function getServiceList (parameter) {
  return request({
    url: env.url + '/service',
    method: 'get',
    params: parameter
  })
}

export function getPermissions (parameter) {
  return request({
    url: env.url + '/permission/no-pager',
    method: 'get',
    params: parameter
  })
}

export function getOrgTree (parameter) {
  return request({
    url: env.url + '/org/tree',
    method: 'get',
    params: parameter
  })
}

// id == 0 add     post
// id != 0 update  put
export function saveService (parameter) {
  return request({
    url: env.url + '/service',
    method: parameter.id === 0 ? 'post' : 'put',
    data: parameter
  })
}

export function saveSub (sub) {
  return request({
    url: '/sub',
    method: sub.id === 0 ? 'post' : 'put',
    data: sub
  })
}
