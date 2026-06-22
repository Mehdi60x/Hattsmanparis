export function SearchIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.4" y2="16.4" />
    </svg>
  )
}

export function UserIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" />
    </svg>
  )
}

export function BagIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path d="M6 8h12l-1 13H7L6 8z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
    </svg>
  )
}

export function HeartIcon({ filled, ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.5" {...props}>
      <path d="M12 20.5s-7.5-4.6-9.8-9C.7 8 1.8 4.5 5 3.4c2.1-.7 4.2.1 5.5 1.9l1.5 2 1.5-2c1.3-1.8 3.4-2.6 5.5-1.9 3.2 1.1 4.3 4.6 2.8 8.1-2.3 4.4-9.8 9-9.8 9z" />
    </svg>
  )
}

export function ChevronIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <polyline points="9 6 15 12 9 18" />
    </svg>
  )
}

export function CloseIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <line x1="5" y1="5" x2="19" y2="19" />
      <line x1="19" y1="5" x2="5" y2="19" />
    </svg>
  )
}

export function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="16" height="16" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function PinterestIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="16" height="16" {...props}>
      <circle cx="12" cy="12" r="9.5" />
      <path d="M9.5 18c1-3.5 1.6-6 2.2-8.4.5-2 3.6-2 4 .2.3 1.6-.6 4.3-2.6 4.3-1 0-1.6-.6-1.4-1.7" />
      <path d="M11 11.5c-.4 1.8-1 4-1.6 6" />
    </svg>
  )
}

export function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="16" height="16" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <line x1="7.5" y1="10" x2="7.5" y2="16.5" />
      <circle cx="7.5" cy="7" r="0.8" fill="currentColor" stroke="none" />
      <path d="M11.5 16.5V10" />
      <path d="M11.5 12.8c0-1.5 1.2-2.3 2.4-2.3 1.4 0 2.1.9 2.1 2.7v3.3" />
    </svg>
  )
}
