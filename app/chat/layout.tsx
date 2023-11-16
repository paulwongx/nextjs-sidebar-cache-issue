import React from 'react'
import { Sidebar } from "./_sidebar"

export default async function Layout({children}: {children: React.ReactNode}) {
  return (
    <div className="relative w-screen min-h-screen flex justify-start">
      <Sidebar />
      {children}
    </div>
  )
}

