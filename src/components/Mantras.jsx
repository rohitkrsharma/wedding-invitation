import React from "react";

const Mantras = () => {
  return (
    <section className="relative bg-gradient-to-r from-pink-100 via-purple-50 to-pink-100 py-10 px-5 md:px-20">
      {/* Background Image with Reduced Opacity */}
      <div
        className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: "url('./Images/ganesh.jpg')",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-playfair font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-700 via-purple-500 to-pink-500 mb-6 text-center">
          Wedding Mantras
        </h2>
        <div className="mb-8 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 font-poppins mb-4">
            Mangalya Mantra
          </h3>
          <p className="text-lg font-poppins leading-relaxed text-gray-700 italic">
            "मङ्गलम् भगवान् विष्णु मङ्गलम् गरुडध्वजः।
            मङ्गलम् पुण्डरीकाक्ष मङ्गलाय तनो हरिः॥"
          </p>
          <p className="text-lg font-poppins leading-relaxed text-gray-700 mt-2">
            *"May Lord Vishnu, the deity of auspiciousness, who is mounted on
            Garuda, bring prosperity and well-being to our lives."*
          </p>
        </div>

        <div className="space-y-8 text-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 font-poppins mb-4">
              Krishna Stuti
            </h3>
            <p className="text-lg font-poppins leading-relaxed text-gray-700 italic">
              ॐ कृष्णाय वासुदेवाय हरये परमात्मने ॥  प्रणतः क्लेशनाशाय गोविंदाय नमो नमः ॥
            </p>
            <p className="text-lg font-poppins leading-relaxed text-gray-700 mt-2">
              *"Salutations to Krishna, the son of Vasudeva, the remover of distress, the Supreme Being. I bow to Govinda, the one who brings liberation."*
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-800 font-poppins mb-4">
              Vivaha Mantra
            </h3>
            <p className="text-lg font-poppins leading-relaxed text-gray-700 italic">
              "शुभमंगल सावधान। यज्ञेन धर्मणाऽर्जया धनं, प्रजया धनं, यशसा धनं।
              धर्माद्भवन्ति धर्मान्परस्परं संगच्छध्वम् संवदध्वम्।"
            </p>
            <p className="text-lg font-poppins leading-relaxed text-gray-700 mt-2">
              *"Let this union be auspicious and virtuous. May wealth,
              prosperity, and fame come with your companionship."*
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Mantras;
