
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  MapPin,
  Camera,
  Send,
  AlertCircle,
} from "lucide-react";
import { classifyComplaint } from "../../services/mlService";
export default function NewChallenge() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "",
    district: "",
    location: "",
  });

  const [image, setImage] = useState(null);
  const [isClassifying, setIsClassifying] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
const handleAutoDetect = async () => {
  if (!form.title && !form.description) {
    alert("Please enter a title or description first.");
    return;
  }

  setIsClassifying(true);
  try {
    const result = await classifyComplaint(`${form.title} ${form.description}`);
    setForm((prev) => ({
      ...prev,
      category: result.category,
    }));
  } catch (err) {
    console.error("Classification failed:", err);
    alert("Could not auto-detect category. Please select manually.");
  } finally {
    setIsClassifying(false);
  }
};
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Problem submitted:", {
      ...form,
      image,
    });

    navigate("/citizen/challenges");
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">

      {/* ================= HEADER ================= */}
      <div className="mb-6">

        <button
          onClick={() => navigate("/citizen/challenges")}
          className="flex items-center gap-1.5 text-xs font-semibold text-[#64748B] hover:text-[#1E4D38] mb-4 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Challenges
        </button>

        <div className="bg-white rounded-3xl border border-[#E5E0D2] shadow-xs p-6">

          <span className="text-xs font-bold uppercase tracking-wider text-[#1E4D38]">
            Citizen Portal
          </span>

          <h1 className="text-2xl sm:text-3xl font-bold text-[#1C241E] font-editorial mt-1">
            Report a Community Problem
          </h1>

          <p className="text-sm text-[#64748B] mt-1 max-w-2xl">
            Tell us about a problem in your community. Your report can help
            government departments and solution teams take action.
          </p>

        </div>

      </div>


      {/* ================= FORM ================= */}
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-3xl border border-[#E5E0D2] shadow-xs overflow-hidden"
      >

        {/* FORM HEADER */}
        <div className="px-6 py-5 border-b border-[#F0EBE0] bg-[#FAF8F2]">

          <h2 className="text-sm font-bold text-[#1C241E]">
            Problem Details
          </h2>

          <p className="text-xs text-[#64748B] mt-1">
            Provide as much information as possible.
          </p>

        </div>


        <div className="p-6 space-y-5">

          {/* TITLE */}
          <div>

            <label className="block text-xs font-bold text-[#334155] mb-1.5">
              Problem Title
            </label>

            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Example: Broken street lights in our area"
              required
              className="w-full px-3.5 py-3 rounded-xl bg-[#FAF8F2] border border-[#DDD6C5] text-sm outline-none focus:border-[#1E4D38] focus:ring-2 focus:ring-[#1E4D38]/10"
            />

          </div>


          {/* DESCRIPTION */}
          <div>

            <label className="block text-xs font-bold text-[#334155] mb-1.5">
              Describe the Problem
            </label>

            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Explain what is happening, where it is happening and how it affects people..."
              rows={5}
              required
              className="w-full px-3.5 py-3 rounded-xl bg-[#FAF8F2] border border-[#DDD6C5] text-sm outline-none resize-none focus:border-[#1E4D38] focus:ring-2 focus:ring-[#1E4D38]/10"
            />

          </div>


          {/* CATEGORY + DISTRICT */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {/* CATEGORY */}
            <div>
            

             <div className="flex items-center justify-between mb-1.5">
               <label className="block text-xs font-bold text-[#334155]">
                 Category
               </label>

               <button
                 type="button"
                 onClick={handleAutoDetect}
                 disabled={isClassifying}
                 className="text-[10px] font-bold text-[#1E4D38] hover:underline disabled:opacity-50 cursor-pointer"
               >
                 {isClassifying ? "Detecting..." : "Auto-detect from text"}
               </button>
            </div>

              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                required
                className="w-full px-3.5 py-3 rounded-xl bg-[#FAF8F2] border border-[#DDD6C5] text-sm outline-none cursor-pointer focus:border-[#1E4D38]"
              >
                <option value="">Select category</option>
                <option value="Water Quality & Sanitation">Water Quality & Sanitation</option>
                <option value="Air & Environmental Pollution">Air & Environmental Pollution</option>
                <option value="Public Health">Public Health</option>
                <option value="Infrastructure & Roads">Infrastructure & Roads</option>
                <option value="Education">Education</option>
                <option value="Energy & Sustainability">Energy & Sustainability</option>
                <option value="Waste Management">Waste Management</option>
                <option value="Agriculture & Rural Development">Agriculture & Rural Development</option>
                <option value="Safety & Public Welfare">Safety & Public Welfare</option>
              </select>

            </div>


            {/* DISTRICT */}
            <div>

              <label className="block text-xs font-bold text-[#334155] mb-1.5">
                District
              </label>

              <select
                name="district"
                value={form.district}
                onChange={handleChange}
                required
                className="w-full px-3.5 py-3 rounded-xl bg-[#FAF8F2] border border-[#DDD6C5] text-sm outline-none cursor-pointer focus:border-[#1E4D38]"
              >
                <option value="">Select district</option>
                <option value="Ranchi">Ranchi</option>
                <option value="Bokaro">Bokaro</option>
                <option value="Dhanbad">Dhanbad</option>
                <option value="Jamshedpur">Jamshedpur</option>
                <option value="Hazaribagh">Hazaribagh</option>
                <option value="Deoghar">Deoghar</option>
                <option value="Giridih">Giridih</option>
                <option value="Palamu">Palamu</option>
                <option value="Basti">Other</option>
              </select>

            </div>

          </div>


          {/* LOCATION */}
          <div>

            <label className="block text-xs font-bold text-[#334155] mb-1.5">
              Location
            </label>

            <div className="relative">

              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#B45309]" />

              <input
                type="text"
                name="location"
                value={form.location}
                onChange={handleChange}
                placeholder="Enter locality, village, ward or landmark"
                required
                className="w-full pl-10 pr-3.5 py-3 rounded-xl bg-[#FAF8F2] border border-[#DDD6C5] text-sm outline-none focus:border-[#1E4D38] focus:ring-2 focus:ring-[#1E4D38]/10"
              />

            </div>

          </div>


          {/* IMAGE */}
          <div>

            <label className="block text-xs font-bold text-[#334155] mb-1.5">
              Photo Evidence
              <span className="font-normal text-[#94A3B8] ml-1">
                (Optional)
              </span>
            </label>

            <label className="border-2 border-dashed border-[#DDD6C5] rounded-2xl bg-[#FAF8F2] hover:bg-[#F4F1E8] transition-colors p-6 flex flex-col items-center justify-center cursor-pointer">

              <Camera className="w-7 h-7 text-[#1E4D38] mb-2" />

              <span className="text-xs font-bold text-[#334155]">
                Upload a photo
              </span>

              <span className="text-[10px] text-[#94A3B8] mt-1">
                JPG, PNG up to 5MB
              </span>

              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => setImage(e.target.files?.[0] || null)}
              />

            </label>

            {image && (
              <p className="text-xs text-[#1E4D38] font-semibold mt-2">
                Selected: {image.name}
              </p>
            )}

          </div>


          {/* NOTICE */}
          <div className="flex gap-3 p-4 rounded-2xl bg-[#FFFBEB] border border-[#FDE68A]">

            <AlertCircle className="w-5 h-5 text-[#B45309] shrink-0" />

            <div>

              <p className="text-xs font-bold text-[#78350F]">
                Before submitting
              </p>

              <p className="text-[11px] text-[#92400E] mt-0.5 leading-relaxed">
                Please make sure the information is accurate. Reports may be
                reviewed by the relevant government department before being
                published as a community challenge.
              </p>

            </div>

          </div>

        </div>


        {/* FOOTER */}
        <div className="px-6 py-5 bg-[#FAF8F2] border-t border-[#F0EBE0] flex flex-col sm:flex-row items-center justify-end gap-3">

          <button
            type="button"
            onClick={() => navigate("/citizen/challenges")}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-[#DDD6C5] bg-white text-xs font-bold text-[#64748B] hover:bg-[#F4F1E8] transition-colors cursor-pointer"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#1E4D38] hover:bg-[#163B2A] text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <Send className="w-3.5 h-3.5" />
            Submit Problem
          </button>

        </div>

      </form>

    </div>
  );
}
