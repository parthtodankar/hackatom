"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-white">
            Nuclea
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-purple-300 transition-colors">
              Home
            </Link>
            <Link href="/blog" className="text-white hover:text-purple-300 transition-colors">
              Blog
            </Link>
            <Link href="/quiz" className="text-white hover:text-purple-300 transition-colors">
              Quiz
            </Link>
            <Link href="/buy" className="text-white hover:text-purple-300 transition-colors">
              Buy
            </Link>
            
            <a
              href="https://console.dialogflow.com/api-client/demo/embedded/429ce972-e535-41ec-a1ef-d8523463a1f2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-300 transition-colors"
            >
              Chatbot
            </a>
            <a
              href="https://isotope-puzzle.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-300 transition-colors"
            >
              Game
            </a>
            <a
              href="https://data-visualization-hackatom.streamlit.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-300 transition-colors"
            >
              Visualize
            </a>
            <Link href="/about" className="text-white hover:text-purple-300 transition-colors">
              About
            </Link>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">Get Started</Button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/" className="text-white hover:text-purple-300 transition-colors">
              Home
            </Link>
            <Link href="/blog" className="text-white hover:text-purple-300 transition-colors">
              Blog
            </Link>
            <Link href="/quiz" className="text-white hover:text-purple-300 transition-colors">
              Quiz
            </Link>
            <Link href="/about" className="text-white hover:text-purple-300 transition-colors">
              About
            </Link>
            <a
              href="https://console.dialogflow.com/api-client/demo/embedded/429ce972-e535-41ec-a1ef-d8523463a1f2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-300 transition-colors"
            >
              Chatbot
            </a>
            <a
              href="https://isotope-puzzle.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-purple-300 transition-colors"
            >
              Game
            </a>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">Get Started</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
