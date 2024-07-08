import React from 'react';

enum NotificationType {
  Loading,
  Success,
  Error,
  SaveInProgress,
  SaveSuccess,
  SaveError,
}

interface NotificationProps {
  bgColor: string;
  textColor: string;
  children: React.ReactNode;
}

const LoadingNotification: React.FC = () => {
  const [points, setPoints] = React.useState(1);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setPoints((prevPoints) => (prevPoints + 1) % 4);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <Notification bgColor="bg-gray-500" textColor="text-white">
      Loading data
      <div className="w-1">{Array(points).fill('.').join('')}</div>
    </Notification>
  );
};

const SuccessNotification: React.FC = () => {
  return (
    <Notification bgColor="bg-green-600" textColor="text-white">
      Data loaded successfully.
    </Notification>
  );
};

const ErrorNotification: React.FC = () => {
  return (
    <Notification bgColor="bg-red-600" textColor="text-white">
      Failed to load data.
    </Notification>
  );
};

const SaveInProgressNotification: React.FC = () => {
  const [points, setPoints] = React.useState(1);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setPoints((prevPoints) => (prevPoints + 1) % 4);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <Notification bgColor="bg-gray-500" textColor="text-white">
      Saving data
      <div className="w-1">{Array(points).fill('.').join('')}</div>
    </Notification>
  );
};

const SaveSuccessNotification: React.FC = () => {
  return (
    <Notification bgColor="bg-green-600" textColor="text-white">
      Data saved successfully.
    </Notification>
  );
};

const SaveErrorNotification: React.FC = () => {
  return (
    <Notification bgColor="bg-red-600" textColor="text-white">
      Failed to save data.
    </Notification>
  );
};

const Notification: React.FC<NotificationProps> = ({
  bgColor,
  textColor,
  children,
}) => {
  return (
    <div
      className={`${bgColor} ${textColor} shadow-lg px-4 py-8 rounded-lg border border-my_dark 
      font-dancing-script text-center font-bold text-5xl flex justify-center items-center`}
    >
      {children}
    </div>
  );
};

const NotificationSelector: React.FC<{ type: NotificationType }> = ({
  type,
}) => {
  switch (type) {
    case NotificationType.Loading:
      return <LoadingNotification />;
    case NotificationType.Success:
      return <SuccessNotification />;
    case NotificationType.Error:
      return <ErrorNotification />;
    case NotificationType.SaveInProgress:
      return <SaveInProgressNotification />;
    case NotificationType.SaveSuccess:
      return <SaveSuccessNotification />;
    case NotificationType.SaveError:
      return <SaveErrorNotification />;
    default:
      return null;
  }
};

export { NotificationSelector, NotificationType };
