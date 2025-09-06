// Notifications Service
// This is a dummy service for demonstration

class NotificationService {
  constructor() {
    this.subscribers = [];
  }

  subscribe(userId, callback) {
    this.subscribers.push({ userId, callback });
    console.log(`User ${userId} subscribed to notifications`);
  }

  send(userId, message) {
    const subscriber = this.subscribers.find((s) => s.userId === userId);
    if (subscriber) {
      subscriber.callback(message);
      console.log(`Notification sent to ${userId}: ${message}`);
    }
  }

  broadcast(message) {
    this.subscribers.forEach((subscriber) => {
      subscriber.callback(message);
    });
    console.log(
      `Broadcast sent to ${this.subscribers.length} subscribers: ${message}`
    );
  }
}

module.exports = NotificationService;
