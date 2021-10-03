import React from 'react'

export default function Isometric({available}) {
    if (!available) {
        return null;
    }
    return (
        <div>
            <p>Hello</p>
        </div>
    )
}
