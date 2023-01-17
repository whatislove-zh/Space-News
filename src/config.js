const BASE_URL = "https://api.spaceflightnewsapi.net/v3/articles"

export const ALL_POSTS = BASE_URL + "?_limit=100"

export const searchPostById = (id) => BASE_URL + `/${id}`

