"use client"

import { useState } from 'react'
import { Element } from '../app/types/element'
import ElementCard from './components/ElementCard'
import ElementModal from './components/ElementModal'
import elementsData from './data/elements.json'

const elements = elementsData.elements as Element[]

export default function PeriodicTablePage() {
  const [selected, setSelected] = useState<Element | null>(null)

  return (
    <main className="p-4 bg-gray-950 min-h-screen">
      <div
        className="grid gap-1"
        style={{
          gridTemplateColumns: 'repeat(18, minmax(0, 1fr))',
          gridTemplateRows: 'repeat(10, 2.5rem)',
        }}
      >
        {elements.map((el) => (
          <ElementCard
            key={el.number}
            element={el}
            onClick={(element) => setSelected(element)}
          />
        ))}
      </div>

      {selected && (
        <ElementModal
          element={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </main>
  )
}