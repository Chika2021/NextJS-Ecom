import getAllUsers from "@/lib/users/getAllUsers"
import { Metadata } from "next"
import Link from "next/link"

const metadata: Metadata = {
    title: 'User'
}

async function UserPage() {
    
const userData:Promise<User[]> = getAllUsers()

const users = await userData

console.log(users)
    

const content = (
    <section>
        <h2>
            <Link href="/">Back to Home</Link>
        </h2>
        <br />
        {users.map(user => {
            return (
                <>
                    <p key={user.id}>
                        <Link href={`/users/${user.id}`}>{user.name}</Link>
                    </p>
                    <br />
                </>
            )
        })}
    </section>
)

return content
}

export default UserPage