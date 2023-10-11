
import {Link} from "react-router-dom"


export default function Footer() {
  return (
    <footer className=" flex justify-center items-center gap-5  bg-white h-12">
          <Link>
            <img className=" h-5"
            src="../../public/Logonew.png" alt="" />
          </Link>
          <p>Copyright © 2025 BRIX Agency | All Rights Reserved</p>

          <Link>
          <img src="../../public/facebook (1).png" alt="" />
          </Link>
          <Link>
          <img src="../../public/instagram (1).png" alt="" />
          </Link>
          <Link>
          <img src="../../public/line (1).png" alt="" />
          </Link>
    </footer>
  )
}
