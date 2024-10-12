const SignIn = () => {
  return (
    <div className="px-2 py-4 sm:px-8 md:px-16 border-2 flex flex-col justify-center items-center">

        <h2 className="text-3xl font-medium text-primary-blue">Welcome</h2>
        <p>Sign in to your account!</p>

        {/* Login Screen */}
        <div className="border-2">
            <form className="flex flex-col">
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Password" />
                <button>Sign In</button>
            </form>

            <div>
                <div>ICON SECTION</div>
                <p>Sign In with Google</p>
            </div>

        </div>

    </div>
  )
}

// TODO: Sign Up Screen
// TODO: Login with google facebook X icon

export default SignIn