export const isResponseProper = (response) => {
  if (response.status >= 400 && response.status < 600) {
    return false
  } else {
    return true
  }
}

export const showResponseSnackbarError = (response, ref) => {
  ref.current.show('error', response.status + ' ' + response.statusText, 'error-info')
}

export const showResponseSnackbarSuccess = (message, ref) => {
  ref.current.show('success', message, 'success-info')
}
