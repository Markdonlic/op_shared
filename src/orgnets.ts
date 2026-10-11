// # orgnet account status
export const orgnetAccountStatus = Object.freeze({
  DELETED: 0,
  ACTIVE: 1,
  SUSPENDED: 2,
  PENDING: 3,
})

// # General orgnet account category database columns constants
export const orgnetCategory = Object.freeze({
  PERSONAL: 0,
  BUSINESS: 1,
  EDUCATION: 2,
  COMMUNITY: 3,
  NONPROFIT: 4,
  GOVERNMENT: 5,
  PROFESSIONAL: 6,
  RELIGIOUS: 7,
  POLITICAL: 8,
  SOCIAL: 9,
  OTHER: 10,
} as const)

export const orgnetCategoryLabel = Object.freeze({
  [orgnetCategory.PERSONAL]: 'Personal',
  [orgnetCategory.BUSINESS]: 'Business',
  [orgnetCategory.EDUCATION]: 'Education',
  [orgnetCategory.COMMUNITY]: 'Community',
  [orgnetCategory.NONPROFIT]: 'Nonprofit',
  [orgnetCategory.GOVERNMENT]: 'Government',
  [orgnetCategory.PROFESSIONAL]: 'Professional',
  [orgnetCategory.RELIGIOUS]: 'Religious',
  [orgnetCategory.POLITICAL]: 'Political',
  [orgnetCategory.SOCIAL]: 'Social',
  [orgnetCategory.OTHER]: 'Other',
} as const)

// # orgnet role
export const orgnetRole = Object.freeze({
  MEMBER: 0,
  ADMIN: 1,
} as const)

export const orgnetRoleLabel = Object.freeze({
  [orgnetRole.MEMBER]: 'Member',
  [orgnetRole.ADMIN]: 'Admin',
} as const)

// # privacy options
export const orgnetPrivacy = Object.freeze({
  PRIVATE: 1,
  PUBLIC: 0,
})

export const orgnetCategoryOptions = Object.entries(orgnetCategory)
  .filter(([key]) => isNaN(Number(key)))
  .map(([key, value]) => ({
    value,
    label: orgnetCategoryLabel[value],
  }))

export type OrgnetCategoryType =
  (typeof orgnetCategory)[keyof typeof orgnetCategory]
