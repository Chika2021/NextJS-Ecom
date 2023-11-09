import Image from 'next/image'
import styles from './page.module.css'
// import './globals.css'

export default function Home() {
  return (
    <main>
      <>
        <div className="max-w-sm m-2 overflow-hidden rounded shadow-lg">
          <img
            className="w-full"
            src="https://source.unsplash.com/random/400x200"
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="mb-2 text-xl font-bold">Card title</div>
            <p className="text-base text-gray-700">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus,
              dolores?
            </p>
          </div>
          <div className="px-6 py-4 bg-gray-100">
            <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
              Click Me
            </button>
          </div>
        </div>

      </>

   
    </main>
  )
}
