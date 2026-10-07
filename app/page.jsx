'use server'

import Link from "next/link";
import Counter from './components/Counter'
import Message from './components/Message'


async function page() {
  return (
    <div>
        <span>Homepage</span>
        <div><Link href='/about'>AboutPage link</Link></div>

        <Counter></Counter>
        <Message />
        

    </div>
  )
}

export default page