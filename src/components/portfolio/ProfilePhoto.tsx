import { cn } from "@/lib/utils";
import profileImage from "../../../img/vr.jpg";

const ProfilePhoto = ({ className, src }: { className?: string; src?: string }) => {
  return (
    <div className={cn("relative mx-auto h-28 w-28 sm:h-32 sm:w-32", className)}>
      <img
        src={src || profileImage}
        alt="Vahid Rahmani"
        className="h-full w-full rounded-full border border-white/10 object-cover"
      />
    </div>
  );
};

export default ProfilePhoto;