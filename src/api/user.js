import service from '@/tools/service'

export function login ({ email, password }) {
  return service({
    url: '/api/login',
    method: 'post',
    data: {
      email,
      password
    }
  })
}
