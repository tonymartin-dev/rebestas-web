import './social-media-links.css'
import igLogo from './assets/ig.svg'
import ytLogo from './assets/yt.svg'
import tkLogo from './assets/tiktok.svg'
import spotifyLogo from './assets/spotify.svg'

export default function SocialMediaLinks({ bigIcons }: { bigIcons?: boolean }) {
  const sizeClassName = bigIcons ? ' big-icons' : ''
  return (
    <ul className={`social-media-list${sizeClassName}`}>
      <li>
        <a href="https://www.instagram.com/rebestas/" target="_blank">
          <img src={igLogo} alt="instagram" />
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com/@rebestas" target="_blank">
          <img src={ytLogo} alt="youtube" />
        </a>
      </li>
      <li>
        <a href="https://www.tiktok.com/@rebestas" target="_blank">
          <img src={tkLogo} alt="tiktok" />
        </a>
      </li>
      <li>
        <a
          href="https://open.spotify.com/artist/5RrYXxTnr6uMU2p8TQbIAS"
          target="_blank"
        >
          <img src={spotifyLogo} alt="spotify" />
        </a>
      </li>
    </ul>
  )
}
