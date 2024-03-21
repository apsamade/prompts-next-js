import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'Email déjà existant !'],
        required: [true, 'Email obligatoire !'],
        lowercase: true,
        trim: true
    },
    username: {
        type: String,
        required: [true, 'Username is required!'],
    },
    image: {
        type: String,
    }
});

const User = models.User || model("User", UserSchema);

export default User;