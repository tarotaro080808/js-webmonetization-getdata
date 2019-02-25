let monetizationStart = {
  state: document.monetization && document.monetization.state,
  paymentPointer: null,
  requestId: null
}
const onMonetizationStart = ev => {
  const { paymentPointer, requestId } = ev.detail
  monetizationStart = {
    state: document.monetization.state,
    paymentPointer,
    requestId
  }
  // write something...
  console.log(monetizationStart)
}

let monetizationProgress = {
  assetCode: null,
  assetScale: null,
  totalAmount: 0
}
const onMonetizationprogress = ev => {
  const { amount, assetCode, assetScale } = ev.detail
  monetizationProgress = {
    assetCode,
    assetScale,
    totalAmount: monetizationProgress.totalAmount + Number(amount)
  }
  // write something...
  console.log(monetizationProgress)
}

document.monetization.addEventListener('monetizationstart', onMonetizationStart)
document.monetization.addEventListener('monetizationprogress', onMonetizationprogress)
