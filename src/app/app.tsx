import React from 'react';
import {
  HashRouter as Router, // Changed from BrowserRouter to HashRouter
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
        <Route path="/:id" element={<InvitationPage />} />
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
