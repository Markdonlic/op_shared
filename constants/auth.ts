// # General OTP database columns constants
export const otpTypes = Object.freeze({
  UNKNOWN: 0,
  SIGN_UP: 1,
  LOGIN: 2,
  CHANGE: 3,
  RESET_PASSWORD: 4,
  DELETE: 5,
  VERIFY: 6,
})

// AUTHENTICATION
export const signUpOtpSendStatus = Object.freeze({
  PENDING: 0,
  SENT: 1,
  FAILED: 2,
  REVOKED: 3,
})

export const signUpOtpStatus = Object.freeze({
  UNUSED: 0,
  USED: 1,
  REVOKED: 2,
})

export const tokenStatus = Object.freeze({
  REVOKED: 0,
  ACTIVE: 1,
})

export const accountStatus = Object.freeze({
  SUSPENDED: 0,
  ACTIVE: 1,
  DELETED: 2,
})
