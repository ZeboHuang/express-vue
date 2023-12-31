import request from '@/utils/request'
import axios from 'axios'

// 按照页码和页大小获取用户列表

export function queryList(delivery) {
  return request({
    url: '/delivery',
    method: 'post',
    jsonData: true,
    data: delivery
  })
}

export function editOrder(order) {
  return request({
    url: '/delivery/edit',
    method: 'post',
    jsonData: true,
    data: order
  })
}

// export function deleteoneStation(id) {
//   return request({
//     url: '/station/deleteone',
//     method: 'post',
//     jsonData: true,
//     data: id
//   })
// }
// export function deletemanyStation(ids) {
//   return request({
//     url: '/station/deletemany',
//     method: 'post',
//     jsonData: true,
//     data: ids
//   })
// }
// export function queryUsers(pageParams, user) {
//   return request({
//     url: '/user/query',
//     method: 'post',
//     // jsonData: true, // 添加jsonData content-type: application/json 向后端請求
//     jsonData: true,
//     params: {
//       pageParams: pageParams,
//       user: user
//     }
//   })
// }
