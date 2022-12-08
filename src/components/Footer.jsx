import React from "react"
import { SiLinkedin, SiGithub } from "react-icons/si"

const Footer = () => {
  return (
    <footer className="page-footer">
      <p>
        {new Date().getFullYear()} LMM's Portfolio site
        <a href="https://github.com/laurie60">
          {" "}
          <SiGithub /> GitHub
        </a>
        <a href="https://www.linkedin.com/in/laurence-morris-moody/">
          {" "}
          <SiLinkedin /> LinkedIn
        </a>
      </p>
    </footer>
  )
}

export default Footer
