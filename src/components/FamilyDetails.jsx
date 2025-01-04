const FamilyDetails = () => {
  return (
    <section
      className="relative bg-contain bg-center bg-no-repeat py-10 px-5 md:px-20"
      style={{
        backgroundImage: "url('./Images/family.png')",
      }}
    >
      <div className="absolute inset-0 bg-white/70"></div>
      <div className="relative">
        <h2 className="text-2xl md:text-3xl font-playfair font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-700 via-purple-500 to-pink-500 mb-6 text-center">
          Family Members
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4 font-poppins">
              Groom's Family
            </h3>
            <ul className="list-disc font-semibold list-inside text-transparent bg-clip-text bg-gradient-to-r from-pink-700 via-purple-500 to-pink-500 font-poppins">
              <li>Dr. Paras Nath Sharma (Grandfather)</li>
              <li>Mr. Dharmendra Sharma (Father)</li>
              <li>Mrs. Sandhya Sharma (Mother)</li>
              <li>Mrs. Pushpanjali Sharma (Sister)</li>
              <li>Mr. Ranjan Sharma (Brother)</li>
              <li>Mr. Ravi Sharma (Brother)</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4 font-poppins">
              Bride's Family
            </h3>
            <ul className="list-disc font-semibold list-inside text-transparent bg-clip-text bg-gradient-to-r from-pink-700 via-purple-500 to-pink-500 font-poppins">
              <li>Mr. Shrinand Sharma (Father)</li>
              <li>Mrs. Panmati Sharma (Mother)</li>
              <li>Mr. Abhijit Sharma (Brother)</li>
              <li>Mrs. pooja Sharma (Sister)</li>
              <li>Ms. Abhishek Sharma (Brother)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FamilyDetails;
