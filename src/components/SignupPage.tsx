const SignupPage = () => {
    const handleDiscordLogin = () => {
      window.location.href = 'http://localhost:3000/auth/discord';
    };
  
    return (
      <div className="h-screen bg-gradient-to-r from-blue-500 to-purple-500 flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold text-white mb-6">Sign Up</h1>
        <button
          onClick={handleDiscordLogin}
          className="bg-white text-blue-500 font-bold py-3 px-6 rounded-full hover:bg-gray-200"
        >
          Sign In with Discord
        </button>
      </div>
    );
  };
  
  export default SignupPage;
  