import React from 'react';
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import {
  NotificationSelector,
  NotificationType,
} from './components/notification';
import InvitationPage from './components/invitation-page';
import Background from './components/animations/background';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/:id"
          element={
            <div>
              <Background />
              <InvitationPage />
            </div>
          }
        />
        <Route
          path="/"
          element={
            <div>
              <Background />
              <NotificationSelector type={NotificationType.WrongUrl} />
            </div>
          }
        />
        <Route
          path="*"
          element={
            <div>
              <Background />
              <Navigate to="/" />
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
