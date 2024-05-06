import YouTube, { YouTubeEvent } from 'react-youtube'
import './listen.css'
import { useCallback, useRef, useState } from 'react'

const VIDEO_OPS = {
  playerVars: { autoplay: 1 },
}

const VIDEO_LIST = [
  {
    title: 'Miedo',
    subtitle: 'Videolyric',
    id: 'Mc8M4EI5G2U',
    img: '/yt-min/miedo.jpg',
  },
  {
    title: 'Ladrón de mis recuerdos',
    subtitle: 'Directo desde local (23/02/2024)',
    id: 'GRgzb3E-oDU',
    img: '/yt-min/ladron.jpg',
  },
  {
    title: 'No me interesa',
    subtitle: 'Directo (20/04/2024)',
    id: 'pyaQw3SEpv4',
    img: '/yt-min/no-me-interesa.jpg',
  },
]

export default function Listen() {
  const [selectedVideo, setSelectedVideo] = useState<string>()

  const dialogRef = useRef<HTMLDialogElement>(null)

  const closeDialog = useCallback(() => {
    if (ytRef) {
      ytRef.stopVideo()
    }
    setSelectedVideo(undefined)
    dialogRef.current?.close()
  }, [dialogRef])

  let ytRef: YouTubeEvent['target'] | undefined

  return (
    <>
      <section id="listen">
        <h1>Escúchanos</h1>

        <div className="videos">
          {VIDEO_LIST.map(({ title, subtitle, img, id }) => (
            <button
              className="listen-button"
              onClick={() => {
                setSelectedVideo(id)
                dialogRef.current?.showModal()
              }}
            >
              <img src={img} alt="" />
              <div className="info-layer">
                <h2>{title}</h2>
                <p>{subtitle}</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      <dialog ref={dialogRef}>
        <div className="dialog-content">
          <header className="dialog-header">
            <button onClick={closeDialog}>X</button>
          </header>
          {selectedVideo && (
            <YouTube
              videoId={selectedVideo}
              opts={VIDEO_OPS}
              onReady={(e) => (ytRef = e.target)}
            ></YouTube>
          )}
        </div>
      </dialog>
    </>
  )
}
