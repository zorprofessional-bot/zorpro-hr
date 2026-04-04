export function SectionTag({ children, variant = 'light' }: { children: React.ReactNode; variant?: 'light' | 'dark' }) {
  return (
    <span className={`inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] ${
      variant === 'dark' ? 'text-white/60' : 'text-primary'
    }`}>
      <span className={`w-8 h-0.5 rounded-full ${variant === 'dark' ? 'bg-white/30' : 'bg-primary'}`} />
      {children}
    </span>
  )
}
