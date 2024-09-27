import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className='mt-auto'>
      <div className='py-12 grid grid-cols-[1fr_min(1232px,_calc(100%_-_60px))_1fr] *:col-start-2'>
        <Link href='/'>
          <h1 className='text-2xl font-bold'>Google</h1>
        </Link>
        <div className='grid grid-cols-1 gap-6 mt-10 text-sm md:grid-cols-2 lg:grid-cols-4'>
          <div className='flex flex-col gap-3 tracking-wide'>
            <ul className='space-y-1.5'>
              <li>クリエイター一覧</li>
              <li className='indent-[1em] text-tertiary/90'>ジョブから探す</li>
            </ul>
            <ul className='space-y-1.5'>
              <li>作品一覧</li>
              <li className='indent-[1em] text-tertiary/90'>
                カテゴリーから探す
              </li>
              <li className='indent-[1em] text-tertiary/90'>タグから探す</li>
            </ul>
          </div>
          <ul className='space-y-1.5 tracking-wide'>
            <li>リリースノート</li>
            <li>お問い合わせ</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
