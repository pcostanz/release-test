// Analytics Service
// This is a dummy service for demonstration

class AnalyticsService {
  constructor() {
    this.events = [];
  }

  track(event, data) {
    this.events.push({
      event,
      data,
      timestamp: new Date().toISOString(),
    });
    console.log(`Analytics: ${event}`, data);
  }

  getEvents() {
    return this.events;
  }
}

module.exports = AnalyticsService;

// edit analytics2 2222222222222
