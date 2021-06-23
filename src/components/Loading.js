export const Loading = () => (
  <div className='book'>
    <div className='inner'>
      <div className='left' />
      <div className='middle' />
      <div className='right' />
    </div>
    <ul>
      {
        // prettier-ignore
        Array(18).fill(0).map(() => <li />)
      }
    </ul>
  </div>
)

export default Loading
