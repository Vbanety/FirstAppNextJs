import Link from 'next/link'
import Image from  'next/image'

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <Image src="/ninja.png" width={90} height={90}/>
            </div>
            <div className="linkNav">
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/ninjas"><a>Ninjas Listing</a></Link>
            </div>
        </nav>
    );
}

export default Navbar;