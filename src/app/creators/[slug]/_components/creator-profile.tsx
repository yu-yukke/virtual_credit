'use client'

import { useState } from 'react'

import { User } from '@/types/user'
import { AboutMe } from './about-me'
import { CopyrightedWorks } from './copyrighted-works'
import { MyWorks } from './my-works'
import { TabList } from './tab-list'

type Props = {
  creator: User
}

export const CreatorProfile = ({ creator }: Props) => {
  const [selected, setSelected] = useState('aboutMe')
  const myWorksCount = creator.myWorks.length
  const copyrightedWorksCount = creator.copyrightedWorks.length
  const disabledKeys = []
  if (myWorksCount === 0) {
    disabledKeys.push('myWorks')
  }
  if (copyrightedWorksCount === 0) {
    disabledKeys.push('copyrightedWorks')
  }

  return (
    <div className='py-20'>
      <TabList
        disabledKeys={disabledKeys}
        selected={selected}
        setSelected={setSelected}
        myWorksCount={myWorksCount}
        copyrightedWorksCount={copyrightedWorksCount}
      />
      <div className='py-6'>
        {selected === 'aboutMe' && (
          <AboutMe description={creator.description} />
        )}
        {selected === 'myWorks' && <MyWorks works={creator.myWorks} />}
        {selected === 'copyrightedWorks' && (
          <CopyrightedWorks works={creator.copyrightedWorks} />
        )}
      </div>
    </div>
  )
}
