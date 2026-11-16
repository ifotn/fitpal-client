export default function Login () {
    return (
        <main>
            <h1>Login</h1>
            <form>
                <fieldset>
                    <label htmlFor="username">Username:</label>
                    <input />
                </fieldset>
                <fieldset>
                    <label htmlFor="password">Password:</label>
                    <input type="password"/>
                </fieldset>
                <button>Login</button>
            </form>
        </main>
    )
}