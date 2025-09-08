interface IconProps {
  className?: string
  size?: number
}

export function MoonIcon({ className = 'w-5 h-5', size }: IconProps) {
  const sizeProps = size ? { width: size, height: size } : {}

  return (
    <svg
      className={className}
      fill="#0285ff"
      viewBox="0 0 20 20"
      {...sizeProps}
    >
      <path d="M17.293 13.293A8 8 0 1 1 6.707 2.707a8.001 8.001 0 0 0 10.586 10.586z" />
    </svg>
  )
}
