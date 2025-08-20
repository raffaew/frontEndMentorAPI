import { useEffect, useState } from "react";
import axios from "axios";
import type { Slip, ApiResponse } from "../../types/api";
import "./home.scss";

const Home = () => {
  const [advice, setAdvice] = useState<Slip | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      await axios
      .get<ApiResponse>("https://api.adviceslip.com/advice")
      .then((response) => {
        setAdvice(response.data.slip);
      })
    } catch (error) {
      console.error("Error fetching advice:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="box">
        <p>ADVICE # {advice?.id}</p>
        <span className="advice-text">"{loading ? "Loading..." : advice?.advice}"</span>
        <img className="pattern-divider" src="/frontEndMentorAPI/pattern-divider-desktop.svg" alt="" />
      </div>
      <div className="dice-icon" onClick={fetchData}>
          <img src="/frontEndMentorAPI/icon-dice.svg" alt="" />
        </div>
    </div>
  );
};

export default Home;
