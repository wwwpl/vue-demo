import service from '@/tools/service'

export function login ({email, password, redirectUrl}) {
  return service({
    url: '/api/login',
    method: 'post',
    withCredentials: true,
    data: {
      email,
      password,
      redirectUrl
    }
  })
}
