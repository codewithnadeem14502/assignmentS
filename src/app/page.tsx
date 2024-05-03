import Profile from "@/components/Profile";
const page = () => {
  return (
    <div className="bg-slate-50   ">
      <div className="my-4">
        <span className="text-gray-400">Pages </span>/ Assignment
        <h1 className=" text-lg text-black font-bold">Sale BDE</h1>
      </div>
      <div className="flex gap-2 ">
        <Profile />
      </div>
    </div>
  );
};

export default page;
