import User from "../components/user"

function UsersList({users}){
    return(
        <center>
            <h1>List Of Users</h1>
            
           {users.map((eachuser) => {
               return(
                   <div  key = {eachuser.id} > 
                   <User user={eachuser}/>
                   </div>
               )
           })}

        </center>
    )
}

export default UsersList

export async function getStaticProps(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data)

    return{
        props :{
            users:data
        }
    }
}