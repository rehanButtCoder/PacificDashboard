import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Bar Chart',
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June'];
let dataFake = [9, 2, 3, 4, 8, 6]

export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: dataFake.map((item) => item),
            backgroundColor: '#D34444',
        },
        {
            label: 'Dataset 2',
            data: dataFake.map((item) => item),
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

const Dashboard = () => {
    return (
        <div className="mainDashboard side_dashboard_container">
            <div className="row">
                <div className="col-md-12">
                    <div className="dashboardHeading">
                        <h2>Dashboard</h2>
                    </div>
                </div>
            </div>
            <div className="dashboard-stats">
                <div className="dashboard-boxes">
                    <div className="dashboard-box">
                        <div className="box-head">
                            <h2>Users</h2>
                        </div>
                        <h5>Total Users</h5>
                        <div className="box-description">
                            <img src="/assets/images/Dashboard/User Iconbb.svg" alt="" /><span>60,000</span>
                        </div>
                        <div className="box-footer">
                            <img src="/assets/images/Dashboard/DownArrow.svg" alt="" /><span>Potential Growth</span>
                        </div>
                    </div>
                    <div className="dashboard-box">
                        <div className="box-head">
                            <h2>Lessons</h2>
                        </div>
                        <h5>Total Lessons</h5>
                        <div className="box-description">
                            <img src="/assets/images/Dashboard/User Iconbb.svg" alt="" /><span>1000</span>
                        </div>
                        <div className="box-footer red">
                            <img src="/assets/images/Dashboard/DownArrow2.svg" alt="" /><span>Potential Growth</span>
                        </div>
                    </div>
                    <div className="dashboard-box">
                        <div className="box-head">
                            <h2>Assessments</h2>
                        </div>
                        <h5>Total Assessments</h5>
                        <div className="box-description">
                            <img src="/assets/images/Dashboard/Dashboard Assessmentsbb.svg" alt="" /><span>5000</span>
                        </div>
                        <div className="box-footer">
                            <img src="/assets/images/Dashboard/DownArrow.svg" alt="" /><span>Potential Growth</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dashboard-trade">
                <div className="dashboard-chart">
                    <div className="box-head">
                        <h2>Users</h2>
                    </div>
                    <div className='box-chart'>
                        <Bar options={options} data={data} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;