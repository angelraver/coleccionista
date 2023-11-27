import { useRouter } from 'vue-router'
const apiURL = 'http://localhost:8080'
// const apiURL = 'https://coleccionista.rj.r.appspot.com'

function getCookie(cname: string) {
  const name = cname + '=';
  const ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return ''
}

function loggedUser() {
  const idUser = getCookie('iduser')
  if (idUser) {
    return {
      id: idUser
    }
  }
  return null
}

export function checkAutorized(that: any) {
  const user = loggedUser()
  if (that.$route.name === 'Login') {
    return
  }

  if (!user) {
    const router = useRouter()
    router.push({ name: 'Login' })
  }
  return user
}

export async function post(path: string, body: object) {
  const res = await fetch(`${apiURL}${path}`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
  const data = await res.json();
  return data
}
