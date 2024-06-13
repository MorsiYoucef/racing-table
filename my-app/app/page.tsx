import { Resault } from '@/components/Resault'

export default function Home() {
  return (
    <main className="flex mx-auto max-w-4xl min-h-screen flex-col items-center justify-evenly py-10">
      <h1 className=" text-green-500 font-bold text-4xl">ARC Competition</h1>
      <Resault />
    </main>
  )
}
