"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const BankSchema = new mongoose_1.Schema({
    bank_name: String,
    branch_name: String,
    acc_name: String,
    acc_number: Number,
    routing_number: Number,
    id: String,
});
const ContactSchema = new mongoose_1.Schema({
    name: String,
    relation: String,
    phone: String,
    id: String,
});
const AchievementSchema = new mongoose_1.Schema({
    name: String,
    date: Date,
    id: String,
});
const userSchema = new mongoose_1.default.Schema({
    // Personal Information
    name: { type: String },
    email: { type: String },
    dob: { type: Date },
    phone: { type: String },
    gender: { type: String },
    blood_group: { type: String },
    marital_status: { type: String },
    // Identity Information
    user_id: { type: String },
    nid: { type: Number },
    tin: { type: Number },
    // Address Information
    present_address: { type: String },
    permanent_address: { type: String },
    // Work Information
    office_id: { type: String },
    team: { type: String },
    role: { type: String },
    department: { type: String },
    designation: { type: String },
    employment_type: { type: String },
    join_date: { type: Date },
    permanent_join: { type: Date },
    resignation_date: { type: Date },
    manager: { type: String },
    achievements: [AchievementSchema],
    archived: { type: Boolean, default: false },
    // Additional Information
    tools: { type: [String], ref: "Tool" },
    courses: { type: [String], ref: "Course" },
    profiles: { type: [String], ref: "Profile" },
    assets: { type: [mongoose_1.Schema.Types.ObjectId], ref: "Asset" },
    // Miscellaneous
    date: { type: Date, default: Date.now },
    banks: { type: [BankSchema] },
    note: { type: String },
    // Emergency Contacts
    contacts: { type: [ContactSchema] },
}, {
    timestamps: true,
});
exports.User = (0, mongoose_1.model)("user", userSchema);
//# sourceMappingURL=user.model.js.map