import React from 'react'

export default function Card({ children }: any) {
    return (
        <div className="card p-4">
            {children}
        </div>
    )
}
