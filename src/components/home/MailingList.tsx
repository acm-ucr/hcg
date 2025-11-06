const MailingList = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-hcg-gold rounded-2xl p-2 w-4/5">
        <div className="border border-white rounded-2xl p-10 font-hcg-main font-light">
          <div className="text-center text-2xl md:text-5xl font-bold text-white mb-10">
            Join our Mailing List
          </div>
          <form className="space-y-6">
            <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
              <div className="flex-1">
                <div className="text-white mb-2 text-lg">First Name</div>
                <input className="w-full p-3 bg-white focus:outline-none" />
              </div>
              <div className="flex-1 hidden md:block">
                <div className="text-white mb-2 text-lg">Last Name</div>
                <input className="w-full p-3 bg-white focus:outline-none" />
              </div>
            </div>
            <div>
              <div className="text-white mb-2 text-lg">Email</div>
              <input className="w-full p-3 bg-white focus:outline-none"/>
            </div>
            <div className="flex justify-center md:justify-start mt-6">
              <button className="bg-black text-lg text-white px-8 py-3 rounded-lg cursor-pointer">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MailingList;