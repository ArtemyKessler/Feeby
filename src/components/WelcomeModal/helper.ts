export const STORAGE_BASE_KEY = 'FEEBY'

export const isVisitedKey = 'isWelcomeModalVisited'

export const selectIsVisited = () => {
  const value = localStorage.getItem(`${STORAGE_BASE_KEY}::${isVisitedKey}`)
  console.log('value', value)
  if (value) {
    return JSON.parse(value)
  } else {
    return false
  }
}

export const saveIsVisited = (check: boolean) => {
  localStorage.setItem(
    `${STORAGE_BASE_KEY}::${isVisitedKey}`,
    JSON.stringify(check)
  )
}
