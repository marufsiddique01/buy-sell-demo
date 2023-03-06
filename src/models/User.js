import bcrypt from 'bcrypt'
import { model, models, Schema } from 'mongoose'

const UserSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    password: {
      type: String,
      required: true,
      validate: (pass) => {
        if (pass?.length || pass.length < 1) {
          new Error('Password must be at least 5 charachters ')
        }
        return pass + 'test123456'
      },
    },
  },
  { timestamps: true },
)

UserSchema.post('validate', function (user) {
  const notHashedPassword = user.password;
  const salt = bcrypt.genSaltSync(10);
  // const hash = bcrypt.hashSync("B4c0/\/", salt);
  const hashedpassword = bcrypt.hashSync(notHashedPassword, salt)

  user.password = hashedpassword
}
)

export const User = models?.User || model('User', UserSchema)

