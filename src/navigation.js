import { useEffect, useState } from 'react'

export function normalizePath(path) {
  const trimmed = path.replace(/\/+$/, '')
  return trimmed === '' ? '/' : `${trimmed}/`
}

function currentPath() {
  return normalizePath(window.location.pathname)
}

export function navigate(to) {
  const target = normalizePath(to)

  if (currentPath() !== target) {
    window.history.pushState({}, '', target)
  }

  window.dispatchEvent(new Event('popstate'))
  window.scrollTo(0, 0)
}

export function useRoute() {
  const [path, setPath] = useState(currentPath)

  useEffect(() => {
    const syncPath = () => setPath(currentPath())
    window.addEventListener('popstate', syncPath)
    return () => window.removeEventListener('popstate', syncPath)
  }, [])

  return path
}

function setMeta(attribute, key, content) {
  let tag = document.head.querySelector(`meta[${attribute}="${key}"]`)

  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attribute, key)
    document.head.appendChild(tag)
  }

  tag.setAttribute('content', content)
}

export function useSeo({ title, description }) {
  useEffect(() => {
    document.title = title
    setMeta('name', 'description', description)
    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
    setMeta('name', 'twitter:title', title)
    setMeta('name', 'twitter:description', description)

    const url = `${window.location.origin}${normalizePath(window.location.pathname)}`
    setMeta('property', 'og:url', url)

    let canonical = document.head.querySelector('link[rel="canonical"]')

    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }

    canonical.href = url
  }, [title, description])
}
