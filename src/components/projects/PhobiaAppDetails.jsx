import React from "react";
import { Construction } from "lucide-react";

const PhobiaAppDetails = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-gray-800">
        A Digital Solution for Needle Phobia Management
      </h3>
      <div className="bg-blue-50 p-6 rounded-lg flex flex-col items-center justify-center text-center space-y-3">
        <Construction className="w-8 h-8 text-blue-600 animate-bounce" />
        <p className="text-gray-600">
          Project currently in design phase. This will be updated soon!
        </p>
      </div>
    </div>
  );
};

export default PhobiaAppDetails;
