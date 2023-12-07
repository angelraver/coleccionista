import { useRouter } from 'vue-router'
export const apiURL = import.meta.env.VITE_API_URL
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

export function loggedUser(): { id: number | null } {
  const idUser = getCookie('iduser')
  if (idUser) {
    return { id: parseInt(idUser) }
  }
  return { id: null }
}

export function checkAutorized(that: any = null) {
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

export async function get(path: string, params: (string | null)[]) {
  let route = `${apiURL}${path}`
  params.forEach(function (qparam){
    route = `${route}/${qparam}`
  })
  const res = await fetch(route, { method: "get" })
  const data = await res.json();
  return data
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

export async function put(path: string, body: object) {
  const res = await fetch(`${apiURL}${path}`, {
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
  const data = await res.json();
  return data
}

export function randomIcon(): string {
  const items: string[] = [
    'ghost',
    'pokeball',
    'pac-man',
    'one-up',
    'ocarina',
    'space-invaders',
    'star-face',
    'triforce'
  ]
  const randomIndex: number = Math.floor(Math.random() * items.length)
  return 'mdi-' + items[randomIndex]
}

export function randomColor() {
  const colors = [
    { name: 'red', hexa: '#F44336' },
    { name: 'red-lighten-5', hexa: '#FFEBEE' },
    { name: 'red-lighten-4', hexa: '#FFCDD2' },
    { name: 'red-lighten-3', hexa: '#EF9A9A' },
    { name: 'red-lighten-2', hexa: '#E57373' },
    { name: 'red-lighten-1', hexa: '#EF5350' },
    { name: 'red-darken-1', hexa: '#E53935' },
    { name: 'red-darken-2', hexa: '#D32F2F' },
    { name: 'red-darken-3', hexa: '#C62828' },
    { name: 'red-darken-4', hexa: '#B71C1C' },
    { name: 'red-accent-1', hexa: '#FF8A80' },
    { name: 'red-accent-2', hexa: '#FF5252' },
    { name: 'red-accent-3', hexa: '#FF1744' },
    { name: 'red-accent-4', hexa: '#D50000' },
    { name: 'pink', hexa: '#E91E63' },
    { name: 'pink-lighten-5', hexa: '#FCE4EC' },
    { name: 'pink-lighten-4', hexa: '#F8BBD0' },
    { name: 'pink-lighten-3', hexa: '#F48FB1' },
    { name: 'pink-lighten-2', hexa: '#F06292' },
    { name: 'pink-lighten-1', hexa: '#EC407A' },
    { name: 'pink-darken-1', hexa: '#D81B60' },
    { name: 'pink-darken-2', hexa: '#C2185B' },
    { name: 'pink-darken-3', hexa: '#AD1457' },
    { name: 'pink-darken-4', hexa: '#880E4F' },
    { name: 'pink-accent-1', hexa: '#FF80AB' },
    { name: 'pink-accent-2', hexa: '#FF4081' },
    { name: 'pink-accent-3', hexa: '#F50057' },
    { name: 'pink-accent-4', hexa: '#C51162' },
    { name: 'purple', hexa: '#9C27B0' },
    { name: 'purple-lighten-5', hexa: '#F3E5F5' },
    { name: 'purple-lighten-4', hexa: '#E1BEE7' },
    { name: 'purple-lighten-3', hexa: '#CE93D8' },
    { name: 'purple-lighten-2', hexa: '#BA68C8' },
    { name: 'purple-lighten-1', hexa: '#AB47BC' },
    { name: 'purple-darken-1', hexa: '#8E24AA' },
    { name: 'purple-darken-2', hexa: '#7B1FA2' },
    { name: 'purple-darken-3', hexa: '#6A1B9A' },
    { name: 'purple-darken-4', hexa: '#4A148C' },
    { name: 'purple-accent-1', hexa: '#EA80FC' },
    { name: 'purple-accent-2', hexa: '#E040FB' },
    { name: 'purple-accent-3', hexa: '#D500F9' },
    { name: 'purple-accent-4', hexa: '#AA00FF' },
    { name: 'deep-purple', hexa: '#673AB7' },
    { name: 'deep-purple-lighten-5', hexa: '#EDE7F6' },
    { name: 'deep-purple-lighten-4', hexa: '#D1C4E9' },
    { name: 'deep-purple-lighten-3', hexa: '#B39DDB' },
    { name: 'deep-purple-lighten-2', hexa: '#9575CD' },
    { name: 'deep-purple-lighten-1', hexa: '#7E57C2' },
    { name: 'deep-purple-darken-1', hexa: '#5E35B1' },
    { name: 'deep-purple-darken-2', hexa: '#512DA8' },
    { name: 'deep-purple-darken-3', hexa: '#4527A0' },
    { name: 'deep-purple-darken-4', hexa: '#311B92' },
    { name: 'deep-purple-accent-1', hexa: '#B388FF' },
    { name: 'deep-purple-accent-2', hexa: '#7C4DFF' },
    { name: 'deep-purple-accent-3', hexa: '#651FFF' },
    { name: 'deep-purple-accent-4', hexa: '#6200EA' },
    { name: 'indigo', hexa: '#3F51B5' },
    { name: 'indigo-lighten-5', hexa: '#E8EAF6' },
    { name: 'indigo-lighten-4', hexa: '#C5CAE9' },
    { name: 'indigo-lighten-3', hexa: '#9FA8DA' },
    { name: 'indigo-lighten-2', hexa: '#7986CB' },
    { name: 'indigo-lighten-1', hexa: '#5C6BC0' },
    { name: 'indigo-darken-1', hexa: '#3949AB' },
    { name: 'indigo-darken-2', hexa: '#303F9F' },
    { name: 'indigo-darken-3', hexa: '#283593' },
    { name: 'indigo-darken-4', hexa: '#1A237E' },
    { name: 'indigo-accent-1', hexa: '#8C9EFF' },
    { name: 'indigo-accent-2', hexa: '#536DFE' },
    { name: 'indigo-accent-3', hexa: '#3D5AFE' },
    { name: 'indigo-accent-4', hexa: '#304FFE' },
    { name: 'blue', hexa: '#2196F3' },
    { name: 'blue-lighten-5', hexa: '#E3F2FD' },
    { name: 'blue-lighten-4', hexa: '#BBDEFB' },
    { name: 'blue-lighten-3', hexa: '#90CAF9' },
    { name: 'blue-lighten-2', hexa: '#64B5F6' },
    { name: 'blue-lighten-1', hexa: '#42A5F5' },
    { name: 'blue-darken-1', hexa: '#1E88E5' },
    { name: 'blue-darken-2', hexa: '#1976D2' },
    { name: 'blue-darken-3', hexa: '#1565C0' },
    { name: 'blue-darken-4', hexa: '#0D47A1' },
    { name: 'blue-accent-1', hexa: '#82B1FF' },
    { name: 'blue-accent-2', hexa: '#448AFF' },
    { name: 'blue-accent-3', hexa: '#2979FF' },
    { name: 'blue-accent-4', hexa: '#2962FF' },
    { name: 'light-blue', hexa: '#03A9F4' },
    { name: 'light-blue-lighten-5', hexa: '#E1F5FE' },
    { name: 'light-blue-lighten-4', hexa: '#B3E5FC' },
    { name: 'light-blue-lighten-3', hexa: '#81D4FA' },
    { name: 'light-blue-lighten-2', hexa: '#4FC3F7' },
    { name: 'light-blue-lighten-1', hexa: '#29B6F6' },
    { name: 'light-blue-darken-1', hexa: '#039BE5' },
    { name: 'light-blue-darken-2', hexa: '#0288D1' },
    { name: 'light-blue-darken-3', hexa: '#0277BD' },
    { name: 'light-blue-darken-4', hexa: '#01579B' },
    { name: 'light-blue-accent-1', hexa: '#80D8FF' },
    { name: 'light-blue-accent-2', hexa: '#40C4FF' },
    { name: 'light-blue-accent-3', hexa: '#00B0FF' },
    { name: 'light-blue-accent-4', hexa: '#0091EA' },
    { name: 'cyan', hexa: '#00BCD4' },
    { name: 'cyan-lighten-5', hexa: '#E0F7FA' },
    { name: 'cyan-lighten-4', hexa: '#B2EBF2' },
    { name: 'cyan-lighten-3', hexa: '#80DEEA' },
    { name: 'cyan-lighten-2', hexa: '#4DD0E1' },
    { name: 'cyan-lighten-1', hexa: '#26C6DA' },
    { name: 'cyan-darken-1', hexa: '#00ACC1' },
    { name: 'cyan-darken-2', hexa: '#0097A7' },
    { name: 'cyan-darken-3', hexa: '#00838F' },
    { name: 'cyan-darken-4', hexa: '#006064' },
    { name: 'cyan-accent-1', hexa: '#84FFFF' },
    { name: 'cyan-accent-2', hexa: '#18FFFF' },
    { name: 'cyan-accent-3', hexa: '#00E5FF' },
    { name: 'cyan-accent-4', hexa: '#00B8D4' },
    { name: 'teal', hexa: '#009688' },
    { name: 'teal-lighten-5', hexa: '#E0F2F1' },
    { name: 'teal-lighten-4', hexa: '#B2DFDB' },
    { name: 'teal-lighten-3', hexa: '#80CBC4' },
    { name: 'teal-lighten-2', hexa: '#4DB6AC' },
    { name: 'teal-lighten-1', hexa: '#26A69A' },
    { name: 'teal-darken-1', hexa: '#00897B' },
    { name: 'teal-darken-2', hexa: '#00796B' },
    { name: 'teal-darken-3', hexa: '#00695C' },
    { name: 'teal-darken-4', hexa: '#004D40' },
    { name: 'teal-accent-1', hexa: '#A7FFEB' },
    { name: 'teal-accent-2', hexa: '#64FFDA' },
    { name: 'teal-accent-3', hexa: '#1DE9B6' },
    { name: 'teal-accent-4', hexa: '#00BFA5' },
    { name: 'green', hexa: '#4CAF50' },
    { name: 'green-lighten-5', hexa: '#E8F5E9' },
    { name: 'green-lighten-4', hexa: '#C8E6C9' },
    { name: 'green-lighten-3', hexa: '#A5D6A7' },
    { name: 'green-lighten-2', hexa: '#81C784' },
    { name: 'green-lighten-1', hexa: '#66BB6A' },
    { name: 'green-darken-1', hexa: '#43A047' },
    { name: 'green-darken-2', hexa: '#388E3C' },
    { name: 'green-darken-3', hexa: '#2E7D32' },
    { name: 'green-darken-4', hexa: '#1B5E20' },
    { name: 'green-accent-1', hexa: '#B9F6CA' },
    { name: 'green-accent-2', hexa: '#69F0AE' },
    { name: 'green-accent-3', hexa: '#00E676' },
    { name: 'green-accent-4', hexa: '#00C853' },
    { name: 'light-green', hexa: '#8BC34A' },
    { name: 'light-green-lighten-5', hexa: '#F1F8E9' },
    { name: 'light-green-lighten-4', hexa: '#DCEDC8' },
    { name: 'light-green-lighten-3', hexa: '#C5E1A5' },
    { name: 'light-green-lighten-2', hexa: '#AED581' },
    { name: 'light-green-lighten-1', hexa: '#9CCC65' },
    { name: 'light-green-darken-1', hexa: '#7CB342' },
    { name: 'light-green-darken-2', hexa: '#689F38' },
    { name: 'light-green-darken-3', hexa: '#558B2F' },
    { name: 'light-green-darken-4', hexa: '#33691E' },
    { name: 'light-green-accent-1', hexa: '#CCFF90' },
    { name: 'light-green-accent-2', hexa: '#B2FF59' },
    { name: 'light-green-accent-3', hexa: '#76FF03' },
    { name: 'light-green-accent-4', hexa: '#64DD17' },
    { name: 'lime', hexa: '#CDDC39' },
    { name: 'lime-lighten-5', hexa: '#F9FBE7' },
    { name: 'lime-lighten-4', hexa: '#F0F4C3' },
    { name: 'lime-lighten-3', hexa: '#E6EE9C' },
    { name: 'lime-lighten-2', hexa: '#DCE775' },
    { name: 'lime-lighten-1', hexa: '#D4E157' },
    { name: 'lime-darken-1', hexa: '#C0CA33' },
    { name: 'lime-darken-2', hexa: '#AFB42B' },
    { name: 'lime-darken-3', hexa: '#9E9D24' },
    { name: 'lime-darken-4', hexa: '#827717' },
    { name: 'lime-accent-1', hexa: '#F4FF81' },
    { name: 'lime-accent-2', hexa: '#EEFF41' },
    { name: 'lime-accent-3', hexa: '#C6FF00' },
    { name: 'lime-accent-4', hexa: '#AEEA00' },
    { name: 'yellow', hexa: '#FFEB3B' },
    { name: 'yellow-lighten-5', hexa: '#FFFDE7' },
    { name: 'yellow-lighten-4', hexa: '#FFF9C4' },
    { name: 'yellow-lighten-3', hexa: '#FFF59D' },
    { name: 'yellow-lighten-2', hexa: '#FFF176' },
    { name: 'yellow-lighten-1', hexa: '#FFEE58' },
    { name: 'yellow-darken-1', hexa: '#FDD835' },
    { name: 'yellow-darken-2', hexa: '#FBC02D' },
    { name: 'yellow-darken-3', hexa: '#F9A825' },
    { name: 'yellow-darken-4', hexa: '#F57F17' },
    { name: 'yellow-accent-1', hexa: '#FFFF8D' },
    { name: 'yellow-accent-2', hexa: '#FFFF00' },
    { name: 'yellow-accent-3', hexa: '#FFEA00' },
    { name: 'yellow-accent-4', hexa: '#FFD600' },
    { name: 'amber', hexa: '#FFC107' },
    { name: 'amber-lighten-5', hexa: '#FFF8E1' },
    { name: 'amber-lighten-4', hexa: '#FFECB3' },
    { name: 'amber-lighten-3', hexa: '#FFE082' },
    { name: 'amber-lighten-2', hexa: '#FFD54F' },
    { name: 'amber-lighten-1', hexa: '#FFCA28' },
    { name: 'amber-darken-1', hexa: '#FFB300' },
    { name: 'amber-darken-2', hexa: '#FFA000' },
    { name: 'amber-darken-3', hexa: '#FF8F00' },
    { name: 'amber-darken-4', hexa: '#FF6F00' },
    { name: 'amber-accent-1', hexa: '#FFE57F' },
    { name: 'amber-accent-2', hexa: '#FFD740' },
    { name: 'amber-accent-3', hexa: '#FFC400' },
    { name: 'amber-accent-4', hexa: '#FFAB00' },
    { name: 'orange', hexa: '#FF9800' },
    { name: 'orange-lighten-5', hexa: '#FFF3E0' },
    { name: 'orange-lighten-4', hexa: '#FFE0B2' },
    { name: 'orange-lighten-3', hexa: '#FFCC80' },
    { name: 'orange-lighten-2', hexa: '#FFB74D' },
    { name: 'orange-lighten-1', hexa: '#FFA726' },
    { name: 'orange-darken-1', hexa: '#FB8C00' },
    { name: 'orange-darken-2', hexa: '#F57C00' },
    { name: 'orange-darken-3', hexa: '#EF6C00' },
    { name: 'orange-darken-4', hexa: '#E65100' },
    { name: 'orange-accent-1', hexa: '#FFD180' },
    { name: 'orange-accent-2', hexa: '#FFAB40' },
    { name: 'orange-accent-3', hexa: '#FF9100' },
    { name: 'orange-accent-4', hexa: '#FF6D00' },
    { name: 'deep-orange', hexa: '#FF5722' },
    { name: 'deep-orange-lighten-5', hexa: '#FBE9E7' },
    { name: 'deep-orange-lighten-4', hexa: '#FFCCBC' },
    { name: 'deep-orange-lighten-3', hexa: '#FFAB91' },
    { name: 'deep-orange-lighten-2', hexa: '#FF8A65' },
    { name: 'deep-orange-lighten-1', hexa: '#FF7043' },
    { name: 'deep-orange-darken-1', hexa: '#F4511E' },
    { name: 'deep-orange-darken-2', hexa: '#E64A19' },
    { name: 'deep-orange-darken-3', hexa: '#D84315' },
    { name: 'deep-orange-darken-4', hexa: '#BF360C' },
    { name: 'deep-orange-accent-1', hexa: '#FF9E80' },
    { name: 'deep-orange-accent-2', hexa: '#FF6E40' },
    { name: 'deep-orange-accent-3', hexa: '#FF3D00' },
    { name: 'deep-orange-accent-4', hexa: '#DD2C00' },
    { name: 'brown', hexa: '#795548' },
    { name: 'brown-lighten-5', hexa: '#EFEBE9' },
    { name: 'brown-lighten-4', hexa: '#D7CCC8' },
    { name: 'brown-lighten-3', hexa: '#BCAAA4' },
    { name: 'brown-lighten-2', hexa: '#A1887F' },
    { name: 'brown-lighten-1', hexa: '#8D6E63' },
    { name: 'brown-darken-1', hexa: '#6D4C41' },
    { name: 'brown-darken-2', hexa: '#5D4037' },
    { name: 'brown-darken-3', hexa: '#4E342E' },
    { name: 'brown-darken-4', hexa: '#3E2723' },
    { name: 'blue-grey', hexa: '#607D8B' },
    { name: 'blue-grey-lighten-5', hexa: '#ECEFF1' },
    { name: 'blue-grey-lighten-4', hexa: '#CFD8DC' },
    { name: 'blue-grey-lighten-3', hexa: '#B0BEC5' },
    { name: 'blue-grey-lighten-2', hexa: '#90A4AE' },
    { name: 'blue-grey-lighten-1', hexa: '#78909C' },
    { name: 'blue-grey-darken-1', hexa: '#546E7A' },
    { name: 'blue-grey-darken-2', hexa: '#455A64' },
    { name: 'blue-grey-darken-3', hexa: '#37474F' },
    { name: 'blue-grey-darken-4', hexa: '#263238' },
    { name: 'grey', hexa: '#9E9E9E' },
    { name: 'grey-lighten-5', hexa: '#FAFAFA' },
    { name: 'grey-lighten-4', hexa: '#F5F5F5' },
    { name: 'grey-lighten-3', hexa: '#EEEEEE' },
    { name: 'grey-lighten-2', hexa: '#E0E0E0' },
    { name: 'grey-lighten-1', hexa: '#BDBDBD' },
    { name: 'grey-darken-1', hexa: '#757575' },
    { name: 'grey-darken-2', hexa: '#616161' },
    { name: 'grey-darken-3', hexa: '#424242' },
    { name: 'grey-darken-4', hexa: '#212121' }
  ];

  const randomIndex: number = Math.floor(Math.random() * colors.length)
  return colors[randomIndex]
}