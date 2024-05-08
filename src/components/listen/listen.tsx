import YouTube, { YouTubeEvent } from 'react-youtube'
import './listen.css'
import { useCallback, useRef, useState } from 'react'
import reel1 from './assets/reel1.png'
import reel2 from './assets/reel2.png'
import reel3 from './assets/reel3.png'
import reel4 from './assets/reel4.png'

interface VideoData {
  title: string
  subtitle: string
  id: string
  img: string
}

const VIDEO_OPS = {
  playerVars: { autoplay: 1 },
}

const YT_LIST: VideoData[] = [
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
    subtitle: 'Directo - Sala La Trinchera (20/04/2024)',
    id: 'pyaQw3SEpv4',
    img: '/yt-min/no-me-interesa.jpg',
  },
]

const IG_LIST: VideoData[] = [
  {
    title: 'A tomar por el ojal',
    subtitle: 'Directo - Sala Barco (22/03/24)',
    img: reel1,
    id: 'https://www.instagram.com/reel/C5Ak8D0qNay/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
  },
  {
    title: 'Ladrón de mis recuerdos',
    subtitle: 'Directo - Sala Barco (22/03/24)',
    img: reel2,
    id: 'https://www.instagram.com/reel/C5EJc99KJ2o/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
  },
  {
    title: 'Nadie al volante',
    subtitle: 'Directo - Sala La Trinchera (20/04/24)',
    img: reel3,
    id: 'https://www.instagram.com/reel/C6eDG9iqX-m/?utm_source=ig_web_copy_link',
  },
  {
    title: 'A tomar por el ojal',
    subtitle: 'Directo - Sala La Trinchera (20/04/24)',
    img: reel4,
    id: 'https://www.instagram.com/reel/C6Gj71AqqGF/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
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
        <h2>Escúchanos</h2>

        <div className="videos">
          {YT_LIST.map(({ title, subtitle, img, id }) => (
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

        <div className="videos">
          {IG_LIST.map(({ title, subtitle, img, id }) => (
            <a href={id} target="_blank">
              <button className="listen-button reel-buton">
                <img src={img} alt="" />
                <div className="info-layer">
                  <h3>{title}</h3>
                  <p>{subtitle}</p>
                </div>
              </button>
            </a>
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
