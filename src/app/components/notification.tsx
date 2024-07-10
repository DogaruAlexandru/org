import React from 'react';

enum NotificationType {
  Loading,
  LoadingSuccess,
  LoadingError,
  SaveInProgress,
  SaveSuccess,
  SaveError,
  WrongUrl,
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
    <Notification bgColor="my-gray-grd" textColor="text-white">
      Loading data
      <div className="w-1">{Array(points).fill('.').join('')}</div>
    </Notification>
  );
};

const SuccessNotification: React.FC = () => {
  return (
    <Notification bgColor="my-green-grd" textColor="text-white">
      Data loaded successfully.
    </Notification>
  );
};

const ErrorNotification: React.FC = () => {
  return (
    <Notification bgColor="my-red-grd" textColor="text-white">
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
    <Notification bgColor="my-gray-grd" textColor="text-white">
      Saving data
      <div className="w-1">{Array(points).fill('.').join('')}</div>
    </Notification>
  );
};

const SaveSuccessNotification: React.FC = () => {
  return (
    <Notification bgColor="my-green-grd" textColor="text-white">
      Data saved successfully.
    </Notification>
  );
};

const SaveErrorNotification: React.FC = () => {
  return (
    <Notification bgColor="my-red-grd" textColor="text-white">
      Failed to save data.
    </Notification>
  );
};

import bg_image from '../../assets/images/bg.png';

const WrongUrlNotification: React.FC = () => {
  return (
    <div
      className="bg-repeat h-svh overflow-y-auto scrollbar-thin scrollbar-thumb-accent-dark 
      scrollbar-track-accent-light overflow-x-hidden text-3xl
      space-y-6 py-6 px-4 sm:py-8 sm:px-16 md:py-10 md:px-20 lg:py-12 lg:px-32"
      style={{ backgroundImage: `url(${bg_image})` }}
    >
      <Notification bgColor="my-gray-grd" textColor="text-white">
        <h1>Welcome to the Wedding Invitation Site</h1>
        <p>
          Please use the correct invitation link to access the invitation page.
        </p>
      </Notification>
    </div>
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
      font-dancing-script text-center font-bold text-3xl flex justify-center items-center flex-wrap`}
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
    case NotificationType.LoadingSuccess:
      return <SuccessNotification />;
    case NotificationType.LoadingError:
      return <ErrorNotification />;
    case NotificationType.SaveInProgress:
      return <SaveInProgressNotification />;
    case NotificationType.SaveSuccess:
      return <SaveSuccessNotification />;
    case NotificationType.SaveError:
      return <SaveErrorNotification />;
    case NotificationType.WrongUrl:
      return <WrongUrlNotification />;
    default:
      return null;
  }
};

export { NotificationSelector, NotificationType };
