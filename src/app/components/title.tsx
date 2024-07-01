import flower from '../../assets/images/flower-solid-svgrepo-com.svg';

function Title() {
  return (
    <div
      className="my-bg-band2 shadow-lg px-4 py-8 rounded-lg border border-my_dark 
      font-dancing-script text-center text-my_dark font-bold text-5xl flex justify-center"
    >
      <img src={flower} alt="flower" className="w-12 h-12 mr-10" />
      You are Invited!
      <img src={flower} alt="flower" className="w-12 h-12 ml-10" />
    </div>
  );
}

export default Title;
