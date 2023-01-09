import { Link } from "next/link";

export const ButtonLink = ({ destination, label }) => {
  <Link href={destination}>
    <a className="bg-pink-500 hover:bg-pink-700 inline-block my-2 px-4 py-2 uppercase rounded-md cursor-pointer text-white">
      {label}
    </a>
  </Link>;
};
