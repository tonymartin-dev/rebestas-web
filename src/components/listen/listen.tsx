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
    title: 'Vida Normal',
    subtitle: 'Videoclip Oficial',
    id: 'RD_C2UDD2p4rw',
    img: '/yt-min/vida-normal.png',
  },
  {
    title: 'Reb\'n\'taos',
    subtitle: 'Directo - Pub Grace O\'Malley (22/02/2025)',
    id: 'zZy72GgnZdw',
    img: '/yt-min/reb-n-taos.png',
  },
  {
    title: 'Resumen de concierto',
    subtitle: 'Directo - Taberna Kanalla (10/05/2025)',
    id: '1yVuZhjDXCE',
    img: '/yt-min/kanalla.png',
  },
]

const IG_LIST: VideoData[] = [
  {
    title: 'Nadie al volante',
    subtitle: 'Directo  Desde el local de ensayo',
    img: reel1,
    id: 'DIbSXw-o7g2',
  },
  {
    title: 'Reb\'n\'taos',
    subtitle: 'Directo - Taberna Kanalla (10/05/2025)',
    img: reel2,
    id: 'DKHYEj0I1no',
  },
  {
    title: 'Amigas tóxicas',
    subtitle: 'Directo - Sonic Boom (01/06/2025)',
    img: reel3,
    id: 'DKhlLtqooGX',
  },
  {
    title: 'Reb\'n\'taos',
    subtitle: 'Directo - Pub Grace O\'Malley (22/02/2025)',
    img: reel4,
    id: 'DGyVMAatvqE',
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
            <a href={`https://www.instagram.com/reel/${id}`} target="_blank">
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
