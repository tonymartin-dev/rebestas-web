import YouTube from 'react-youtube'
import './listen.css'
import { useCallback, useRef } from 'react'

const VIDEO_OPS = {
  playerVars: {},
}

export default function Listen() {
  const dialogRef = useRef<HTMLDialogElement>(null)

  const closeDialog = useCallback(() => {
    dialogRef.current?.close()
  }, [dialogRef])

  let ytRef

  return (
    <>
      <section id="listen">
        <h1>Escúchanos</h1>

        <button onClick={() => dialogRef.current?.showModal()}>Modal</button>
      </section>

      <dialog ref={dialogRef}>
        <header className="dialog-header">
          <button onClick={() => dialogRef.current?.close()}>X</button>
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
