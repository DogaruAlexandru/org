import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import {
  NotificationSelector,
  NotificationType,
} from './components/notification';
import InvitationPage from './components/invitation-page';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/org/:id" element={<InvitationPage />} />
        <Route
          path="/"
          element={<NotificationSelector type={NotificationType.WrongUrl} />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
