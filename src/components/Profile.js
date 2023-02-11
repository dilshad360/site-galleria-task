import ProfileImage from "../assets/profile.jpg";
import Image from "next/image";

export default function Profile() {
    return (
        <div className="border-2 p-4 rounded-2xl flex">
            <Image className="rounded-full w-16 mx-1" src={ProfileImage} alt="profile_image" />
            <div className="flex flex-col justify-center text-neutral-600 ml-2">
                <h3>Dilshad</h3>
                <h3>21212002</h3>
            </div>
        </div>
    )
}