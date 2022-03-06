import User from './User'
function ListUsers({onDelete,Users}) {
  return (
    <div className='info'>
        {Users.map((user,index)=>(
            <User key={index} index={index}user={user} onDelete={onDelete}/>
        ))}
    </div>
  )
}

export default ListUsers