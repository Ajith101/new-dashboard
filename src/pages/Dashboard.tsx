import Sidebar from "../components/Sidebar";
import userImg from "../assets/Rectangle 10.png";
import UserProfileImg from "../assets/media.png";
import fb from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import insta from "../assets/instagram.png";
import { LineChart, PieChart } from "../components/Chart";
import Table from "../components/Table";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";

const Dashboard = () => {
  return (
    <main className="dashboard">
      <div className="bar">
        <h2>Good morning</h2>
        <button>
          <span>
            <h3>Jhon Doe</h3>
            <p>jhon@doe.com</p>
          </span>
          <img src={userImg} alt="" />
        </button>
      </div>
      <section className="graph-container">
        <div className="line-chart">
          <LineChart />
        </div>
        <div className="pie-chart">
          <PieChart />
        </div>
      </section>
      <section className="user-container">
        <Table />
        <article>
          <img src={UserProfileImg} alt="" />
          <h5>John Doe</h5>
          <p>CEO</p>
          <div>
            <img src={fb} alt="" />
            <img src={insta} alt="" />
            <img src={twitter} alt="" />
          </div>
        </article>
      </section>
    </main>
  );
};

export default Dashboard;
