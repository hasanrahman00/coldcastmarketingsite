import { createContext } from 'react'

// SSR-only channel. During the build's renderToString pass, <Seo> writes its
// computed head tags into the object provided here so the prerender script can
// emit them into the static HTML. On the client this context has no provider,
// so <Seo> falls back to mutating document.head directly (see Seo.jsx).
export const HeadCollectorContext = createContext(null)
