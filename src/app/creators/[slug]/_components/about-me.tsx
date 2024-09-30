type Props = {
  description: string
}

export const AboutMe = ({ description }: Props) => {
  return (
    <p className='leading-relaxed tracking-wide text-secondary'>
      {description}
    </p>
  )
}
