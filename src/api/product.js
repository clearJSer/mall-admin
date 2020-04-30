import request from '@/utils/request'

export function getCategories() {
  return request({
    url: '/public/categories',
    method: 'get'
  })
}
export function addCategories(data) {
  return request({
    url: '/cms/categories',
    data,
    method: 'post'
  })
}
export function editCategories(data) {
  const { id } = data
  return request({
    data,
    url: '/cms/categories/' + id,
    method: 'put'
  })
}
export function deleteCategories(id) {
  return request({
    url: '/cms/categories/' + id,
    method: 'delete'
  })
}
// 商品来源管理
export function getSources() {
  return request({
    url: '/public/product-sources',
    method: 'get'
  })
}
export function addSources(data) {
  return request({
    data,
    url: '/cms/product-sources',
    method: 'post'
  })
}
export function editSources(data) {
  const { id } = data
  return request({
    url: '/cms/product-sources/' + id,
    data,
    method: 'put'
  })
}
export function deleteSources(id) {
  return request({
    url: '/cms/product-sources/' + id,
    method: 'delete'
  })
}
// 活动类型
export function getTrialType() {
  return request({
    url: '/public/trial-event-types',
    method: 'get'
  })
}
export function addTrialType(data) {
  return request({
    data,
    url: '/cms/trial-event-types',
    method: 'post'
  })
}
export function editTrialType(data) {
  const { id } = data
  return request({
    data,
    url: '/cms/trial-event-types/' + id,
    method: 'put'
  })
}
export function deleteTrialType(id) {
  return request({
    url: '/cms/trial-event-types/' + id,
    method: 'delete'
  })
}
// 试客申请条件
export function getApplicantRequirements() {
  return request({
    url: '/public/applicant-requirements',
    method: 'get'
  })
}
export function addApplicantRequirements(data) {
  return request({
    data,
    url: '/cms/applicant-requirements',
    method: 'post'
  })
}
export function editApplicantRequirements(data) {
  const { id } = data
  return request({
    data,
    url: '/cms/applicant-requirements/' + id,
    method: 'put'
  })
}
export function deleteApplicantRequirements(id) {
  return request({
    url: '/cms/applicant-requirements/' + id,
    method: 'delete'
  })
}
// 试客申请条件
export function getRedeemTime() {
  return request({
    url: '/public/trial-redeem-times',
    method: 'get'
  })
}
export function addRedeemTime(data) {
  return request({
    data,
    url: '/cms/trial-redeem-times',
    method: 'post'
  })
}
export function editRedeemTime(data) {
  const { id } = data
  return request({
    data,
    url: '/cms/trial-redeem-times/' + id,
    method: 'put'
  })
}
export function deleteRedeemTime(id) {
  return request({
    url: '/cms/trial-redeem-times/' + id,
    method: 'delete'
  })
}
// 试用商品的温馨提示
export function getWarnings() {
  return request({
    url: '/public/warnings',
    method: 'get'
  })
}
export function addWarnings(data) {
  return request({
    data,
    url: '/cms/warnings',
    method: 'post'
  })
}
export function editWarnings(data) {
  const { id } = data
  return request({
    data,
    url: '/cms/warnings/' + id,
    method: 'put'
  })
}
export function deleteWarnings(id) {
  return request({
    url: '/cms/warnings/' + id,
    method: 'delete'
  })
}
