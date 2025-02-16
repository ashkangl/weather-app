import { Github, Globe } from "lucide-react"

const Footer = () => {
    return(
      <footer className="row-start-3 text-white flex gap-6 flex-wrap items-center justify-center mt-12">
        <a className="flex items-center gap-2 hover:underline hover:underline-offset-4" href="https://github.com/ashkangl" target="_blank" rel="noopener noreferrer nofollow"><Github />Github</a>
        <a className="flex items-center gap-2 hover:underline hover:underline-offset-4" href="https://Ashkangolzad.ir" target="_blank" rel="noopener noreferrer"><Globe />AshkanGolzad.ir</a>
      </footer>
    )
}

export default Footer