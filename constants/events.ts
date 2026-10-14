export const EVENT_STATUS = Object.freeze({
  DRAFT: 0,
  UPCOMING: 1,
  ONGOING: 2,
  COMPLETED: 3,
  CANCELLED: 4,
} as const)

export const EVENT_CATEGORY = Object.freeze({
  MEETING: 0,
  TRAINING: 1,
  CONFERENCE: 2,
  ELECTION: 3,
  FUNDRAISER: 4,
  SOCIAL: 5,
  CELEBRATION: 6,
  MEMORIAL: 7,
  RELIGIOUS: 8,
  COMMUNITY: 9,
  SPORTS: 10,
  OTHER: 11,
} as const)

export const EVENT_CATEGORY_LABEL = Object.freeze({
  [EVENT_CATEGORY.MEETING]: 'Meeting',
  [EVENT_CATEGORY.TRAINING]: 'Training / Seminar',
  [EVENT_CATEGORY.CONFERENCE]: 'Conference',
  [EVENT_CATEGORY.ELECTION]: 'Election',
  [EVENT_CATEGORY.FUNDRAISER]: 'Fundraiser',
  [EVENT_CATEGORY.SOCIAL]: 'Social Event',
  [EVENT_CATEGORY.CELEBRATION]: 'Celebration',
  [EVENT_CATEGORY.MEMORIAL]: 'Memorial / Burial',
  [EVENT_CATEGORY.RELIGIOUS]: 'Religious Event',
  [EVENT_CATEGORY.COMMUNITY]: 'Community Service',
  [EVENT_CATEGORY.SPORTS]: 'Sports / Competition',
  [EVENT_CATEGORY.OTHER]: 'Other',
} as const)

export const EVENT_CATEGORY_OPTIONS = Object.entries(EVENT_CATEGORY)
  .filter(([key]) => isNaN(Number(key)))
  .map(([key, value]) => ({
    value,
    label: EVENT_CATEGORY_LABEL[value],
  }))
