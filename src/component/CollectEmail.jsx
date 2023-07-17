import './collectemail.css';
import { useState } from 'react'

const CollectEmail = () => {
    const [email, setEmail] = useState(false)
    const submitHandler = (e) => {
        e.preventDefault()
        setTimeout(() => {
            e.target.email.value = ""
        }, 2000)

        setEmail(true)
    }

    return (
        <div className='EmailCollactor'>
            <form onSubmit={submitHandler} method="post">
                <input type="email" name="email" placeholder="Enter Email" required />
                <button type="submit">Submit</button>
            </form>
            {email && <p className="sucsess">Submitted </p>}
        </div>
    )
}

export default CollectEmail;