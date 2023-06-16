export default {
  user: {
    token: sessionStorage.getItem('TOKEN'),
    data: {}
  },
  products: {
    loading: false,
    data: [],
    links: [],
    from: null,
    to: null,
    page: 1,
    limit: null,
    total: null
  },
  users: {
    loading: false,
    data: [],
    links: [],
    from: null,
    to: null,
    page: 1,
    limit: null,
    total: null
  },
  customers: {
    loading: false,
    data: [],
    links: [],
    from: null,
    to: null,
    page: 1,
    limit: null,
    total: null
  },
  countries: [],
  orders: {
    loading: false,
    data: [],
    links: [],
    from: null,
    to: null,
    page: 1,
    limit: null,
    total: null
  },
  toast: {
    show: false,
    message: '',
    delay: 5000
  },
  dateOptions: [
    {key: '1d', text: 'Dernier jour'},
    {key: '1k', text: 'Dernier Semaine'},
    {key: '2k', text: 'Dernier 2 Semaines'},
    {key: '1m', text: 'Denier mois'},
    {key: '3m', text: 'Denier 3 mois'},
    {key: '6m', text: 'Denier 6 mois'},
    {key: 'all', text: 'Toujours'},
  ]
}
