// Example backend utility for testing
// This file will trigger 'api' label when modified

const formatDate = (date) => {
  return new Date(date).toISOString();
};

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const generateId = () => {
  return Math.random().toString(36).substr(2, 9);
};

module.exports = {
  formatDate,
  validateEmail,
  generateId,
};
