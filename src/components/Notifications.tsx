import React, { useState, useEffect } from 'react';
import { Bell, X } from 'lucide-react';

interface Notification {
  id: number;
  message: string;
  type: 'info' | 'success' | 'warning';
}

export default function Notifications() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Simulate receiving notifications
    const demoNotifications = [
      { id: 1, message: "Your AC service is scheduled for tomorrow", type: 'info' as const },
      { id: 2, message: "TV repair completed successfully", type: 'success' as const },
      { id: 3, message: "Maintenance reminder: Check AC filters", type: 'warning' as const }
    ];
    setNotifications(demoNotifications);
  }, []);

  const removeNotification = (id: number) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  return (
    <div className="fixed top-20 right-20 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg relative"
      >
        <Bell className="w-6 h-6 text-gray-600 dark:text-gray-300" />
        {notifications.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            {notifications.length}
          </span>
        )}
      </button>

      {isOpen && notifications.length > 0 && (
        <div className="absolute top-14 right-0 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg mt-2">
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-4">Notifications</h3>
            <div className="space-y-2">
              {notifications.map(notification => (
                <div
                  key={notification.id}
                  className={`p-3 rounded-lg flex justify-between items-start ${
                    notification.type === 'success' ? 'bg-green-50 dark:bg-green-900/20' :
                    notification.type === 'warning' ? 'bg-yellow-50 dark:bg-yellow-900/20' :
                    'bg-primary-50 dark:bg-primary-900/20'
                  }`}
                >
                  <p className="text-sm">{notification.message}</p>
                  <button
                    onClick={() => removeNotification(notification.id)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}