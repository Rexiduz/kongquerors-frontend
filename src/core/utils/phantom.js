const isPhantomInstalled = (showAlert = false) => {
  if (window.solana) {
    if (window.solana.isPhantom) {
      return true
    }
  }

  if (showAlert) {
    alert('You need to install Phantom wallet!')
  }

  return false
}

export const connectWallet = async (onlyIfTrusted = false) => {
  if (isPhantomInstalled(!onlyIfTrusted)) {
    try {
      const resp = await window.solana.connect({ onlyIfTrusted })
      const address = resp.publicKey.toString()
      return address
    } catch (err) {
      throw err
    }
  }
}
