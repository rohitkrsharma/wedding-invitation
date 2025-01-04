const FamilyDetails = () => {
  return (
    <section className="bg-gray-100 py-10 px-5 md:px-20">
      <h2 className="text-2xl md:text-3xl font-playfair font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-700 via-purple-500 to-pink-500 mb-6 text-center">Family Members</h2>
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4 font-poppins">Groom's Family</h3>
          <ul className="list-disc font-semibold list-inside text-transparent bg-clip-text bg-gradient-to-r from-pink-700 via-purple-500 to-pink-500 font-poppins">
            <li>Dr. Paras nath Sharma (Grand Father)</li>
            <li>Mr. Dharmendra Sharma (Father)</li>
            <li>Mrs. Sandhya Sharma (Mother)</li>
            <li>Mr. Ranjan Sharma (Brother)</li>
            <li>Mr. Ravi Sharma (Brother)</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4 font-poppins">Bride's Family</h3>
          <ul className="list-disc font-semibold list-inside text-transparent bg-clip-text bg-gradient-to-r from-pink-700 via-purple-500 to-pink-500 font-poppins">
            <li>Mr. Shrinand Sharma (Father)</li>
            <li>Mrs. Panmati  Sharma (Mother)</li>
            <li>Ms. Abhijeet Sharma (Brother)</li>
            <li>Ms. Abhishek sharma (Brother)</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FamilyDetails;
