export const gender = Object.freeze({
  MALE: '0',
  FEMALE: '1',
  OTHER: '2',
})

export const PRIVACY = Object.freeze({
  PRIVATE: 1,
  PUBLIC: 0,
})

export const PRIVACY_LABEL = Object.freeze({
  [PRIVACY.PRIVATE]: 'Private',
  [PRIVACY.PUBLIC]: 'Public',
} as const)

export const PRIVACY_OPTIONS = Object.entries(PRIVACY)
  .filter(([key]) => isNaN(Number(key)))
  .map(([key, value]) => ({
    value,
    label: PRIVACY_LABEL[value],
  }))
