import { categoryColors } from '../constants/categoryColors'
import { Element } from '../types/element'

type Props = {
  element: Element
  onClick: (element: Element) => void
}

export default function ElementCard({ element, onClick }: Props) {
  const colorClass = categoryColors[element.category] || 'bg-gray-200 hover:bg-gray-300'

  return (
    <div
      onClick={() => onClick(element)}
      className={`
        ${colorClass}
        cursor-pointer rounded p-1
        flex flex-col justify-between
        text-gray-800 transition-colors duration-150
        border border-transparent hover:border-gray-400
        min-w-0 overflow-hidden
      `}
      style={{
        gridColumn: element.xpos,
        gridRow: element.ypos,
      }}
    >
      <span className="text-[10px] leading-none">{element.number}</span>
      <span className="text-sm font-bold leading-none text-center">{element.symbol}</span>
      <span className="text-[9px] leading-none text-center truncate">{element.name}</span>
      <span className="text-[8px] leading-none text-center">
        {element.atomic_mass.toFixed(2)}
      </span>
    </div>
  )
}