import { ArrowLeft, CloudUpload} from "lucide-react";
import { BiArrowBack } from "react-icons/bi";
import { CiSaveUp2 } from "react-icons/ci";
import { Link } from "react-router-dom";


export default function StepHeader() {
  return (
    <div className="mb-2 -mt-1">
      <div className="relative flex items-center justify-center">
        {/* Back Button */}
        <Link
          to="/"
          className="absolute left-0"
          
        >
          <BiArrowBack size={22} />
        </Link>

        {/* Title */}
        <div className="flex text-center">
          <h1 className="text-2xl  font-bold leading-tight text-slate-900">
            Create Your Wish
          </h1>
        </div>


      </div>
    </div>
  );
}