import request from '@/utils/request'
import env from '@/config/env.js'

/**
 * login func
 * parameter: {
 *     username: '',
 *     password: '',
 *     remember_me: true,
 *     captcha: '12345'
 * }
 * @param parameter
 * @returns {*}
 */
export function login (parameter) {
  return request({
    url: env.url + '/auth/login',
    method: 'post',
    data: parameter
  })
}

export function getSmsCaptcha (parameter) {
  return request({
    url: env.url + '/account/sms',
    method: 'post',
    data: parameter
  })
}

export function getInfo () {
  return request({
    url: env.url + '/user/info',
    method: 'get',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}

export function getCurrentUserNav () {
  return request({
    url: env.url + '/user/nav',
    method: 'get'
  })
}

export function logout () {
  return request({
    url: env.url + '/auth/logout',
    method: 'post',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}

/**
 * get user 2step code open?
 * @param parameter {*}
 */
export function get2step (parameter) {
  return request({
    url: env.url + '/auth/2step-code',
    method: 'post',
    data: parameter
  })
}
