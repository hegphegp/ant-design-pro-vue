import { needPermissionRoutes, noNeedPermissionRoutes } from '@/config/router.config'

/**
 * 过滤账户是否拥有某一个权限，并将菜单从加载列表移除
 *
 * @param permission
 * @param route
 * @returns {boolean}
 */
function hasPermission (permission, route) {
  if (route.meta && route.meta.permission) {
    let flag = false
    for (let i = 0, len = permission.length; i < len; i++) {
      flag = route.meta.permission.includes(permission[i])
      if (flag) {
        return true
      }
    }
    return false
  }
  return true
}

/**
 * 单账户多角色时，使用该方法可过滤角色不存在的菜单
 *
 * @param roles
 * @param route
 * @returns {*}
 */
// eslint-disable-next-line
function hasRole(roles, route) {
  if (route.meta && route.meta.roles) {
    return route.meta.roles.includes(roles.id)
  } else {
    return true
  }
}

function filterAsyncRouter (routers, roles) {
  const accessedRouters = routers.filter(route => {
    if (hasPermission(roles.permissionList, route)) {
      if (route.children && route.children.length) {
        route.children = filterAsyncRouter(route.children, roles)
      }
      return true
    }
    return false
  })
  return accessedRouters
}

const permission = {
  state: {
    routers: noNeedPermissionRoutes,
    addRouters: []
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
      state.routers = noNeedPermissionRoutes.concat(routers)
    }
  },
  actions: {
    GenerateRoutes ({ commit }, data) {
      return new Promise(resolve => {
        const { roles } = data
        // 后端返回的肯定是构建好的菜单树，在这里把component封装到菜单树里面，不要ant-design-vue-pro的逻辑，太鸡肘了
        const accessedRouters = filterAsyncRouter(needPermissionRoutes, roles)
        commit('SET_ROUTERS', accessedRouters)
        resolve()
      })
    }
  }
}

export default permission
