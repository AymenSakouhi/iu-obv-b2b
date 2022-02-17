const kameleoonLoadingTimeout = 1000

// eslint-disable-next-line no-undef
window.Modernizr = Modernizr
window.kameleoonQueue = window.kameleoonQueue || []
window.kameleoonStartLoadTime = new Date().getTime()

// eslint-disable-next-line no-unused-vars
window.kameleoonSetAntiFlicker = () => {
  if (!document.getElementById('kameleoonLoadingStyleSheet') && !window.kameleoonDisplayPageTimeOut) {
    const kameleoonS = document.getElementsByTagName('script')[0]
    const kameleoonCc = '* { visibility: hidden !important; background-image: none !important; }'
    const kameleoonStn = document.createElement('style')
    kameleoonStn.type = 'text/css'
    kameleoonStn.id = 'kameleoonLoadingStyleSheet'

    if (kameleoonStn.styleSheet) {
      kameleoonStn.styleSheet.cssText = kameleoonCc
    } else {
      kameleoonStn.appendChild(document.createTextNode(kameleoonCc))
    }

    kameleoonS.parentNode.insertBefore(kameleoonStn, kameleoonS)
    window.kameleoonDisplayPage = function (fromEngine) {
      if (!fromEngine) {
        window.kameleoonTimeout = true
      }
      if (kameleoonStn.parentNode) {
        kameleoonStn.parentNode.removeChild(kameleoonStn)
      }
    }

    window.kameleoonDisplayPageTimeOut = window.setTimeout(window.kameleoonDisplayPage, kameleoonLoadingTimeout)
  }
}

// eslint-disable-next-line no-unused-vars
window.kameleoonIncludeScript = (propertyId) => {
  var includeKameleoonScript = document.createElement('script')
  includeKameleoonScript.setAttribute('type', 'text/javascript')
  includeKameleoonScript.setAttribute('src', '//' + propertyId + '.kameleoon.eu/kameleoon.js')
  includeKameleoonScript.setAttribute('name', 'kameleoon-script')
  includeKameleoonScript.setAttribute('async', '')
  document.getElementsByTagName('head')[0].appendChild(includeKameleoonScript)
}

// eslint-disable-next-line no-unused-vars
window.kameleoonSetLegalConsent = (localStorageId, consentId, usercentrics) => {
  const storage =
    typeof usercentrics !== 'undefined' &&
  localStorageId !== null &&
  JSON.parse(localStorage.getItem('ucSettings')) !== null
      ? JSON.parse(localStorage.getItem('ucSettings'))[localStorageId].usercentrics.firstUserInteraction.stateSaved
      : false

  const isCheckingRequired = window.Modernizr.localstorage && storage

  checkConsentStatus(isCheckingRequired, consentId, usercentrics)
}

let checkedConsentStatus = 0

const checkConsentStatus = (isCheckingRequired, consentId, usercentrics) => {
  try {
    checkedConsentStatus++
    const isKameleoonUndefined = typeof Kameleoon !== 'undefined'
    // eslint-disable-next-line no-undef
    const hasPersonalizedLegalConsent = Kameleoon.API.Visitor.personalizationLegalConsent === null

    if (isCheckingRequired && isKameleoonUndefined && hasPersonalizedLegalConsent) {
      const consentStatus = usercentrics.getConsents(consentId).consentStatus
      // eslint-disable-next-line no-undef
      consentStatus ? Kameleoon.API.Core.enableLegalConsent() : Kameleoon.API.Core.disableLegalConsent()
    } else {
      callSelfIfNecessary(isCheckingRequired, consentId, usercentrics)
    }
  } catch (e) {
    callSelfIfNecessary(isCheckingRequired, consentId, usercentrics)
  }
}

const callSelfIfNecessary = (isCheckingRequired, consentId, usercentrics) => {
  if (checkedConsentStatus < 10) {
    setTimeout(() => {
      checkConsentStatus(isCheckingRequired, consentId, usercentrics)
    }, 1000)
  }
}
