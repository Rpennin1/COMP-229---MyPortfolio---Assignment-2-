
import Education from "../education.js";

// GET: Get all qualifications
export const getAllQualifications = async (req, res) => {
  try {
    const qualifications = await Education.find();
    res.json(qualifications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET: Get one qualification by ID
export const getQualificationById = async (req, res) => {
  try {
    const qualification = await Education.findById(req.params.id);

    if (!qualification) {
      return res.status(404).json({ message: "Qualification not found" });
    }

    res.json(qualification);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// POST: Add a qualification
export const createQualification = async (req, res) => {
  try {
    const qualification = await Education.create(req.body);
    res.status(201).json(qualification);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// PUT: Update a qualification by ID
export const updateQualification = async (req, res) => {
  try {
    const qualification = await Education.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!qualification) {
      return res.status(404).json({ message: "Qualification not found" });
    }

    res.json(qualification);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE: Remove one qualification by ID
export const deleteQualification = async (req, res) => {
  try {
    const qualification = await Education.findByIdAndDelete(req.params.id);

    if (!qualification) {
      return res.status(404).json({ message: "Qualification not found" });
    }

    res.json({ message: "Qualification deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE: Remove all qualifications
export const deleteAllQualifications = async (req, res) => {
  try {
    await Education.deleteMany({});
    res.json({ message: "All qualifications deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
