import { LoadingIcon } from "../icon/icon";

export default function Loading() {
  return (
    <>
      <div className=" fixed inset-0 bg-black opacity-30 z-40"></div>
      <div className=" fixed inset-0 z-50 ">
        <div className=" flex items-center justify-center min-h-full ">
          <LoadingIcon className=" fill-blue-600 animate-spin h-10" />
        </div>
      </div>
    </>
  );
}
