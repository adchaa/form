function Error({Elist}) {
  return (
    <div>
        {Elist.map((element,index) => (<p key={index} className='error'>{element}</p>))}
    </div>
  )
}

export default Error;