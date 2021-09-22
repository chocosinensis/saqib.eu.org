const Contact = () => (
  <section id='contact' className='flex'>
    <h1>Contact</h1>
    <div className='float'>
      <span>
        <a className='link' href='mailto:contact@saqib.eu.org' target='_blank'>
          <code>contact</code>@<span className='style'>saqib</span>
          <span className='design'>.eu.org</span>
        </a>
      </span>
    </div>
    <div className='wave-bottom'>
      <svg
        data-name='Layer 1'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1200 120'
        preserveAspectRatio='none'
        style={{ width: `calc(${Math.random() * 25 + 150}% + 1.3px)` }}
      >
        <path
          d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'
          className='shape-fill'
        />
      </svg>
    </div>
  </section>
)

export default Contact
