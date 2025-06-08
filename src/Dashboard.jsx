import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // In a real app, you might clear authentication tokens here
    navigate('/');
  };

  return (
    <div className="dashboard-container">
      <h2>User Dashboard</h2>
      <div className="dashboard-content">
        <p>Welcome to your dashboard!</p>
        <p>Here you would see your user-specific content.</p>
      </div>
      <button onClick={handleLogout} className="logout-button">
        Logout
      </button>
    </div>
  );
}

export default Dashboard;