import { useEffect } from 'react'
import { Crisp } from 'crisp-sdk-web'

const CRISP_WEBSITE_ID = '78c4096a-d3a0-48aa-864b-dc83b7471b54'

export default function CrispChat() {
  useEffect(() => {
    Crisp.configure(CRISP_WEBSITE_ID)
  }, [])

  return null
}
