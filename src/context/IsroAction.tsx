import axios from "axios";
import toast from "react-hot-toast";

export const getCentresData = async () => {
  const response = await axios.get("https://isro.vercel.app/api/centres");
  return response.data.centres;
};

export const getLaunchersData = async () => {
  const response = await axios.get("https://isro.vercel.app/api/launchers");
  return response.data.launchers;
};

export const getsatellitesData = async () => {
  const response = await axios.get(
    "https://isro.vercel.app/api/customer_satellites"
  );
  return response.data.customer_satellites;
};

export const getspacecraftsData = async () => {
  const response = await axios.get("https://isro.vercel.app/api/spacecrafts");
  console.log(response);
  return response.data.spacecrafts;
};
