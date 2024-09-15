import Feedback from "../models/Feedback.js";

// Fetch all feedback
export const getAllItems = async (req, res) => {
  try {
    const items = await Feedback.find();
    if (!items || items.length === 0) {
      return res.status(204).json({ message: "No feedback items found" });
    }
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Fetch one feedback item
export const getItem = async (req, res) => {
  const feedbackId = req.params.id;
  if (!feedbackId) return res.status(400).json({ message: "ID parameter missing" });
  try {
    const item = await Feedback.findOne({ id: feedbackId }).exec();
    if (!item) return res.status(404).json({ message: "No feedback found" });
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new feedback item
export const createFeedback = async (req, res) => {
  console.log("hit")
  const { name, email, phoneNumber, branch, rating, feedback } = req.body;

  // Validate required fields
  if (!name || !email || !phoneNumber || !branch || !rating || !feedback) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // Create new feedback document
    const newFeedback = new Feedback({
      name,
      email,
      phoneNumber,
      branch,
      rating,
      feedback,
    });

    // Save feedback to the database
    const savedFeedback = await newFeedback.save();

    // Return success response
    res.status(201).json({ message: 'Feedback submitted successfully', data: savedFeedback });
  } catch (error) {
    console.error('Error saving feedback:', error);
    res.status(500).json({ message: 'Server error, please try again later' });
  }
};


// Update feedback
export const updateFeedback = async (req, res) => {
  const feedbackId = req.query.id;
  const updateData = req.body;
  try {
    const updatedFeedback = await Feedback.findOneAndUpdate(
      { id: feedbackId },
      updateData,
      { new: true, runValidators: true }
    );
    if (!updatedFeedback) {
      return res.status(404).json({ message: "Feedback item not found" });
    }
    res.json({ message: `Feedback ${feedbackId} updated successfully` });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete feedback
export const deleteFeedback = async (req, res) => {
  const feedbackId = req.query.id;
  try {
    const response = await Feedback.findOneAndDelete({ id: feedbackId });
    if (!response) {
      return res.status(404).json({ message: "Feedback not found" });
    }
    res.json({ message: `Feedback ${feedbackId} deleted.` });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
