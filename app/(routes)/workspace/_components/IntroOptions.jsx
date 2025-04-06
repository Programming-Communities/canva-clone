import { useContext } from "react";
import { UserDetailContext } from "@/context/UserDetailContext"; // Import this
import { toast, Toaster } from "sonner";
import { api } from "@/convex/_generated/api";
import { canvasSizeOptions } from "@/services/Options";
import { useMutation } from "convex/react";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

function IntroOptions() {
  const createDesignRecord = useMutation(api.designs.CreateNewDesign);
  const { userDetail } = useContext(UserDetailContext); // Now this will work!
  const router = useRouter()

  const OnCanvasOptionSelect = async (option) => {
    if (!userDetail) {
      toast.error("User not found.");
      return;
    }

    toast("Loading...");

    const result = await createDesignRecord({
      name: option.name,
      width: option.width,
      height: option.height,
      uid: userDetail?._id,
    });

    console.log(result);
    // toast.success(" ");

    // Navigate to Editor Screen
    // router.push (`/workspace/${result._id}`);
    router.push ('/design/' +result);

  };

  return (
    <div>
      <Toaster position="top-center" richColors />

      <div className="relative">
        <Image
          src={"/banner-home.png"}
          alt="banner"
          width={1800}
          height={300}
          className="w-full h-[200px] rounded-2xl object-cover"
        />
        <h2 className="text-3xl absolute bottom-5 left-10 text-white">Workspace</h2>
      </div>

      <div className="flex gap-6 items-center mt-10 justify-center">
        {canvasSizeOptions.map((option, index) => (
          <div
            key={index}
            className="flex flex-col items-center cursor-pointer"
            onClick={() => OnCanvasOptionSelect(option)}
          >
            <Image
              src={option.icon}
              alt={option.name}
              width={60}
              height={60}
              className="hover:scale-105 transition-all"
            />
            <h2 className="text-xm mt-2 font-medium">{option.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default IntroOptions;
