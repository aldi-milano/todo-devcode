import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import DashboardDetail from './components/DashboardDetail';
import api from './components/api/api';
import './scss/style.scss';

function App() {
  const [activities, setActivities] = useState([]);
  const [modal, setModal] = useState(false);

  async function getAllActivity() {
    const response = await api.get('/activity-groups');
    setActivities(response.data.data);
  }

  useEffect(() => {
    getAllActivity();
  }, []);

  async function addActivity() {
    const request = {
      title: 'New Activity',
    };
    const response = await api.post('/activity-groups', request);
    setActivities([...activities, response.data]);
    getAllActivity();
  }

  useEffect(() => {
    console.log(activities);
  }, [activities]);

  const showModal = () => setModal(true);
  const closeModal = () => setModal(false);

  async function deleteHandler(id) {
    const response = await api.delete(`/activity-groups/${id}`);
    const filter = await activities.data?.filter(act => act.id != id);
    showModal();
    getAllActivity();
    setActivities(filter);
  }

  async function toDashboardDetail(id) {
    // console.log(id);
    const response = await api.get(`/activity-groups/${id}`);
  }

  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={
              <Dashboard
                activities={activities}
                deleteHandler={deleteHandler}
                addActivity={addActivity}
                modal={modal}
                closeModal={closeModal}
                showModal={showModal}
                toDashboardDetail={toDashboardDetail}
              />
            }
          />
          <Route
            path='/detail/:Id'
            element={
              <DashboardDetail
                activities={activities}
                getAllActivity={getAllActivity}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
