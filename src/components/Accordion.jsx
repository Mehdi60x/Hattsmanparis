import { useRef, useState } from 'react'

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null)
  const refs = useRef([])

  return (
    <div className="accordion">
      {items.map((item, i) => {
        const isOpen = openIndex === i
        return (
          <div className={`accordion-item ${isOpen ? 'open' : ''}`} key={item.title}>
            <button
              className="accordion-trigger"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              {item.title}
              <span className="accordion-icon">+</span>
            </button>
            <div
              className="accordion-content"
              style={{ maxHeight: isOpen ? `${refs.current[i]?.scrollHeight || 200}px` : '0px' }}
            >
              <div className="accordion-content-inner" ref={(el) => (refs.current[i] = el)}>
                {item.content}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
