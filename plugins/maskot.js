// Maskot 3D Widget — client-only plugin
// Loads after page is ready, integrates with existing Jivo Chat

export default function() {
  if (process.server) return

  // Inject CSS
  const link = document.createElement('link')
  link.rel = 'stylesheet'
  link.href = '/css/maskot.css'
  document.head.appendChild(link)

  // Load UMD bundle, then init after browser is idle
  const script = document.createElement('script')
  script.src = '/js/maskot.umd.js'
  script.async = true
  script.onload = function() {
    const init = function() {
      const maskot = window.Maskot.createMaskot({
        modelUrl: '/models/New_fin_all.glb',
        zIndex: 9000,
      })

      // Интеграция с Jivo Chat (уже подключён в nuxt.config.js)
      window.jivo_onOpen = function() {
        maskot.chatOpened()
      }
      window.jivo_onClose = function() {
        maskot.chatClosed()
      }

      // Клик по маскоту → открыть Jivo
      maskot.on('click', function() {
        if (window.jivo_api) {
          window.jivo_api.open()
        }
      })
    }

    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(init)
    } else {
      setTimeout(init, 300)
    }
  }
  document.body.appendChild(script)
}
