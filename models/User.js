const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
        type: String,
        required: true,
        trimmed: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        trimmed: true,
        unique: true,
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought"
      },
    ],
    friends: [
        {
          type: Schema.Types.ObjectId,
          ref: "Usert"
        },
      ]
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

userSchema
  .virtual('friendCount')
  // Getter
  .get(function () {
    return this.friends.length
  })
 
const User = model('user', userSchema);

module.exports = User;
