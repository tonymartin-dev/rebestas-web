import YouTube, { YouTubeEvent } from 'react-youtube'
import './listen.css'
import { useCallback, useRef } from 'react'

const VIDEO_OPS = {
  playerVars: {},
}

export default function Listen() {
  const dialogRef = useRef<HTMLDialogElement>(null)

  const closeDialog = useCallback(() => {
    console.log('Closing 2', { ytRef, dialogRef: dialogRef.current })

    ytRef.stopVideo()
    dialogRef.current?.close()
  }, [dialogRef])

  let ytRef: YouTubeEvent['target']

  return (
    <>
      <section id="listen">
        <h1>Escúchanos</h1>

        <button onClick={() => dialogRef.current?.showModal()}>Miedo</button>
      </section>

      <dialog ref={dialogRef}>
        <header className="dialog-header">
          <button onClick={closeDialog}>X</button>
        </header>

        <YouTube
          videoId="Mc8M4EI5G2U"
          opts={VIDEO_OPS}
          onReady={(e) => (ytRef = e.target)}
        ></YouTube>
      </dialog>
    </>
  )
}
