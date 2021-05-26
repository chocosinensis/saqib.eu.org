export const Quote = ({ quote, r }) => (
  <section className='quote'>
    <div className='cursor'>
      <div></div>
    </div>
    <div className='cursor _'>
      <div></div>
    </div>
    <div className='content design'>
      <q>{quote}</q>
      <small>{r}</small>
    </div>
  </section>
)

export default Quote
