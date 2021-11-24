export default function UserList({users}) {

    const handleClick = async (id) => {
        console.log(id)
    }

    return (
        <div>
            <ul>
                {users.map(user => (
                    <li key={user.id} onClick={() => handleClick(user.id)}>{user.name}</li>
                ))}
            </ul>
        </div>
    )
}