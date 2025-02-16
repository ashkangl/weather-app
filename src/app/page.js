import Homepage from "@/components/homapage/Homepage";

export const metadata = {
  title: "Simple Weather App by Flask & Next JS",
  description: "This is simple weather app developed by Flask & Next js. I used Tailwind css for styling and use openweather api!",
};

export default function Home() {
  return (
    <div >
      <Homepage />
    </div>
  );
}
