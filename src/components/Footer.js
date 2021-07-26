import react from "react";
import vibesImage from "../assets/pm.png";

export const Footer = () => {
  return (
    <footer class="footer bg-white relative pt-1 border-b">
      <div class="container mx-auto px-6">
        <div class="sm:flex sm:mt-8">
          <div class="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between"></div>
        </div>
      </div>
      <div class="container mx-auto px-6">
        <div class="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
          <div class="sm:w-2/3 text-center py-6">
            <p class="text-sm text-blue-700 font-bold mb-2">© vibes SA inc</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
