"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed z-50 w-full bg-white/80 shadow-sm backdrop-blur-md dark:bg-gray-900/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex items-center">
            <Link
              className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text font-bold text-2xl text-transparent"
              href="/"
            >
              Boilerplate
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-8 md:flex">
            <Link
              className="text-gray-700 transition hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
              href="/"
            >
              Home
            </Link>
            <Link
              className="text-gray-700 transition hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
              href="/features"
            >
              Features
            </Link>
            <Link
              className="text-gray-700 transition hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
              href="/pricing"
            >
              Pricing
            </Link>
            <Link
              className="text-gray-700 transition hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
              href="/about"
            >
              About
            </Link>
            <Link
              className="text-gray-700 transition hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
              href="/contact"
            >
              Contact
            </Link>
            <Link
              className="transform rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-2 text-white transition hover:scale-105 hover:shadow-lg"
              href="/contact"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              className="text-gray-700 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
              onClick={() => setIsOpen(!isOpen)}
              type="button"
            >
              <svg
                aria-label="Toggle navigation"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    d="M6 18L18 6M6 6l12 12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  />
                ) : (
                  <path
                    d="M4 6h16M4 12h16M4 18h16"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="border-gray-200 border-t bg-white md:hidden dark:border-gray-800 dark:bg-gray-900">
          <div className="space-y-1 px-2 pt-2 pb-3">
            <Link
              className="block px-3 py-2 text-gray-700 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
              href="/"
            >
              Home
            </Link>
            <Link
              className="block px-3 py-2 text-gray-700 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
              href="/features"
            >
              Features
            </Link>
            <Link
              className="block px-3 py-2 text-gray-700 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
              href="/pricing"
            >
              Pricing
            </Link>
            <Link
              className="block px-3 py-2 text-gray-700 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
              href="/about"
            >
              About
            </Link>
            <Link
              className="block px-3 py-2 text-gray-700 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
              href="/contact"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
