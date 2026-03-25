const Student = require('./Student');
const Poll = require('./Poll');
const PollOption = require('./PollOption');
const Vote = require('./Vote');
const ExtraItem = require("./ExtraItem");
const ExtraPurchase = require("./ExtraPurchase");

Student.hasMany(Transaction);
Transaction.belongsTo(Student);

Student.hasMany(Feedback);
Feedback.belongsTo(Student);

Student.hasMany(Rebate);
Rebate.belongsTo(Student);

Student.hasMany(Vote);
Vote.belongsTo(Student);

Poll.hasMany(PollOption);
PollOption.belongsTo(Poll);

PollOption.hasMany(Vote);
Vote.belongsTo(PollOption);

Poll.hasMany(Vote);
Vote.belongsTo(Poll);

Student.hasMany(ExtraPurchase);
ExtraPurchase.belongsTo(Student);

ExtraItem.hasMany(ExtraPurchase);
ExtraPurchase.belongsTo(ExtraItem);