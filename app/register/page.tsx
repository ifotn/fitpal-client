export default function Register () {
    return (
        <main>
            <h1>Register</h1>
            <form>
                <fieldset>
                    <label htmlFor="username">Username:</label>
                    <input type="email" />
                </fieldset>
                <fieldset>
                    <label htmlFor="password">Password:</label>
                    <input type="password"/>
                </fieldset>
                <fieldset>
                    <label htmlFor="confirm">Confirm Password:</label>
                    <input type="password"/>
                </fieldset>
                <button>Register</button>
            </form>
        </main>
    )
}