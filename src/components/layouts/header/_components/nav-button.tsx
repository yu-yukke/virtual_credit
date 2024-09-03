import Link from 'next/link'

type Props = {
  text: string
  href: string
}

export const NavButton = ({ text, href }: Props) => {
  return (
    <Link
      href={href}
      className='px-4 py-2 text-sm tracking-wide transition-all text-tertiary rounded-3xl duration-400 hover:text-secondary hover:bg-background hover:shadow-headerNavButtonActive'
    >
      <div className='flex items-start gap-1'>{text}</div>
    </Link>
  )
}
