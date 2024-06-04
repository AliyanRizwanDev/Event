import Notification from '../models/NotificationsModel.js'; 


export const getAllNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find(); 
    res.status(200).json(notifications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const createNotification = async (req, res) => {
  try {
    const newNotification = await Notification.create(req.body);
    res.status(201).json(newNotification);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const getNotificationById = async (req, res) => {
  try {
    const notification = await Notification.findById(req.params.id);
    if (!notification) {
      return res.status(404).json({ message: 'Notification not found' });
    }
    res.status(200).json(notification);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const cancelNotification = async (req, res) => {
  try {
    const notification = await Notification.findById(req.params.id);
    if (!notification) {
      return res.status(404).json({ message: 'Notification not found' });
    }
    notification.status = 'canceled'; 
    await notification.save();
    res.status(200).json({ message: 'Notification canceled successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
