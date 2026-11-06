import { useEffect, useState } from 'react'
import './About.css'

export default function About() {
    const [about, setAbout] = useState(null)

    useEffect(() => {
        fetch('http://localhost:5002/about')
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error: ${response.status}`)
                }

                return response.json()
            })
            .then((data) => {
                console.log('ABOUT DATA:', data)
                setAbout(data)
            })
            .catch((error) => {
                console.error('ABOUT ERROR:', error)
            })
    }, [])

    if (!about) {
        return <p>Loading...</p>
    }

    return (
        <div className="about">
            <h1>{about.title}</h1>

            <h2>{about.name}</h2>

            {about.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}

            <img
                src={`http://localhost:5002${about.image}`}
                alt="Nalin Narayan"
            />
        </div>
    )
}