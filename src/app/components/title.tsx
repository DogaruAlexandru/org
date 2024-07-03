import flower from '../../assets/images/flower-solid-svgrepo-com.svg';

function Title() {
  return (
    <div
      className="my-bg-band2 shadow-lg px-4 py-8 rounded-lg border border-my_dark 
      font-dancing-script text-center text-my_dark font-bold text-5xl flex justify-center items-center"
    >
      <img
        src={flower}
        alt="flower"
        className="w-6 h-6 mr-2 sm:w-10 sm:h-10 sm:mr-4 lg:w-16 lg:h-16 lg:mr-8"
      />
      You are Invited!
      <img
        src={flower}
        alt="flower"
        className="w-6 h-6 ml-2 sm:w-10 sm:h-10 sm:ml-4 lg:w-16 lg:h-16 lg:ml-8"
      />
    </div>
  );
}

export default Title;
