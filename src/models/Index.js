const Student = require('./Student');
const MessManager = require('./MessManager');
const Menu = require('./Menu');
const Poll = require('./Poll');
const PollOption = require('./PollOption');
const Vote = require('./Vote');
const ExtraItem = require("./ExtraItem");
const ExtraPurchase = require("./ExtraPurchase");
const Rebate = require("./Rebate");
const Feedback = require("./Feedback");

// --- Student Associations ---
Student.hasMany(Feedback, { foreignKey: 'StudentRollNo' });
Feedback.belongsTo(Student, { foreignKey: 'StudentRollNo' });

Student.hasMany(Rebate, { foreignKey: 'StudentRollNo' });
Rebate.belongsTo(Student, { foreignKey: 'StudentRollNo' });

Student.hasMany(Vote, { foreignKey: 'StudentRollNo' });
Vote.belongsTo(Student, { foreignKey: 'StudentRollNo' });

Student.hasMany(ExtraPurchase, { foreignKey: 'StudentRollNo' });
ExtraPurchase.belongsTo(Student, { foreignKey: 'StudentRollNo' });

// --- Poll & Voting Associations ---
Poll.hasMany(PollOption, { foreignKey: 'PollId' });
PollOption.belongsTo(Poll, { foreignKey: 'PollId' });

Poll.hasMany(Vote, { foreignKey: 'PollId' });
Vote.belongsTo(Poll, { foreignKey: 'PollId' });

PollOption.hasMany(Vote, { foreignKey: 'PollOptionId' });
Vote.belongsTo(PollOption, { foreignKey: 'PollOptionId' });

// --- Extras Associations ---
ExtraItem.hasMany(ExtraPurchase, { foreignKey: 'ExtraItemId' });
ExtraPurchase.belongsTo(ExtraItem, { foreignKey: 'ExtraItemId' });

module.exports = {
  Student,
  MessManager,
  Menu,
  Poll,
  PollOption,
  Vote,
  ExtraItem,
  ExtraPurchase,
  Rebate,
  Feedback
};