// ページビューカウントしたいコンポーネントにこいつを読み込ませる
'use client'

import { useEffect } from 'react'

// slug: env/model-${id}の形にする // ex: ${process.env.NODE_ENV}/works-${work.id}
export const ReportView = ({ slug }: { slug: string }) => {
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/upstash`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ slug }),
    })
  }, [slug])

  return null
}
