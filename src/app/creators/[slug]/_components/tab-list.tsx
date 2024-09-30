'use client'

import { Chip, Tab, Tabs } from '@nextui-org/react'
import { Dispatch, SetStateAction } from 'react'

import {
  CreatorDetailIcon,
  FolderIcon,
  SupervisorIcon,
} from '@/components/elements/icons'

type Props = {
  disabledKeys: string[]
  selected: string
  setSelected: Dispatch<SetStateAction<string>>
  myWorksCount: number
  copyrightedWorksCount: number
}

export const TabList = ({
  disabledKeys,
  selected,
  setSelected,
  myWorksCount,
  copyrightedWorksCount,
}: Props) => {
  return (
    <div className='flex flex-col w-full border-t-0 border-b border-l-0 border-r-0 border-solid border-divider text-tertiary/50'>
      <Tabs
        disabledKeys={disabledKeys}
        aria-label='Options'
        color='primary'
        variant='underlined'
        classNames={{
          tabList:
            'gap-8 w-full relative rounded-none p-0 border-b border-tertiary text-tertiary',
          cursor: 'w-full bg-secondary',
          tab: 'max-w-fit px-0 h-12 ',
          tabContent: 'group-data-[selected=true]:text-secondary',
        }}
        selectedKey={selected}
        onSelectionChange={(key) => setSelected(key.toString())}
      >
        <Tab
          key='aboutMe'
          title={
            <div className='flex items-center space-x-2'>
              <div className='w-5 h-5'>
                <CreatorDetailIcon />
              </div>
              <span className='tracking-wide'>私について</span>
            </div>
          }
        />
        <Tab
          key='myWorks'
          title={
            <div className='flex items-center space-x-2'>
              <div className='w-5 h-5'>
                <FolderIcon />
              </div>
              <span className='tracking-wide'>私の作品</span>
              <Chip
                size='sm'
                variant='faded'
                color='primary'
                classNames={{
                  base: 'bg-tertiary/10',
                  content: 'text-secondary/50',
                }}
              >
                {myWorksCount}
              </Chip>
            </div>
          }
        />
        <Tab
          key='copyrightedWorks'
          title={
            <div className='flex items-center space-x-2'>
              <div className='w-5 h-5'>
                <SupervisorIcon />
              </div>
              <span className='tracking-wide'>参加している作品</span>
              <Chip
                size='sm'
                variant='faded'
                color='primary'
                classNames={{
                  base: 'bg-tertiary/10',
                  content: 'text-secondary/50',
                }}
              >
                {copyrightedWorksCount}
              </Chip>
            </div>
          }
        />
      </Tabs>
    </div>
  )
}
