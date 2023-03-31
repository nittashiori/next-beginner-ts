import Link from 'next/link';

const header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><img src="/vercel.svg" /></li>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/test">Test</Link></li>
          <li><Link href="/user">User</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default header;