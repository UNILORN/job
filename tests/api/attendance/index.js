
const test = require('ava')
const axios = require('axios')
const { _login, _attendance_start, _attendance_end } = require('../../context')
let http

require('dotenv').config()
test.before(t => {
  return axios.post(`${process.env.API_URL}/api/v1/login`, _login).then(({status, data}) => {
    http = axios.create({
      baseURL: `${process.env.API_URL}/api/v1/`,
      headers: {
        'Authorization': `Bearer ${data.token}`
      }
    })
  })
})

test('勤怠一覧取得', async t => {
  const { status } = await http.get(`/attendance`)
  t.is(status, 200)
})

test('勤怠個別取得', async t => {
  const { data } = await http.get(`/attendance`)
  const [attendance] = data.attendances
  const { status } = await http.get(`/attendance/${attendance.id}`)
  t.is(status, 200)
})

test('出勤', async t => {
  const { status } = await http.post(`/attendance/start`, _attendance_start)
  t.is(status, 200)
})

test('退勤', async t => {
  const { status } = await http.post(`/attendance/end`, _attendance_end)
  t.is(status, 200)
})
