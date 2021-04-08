import http from '@/api/http-common.js'

class StyleCodeService {
  getAll() {
    return http.get('/style-codes')
  }

  get(id) {
    return http.get(`/style-codes/${id}`)
  }

  create(data) {
    console.log(data)
    return http.post('/style-codes', data)
  }

  update(id, data) {
    return http.put(`/style-codes/${id}`, data)
  }

  delete(id) {
    return http.delete(`/style-codes/${id}`)
  }

  deleteAll() {
    return http.delete('/style-codes')
  }

  // findByName(name) {
  //   return http.get(`/style-codes?name=${name}`)
  // }
}
export default new StyleCodeService()
