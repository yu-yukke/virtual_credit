// import { Work } from '@/types/work'

// async function getWorks() {
//   const response = await fetch(
//     `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/works`,
//   )

//   if (!response.ok) {
//     throw new Error('Failed to fetch data')
//   }

//   const responseJson = await response.json()

//   return responseJson.data
// }

export default async function Page() {
  // const works: Work[] = await getWorks()

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {/* {works.map((work) => (
        <div key={work.id}>{work.title}</div>
      ))} */}
      works
    </div>
  )
}
