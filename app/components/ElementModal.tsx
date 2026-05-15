import { Element } from '../types/element'
import { categoryColors } from '../constants/categoryColors'


type Props = { 
  element: Element
  onClose: () => void
}


export default function ElementModal({ element, onClose }: Props) {
  const color = categoryColors[element.category] || 'bg-gray-200 hover:bg-gray-300'

  return (
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-gray-900 text-white rounded-2xl w-full max-w-md mx-4 overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`${color} p-6 flex items-center gap-4`}>
          <div className="text-gray-800">
            <p className="text-sm font-medium">{element.number}</p>
            <p className="text-6xl font-bold leading-none">{element.symbol}</p>
            <p className="text-lg font-medium">{element.name}</p>
          </div>
        </div>

        <div className="p-6 grid grid-cols-2 gap-4">
          <InfoCard label="Atomic Mass" value={`${element.atomic_mass.toFixed(4)} u`} />
          <InfoCard label="Category" value={element.category} />
          <InfoCard label="Phase" value={element.phase} />
          <InfoCard label="Period / Group" value={`${element.period} / ${element.group ?? '—'}`} />
          <InfoCard label="Block" value={element.block.toUpperCase()} />
          <InfoCard label="Density" value={element.density ? `${element.density} g/cm³` : '—'} />
          <InfoCard label="Melting Point" value={element.melt ? `${element.melt} K` : '—'} />
          <InfoCard label="Boiling Point" value={element.boil ? `${element.boil} K` : '—'} />
        </div>

        <div className="px-6 pb-6">
          <button
            onClick={onClose}
            className="w-full py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors text-sm"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

// small reusable stat card for the info grid
function InfoCard({ label, value }: { label: string, value: string }) {
    return (
        <div className="bg-gray-800 p-4 rounded-lg">
            <p className="text-xs text-gray-400">{label}</p>
            <p className="text-sm font-medium">{value}</p>
        </div>
    )
}

