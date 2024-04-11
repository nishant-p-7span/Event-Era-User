import { useEffect, useState } from "react";
import { MdOutlineModeEdit } from "react-icons/md";
import { useParams } from "react-router-dom";
import axios from "@/services/api";
const UserProfile = () => {
  const [profile, setProfile] = useState([]);
  const [editProfile, setEditProfile] = useState(false);
  const [name, setName] = useState("");
  const [isVendor, setIsVendor] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    try {
      axios
        .get("/users/" + id)
        .then((response) => {
          setProfile(response.data);
          setIsVendor(response.data.isuservendor);
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log("Err signing up", err);
    }
  }, [editProfile]);


  console.log(isVendor);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.put(`/users/user/${profile._id}`, {
        user_name: name,
        isuservendor: isVendor,
      });
      setEditProfile(false);
      // Optionally, you can show a success message or perform any other action after successful update
    } catch (error) {
      console.error("Error updating name:", error.message);
      // Optionally, you can show an error message or perform any other action upon error
    }
  };

  return (
    <div className="mt-20 ml-8 border-2  rounded-xl w-96  panel" id="Profile">
      <section className="justify-center p-8 ">
        <div className="flex justify-between">
          <h3 className="text-2xl font-semibold text-gray-800">
            Account Details
          </h3>
          <div
            className="flex items-center text-2xl cursor-pointer"
            onClick={() => setEditProfile(!editProfile)}
          >
            <MdOutlineModeEdit className="text-primary-500" />
            <span> Edit</span>
          </div>
        </div>
        {!editProfile ? (
          <div className="flex flex-col gap-5 mt-5">
            <div className="font-bold py-3 ">
              <label
                htmlFor="name"
                className="text-2xl py-2.5 font-semibold text-gray-800"
              >
                Name
              </label>
              <h3 className="h-10 py-2.5  text-xl w-full focus-visible:outline-none">
                {profile.user_name}
              </h3>
            </div>
            <div className="font-bold py-3 ">
              <label
                htmlFor="Email"
                className="text-2xl py-2.5 font-semibold text-gray-800"
              >
                Email
              </label>
              <h3 className=" h-10 py-2.5  text-xl w-full focus-visible:outline-none">
                {profile.user_email}
              </h3>
            </div>
            <div className="font-bold py-2.5 ">
              <label
                htmlFor="mobile"
                className="text-2xl py-2.5 font-semibold text-gray-800"
              >
                Mobile No
              </label>
              <h3 className=" h-10 py-2.5 text-xl w-full focus-visible:outline-none">
                7984953211
              </h3>
            </div>
            <div className="invisible text-center mb-13 text-primary-500 ">
              <button
                type="submit"
                id="submit"
                className="py-3 px-7 text-xl font-semibold border-2 rounded-full focus-visible:outline-none  hover:bg-red-500 hover:text-white"
                value="Save"
              />
            </div>
          </div>
        ) : (
          <form
            className="flex flex-col gap-5 mt-5"
            onSubmit={(e) => handleSubmit(e)}
          >
            <div className="font-bold py-3 ">
              <label
                htmlFor="name"
                className="text-2xl py-2.5 font-semibold text-gray-800"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="user_name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className=" h-10 py-2.5 border-b text-xl w-full focus-visible:outline-none"
                placeholder={profile.user_name}
              />
            </div>
            <div className="font-bold py-3 ">
              <label
                htmlFor="Email"
                className="text-2xl py-2.5 font-semibold text-gray-800"
              >
                Email
              </label>
              <input
                type="email"
                id="Email"
                name="user_email"
                value={profile.user_email}
                readOnly
                className="h-10 py-2.5 border-b text-xl w-full focus-visible:outline-none"
                placeholder="komal@gmail.com"
              />
            </div>
            <div className="font-bold py-2.5 ">
              <label
                htmlFor="mobile"
                className="text-2xl py-2.5 font-semibold text-gray-800"
              >
                Mobile No
              </label>
              <input
                type="number"
                id="mobile"
                maxLength="10"
                readOnly
                value="7984953211"
                className=" h-10 py-2.5 border-b text-xl w-full focus-visible:outline-none"
              />
            </div>
            <div className="w-full flex justify-between items-center">
              <span className="text-xl py-2.5 font-semibold text-gray-800">
                Become a vendor
              </span>
              <label
                for="AcceptConditions"
                className="relative h-8 w-14 cursor-pointer rounded-full bg-gray-300 transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-green-500"
              >
                <input
                  type="checkbox"
                  id="AcceptConditions"
                  className="peer sr-only"
                  checked={isVendor}
                  onChange={(e) => setIsVendor(!isVendor)}
                />

                <span className="absolute inset-y-0 start-0 m-1 size-6 rounded-full bg-white transition-all peer-checked:start-6"></span>
              </label>
            </div>
            <div className="text-center mb-13  ">
              <input
                type="submit"
                id="submit"
                className="py-3 px-7 text-xl font-semibold border-2 rounded-full focus-visible:outline-none  hover:bg-red-500 hover:text-white"
                value="Save"
                onClick={handleSubmit}
              />
            </div>
          </form>
        )}
      </section>
    </div>
  );
};

export default UserProfile;
