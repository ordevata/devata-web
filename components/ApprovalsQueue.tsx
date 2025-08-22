
'use client'
import { useEffect, useState } from 'react'
export default function ApprovalsQueue(){
  const [items] = useState<any[]>([]) // TODO: fetch /admin/approvals
  return (
    <div className="card">
      <div className="h2 mb-2">Запросы на подтверждение</div>
      {items.length===0 ? <div>Пока пусто</div> : items.map(i => <div key={i.id}>{i.action}</div>)}
    </div>
  )
}
