const Footer = () => {
  return (
    <footer className="c-space py-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p> | </p>
        <p>Privacy Policy</p>
      </div>
      <div className="flex gap-3">
        <div className="social-icon">
          <a className="flex items-center justify-center" target="_blank" href="https://github.com/gabe-brum">
            <img src="/assets/github.svg" alt="Github" className="w-1/2 h-1/2" />
          </a>
        </div>
         <div className="social-icon">
          <a className="flex items-center justify-center" target="_blank" href="https://instagram.com/gabriel_bluz">
            <img src="/assets/instagram.svg" alt="Instagram" className="w-1/2 h-1/2" />
          </a>
        </div>
      </div>
      <p className="text-white-500">© 2025 Gabriel. All rights reserved.</p>
    </footer>
  )
}

export default Footer